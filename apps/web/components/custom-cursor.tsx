"use client"

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'

/**
 * Lightweight custom cursor: one fast glowing dot, one responsive ring and one
 * lagging trail. Only mounts for fine pointers when reduced motion is off.
 */
export function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const hoveringRef = useRef(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const dotX = useSpring(x, { stiffness: 900, damping: 48, mass: 0.2 })
  const dotY = useSpring(y, { stiffness: 900, damping: 48, mass: 0.2 })
  const ringX = useSpring(x, { stiffness: 240, damping: 24, mass: 0.45 })
  const ringY = useSpring(y, { stiffness: 240, damping: 24, mass: 0.45 })
  const trailX = useSpring(x, { stiffness: 90, damping: 20, mass: 0.65 })
  const trailY = useSpring(y, { stiffness: 90, damping: 20, mass: 0.65 })

  useEffect(() => {
    const pointer = window.matchMedia("(pointer: fine)")
    const sync = () => setEnabled(pointer.matches && !reduceMotion)
    sync()
    pointer.addEventListener?.("change", sync)
    return () => pointer.removeEventListener?.("change", sync)
  }, [reduceMotion])

  useEffect(() => {
    if (!enabled) return

    const container = containerRef.current

    let positioned = false

    const show = () => {
      if (container) container.style.opacity = "1"
    }
    const hide = () => {
      if (container) container.style.opacity = "0"
    }

    const onMove = (event: PointerEvent) => {
      if (!positioned) {
        // Avoid a visible fly-in from the top-left on the first move.
        x.jump(event.clientX)
        y.jump(event.clientY)
        dotX.jump(event.clientX)
        dotY.jump(event.clientY)
        ringX.jump(event.clientX)
        ringY.jump(event.clientY)
        trailX.jump(event.clientX)
        trailY.jump(event.clientY)
        positioned = true
      } else {
        x.set(event.clientX)
        y.set(event.clientY)
      }
      show()

      const target = event.target as Element | null
      const overInteractive = Boolean(target?.closest?.(INTERACTIVE_SELECTOR))
      if (overInteractive !== hoveringRef.current) {
        hoveringRef.current = overInteractive
        setHovering(overInteractive)
      }
    }

    const onOut = (event: PointerEvent) => {
      if (!event.relatedTarget) hide()
    }
    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onBlur = () => {
      hide()
      setPressed(false)
    }

    document.addEventListener("pointermove", onMove, { passive: true })
    document.addEventListener("pointerout", onOut)
    window.addEventListener("pointerdown", onDown)
    window.addEventListener("pointerup", onUp)
    window.addEventListener("pointercancel", onUp)
    window.addEventListener("blur", onBlur)

    return () => {
      document.removeEventListener("pointermove", onMove)
      document.removeEventListener("pointerout", onOut)
      window.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointerup", onUp)
      window.removeEventListener("pointercancel", onUp)
      window.removeEventListener("blur", onBlur)
    }
  }, [enabled, x, y, dotX, dotY, ringX, ringY, trailX, trailY])

  if (!enabled) return null

  return (
    <div ref={containerRef} aria-hidden="true" className="custom-cursor">
      <motion.div
        className="custom-cursor__trail"
        style={{ x: trailX, y: trailY }}
        animate={{ scale: hovering ? 1.25 : 1, opacity: hovering ? 0.5 : 0.28 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="custom-cursor__ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: pressed ? 0.82 : hovering ? 1.55 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      />
      <motion.div
        className="custom-cursor__dot"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: pressed ? 1.35 : hovering ? 0.6 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}
