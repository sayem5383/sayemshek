"use client"

import { useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

/** Pointer-tracked light that gives the hero a subtle studio-lit depth. */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(false)

  useEffect(() => {
    const light = ref.current
    const surface = light?.parentElement
    if (!light || !surface || reduceMotion) return
    if (!window.matchMedia("(pointer: fine)").matches) return

    const onMove = (event: PointerEvent) => {
      const rect = surface.getBoundingClientRect()
      light.style.setProperty("--spot-x", `${event.clientX - rect.left}px`)
      light.style.setProperty("--spot-y", `${event.clientY - rect.top}px`)
    }
    const onEnter = () => setActive(true)
    const onLeave = () => setActive(false)

    surface.addEventListener("pointermove", onMove, { passive: true })
    surface.addEventListener("pointerenter", onEnter)
    surface.addEventListener("pointerleave", onLeave)

    return () => {
      surface.removeEventListener("pointermove", onMove)
      surface.removeEventListener("pointerenter", onEnter)
      surface.removeEventListener("pointerleave", onLeave)
    }
  }, [reduceMotion])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-active={active}
      className="hero-spotlight"
    />
  )
}
