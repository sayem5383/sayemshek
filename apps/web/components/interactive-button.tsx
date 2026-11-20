"use client"

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react"

export function InteractiveButton({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 20, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 220, damping: 20, mass: 0.3 })

  useEffect(() => {
    if (reduceMotion) return
    const query = window.matchMedia("(pointer: fine)")
    const sync = () => setEnabled(query.matches)
    sync()
    query.addEventListener?.("change", sync)
    return () => query.removeEventListener?.("change", sync)
  }, [reduceMotion])

  const onPointerMove = (event: ReactPointerEvent<HTMLSpanElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.22)
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.22)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  if (!enabled || reduceMotion) {
    return <span className={className}>{children}</span>
  }

  return (
    <motion.span
      ref={ref}
      className={`interactive-button ${className}`}
      style={{ x: springX, y: springY }}
      data-hover={hovered}
      onPointerEnter={() => setHovered(true)}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </motion.span>
  )
}
