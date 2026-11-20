"use client"

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react"

export function Tilt3D({
  children,
  className = "h-full",
  max = 9,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 180, damping: 20, mass: 0.4 })
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20, mass: 0.4 })

  useEffect(() => {
    if (reduceMotion) return
    const query = window.matchMedia("(pointer: fine)")
    const sync = () => setEnabled(query.matches)
    sync()
    query.addEventListener?.("change", sync)
    return () => query.removeEventListener?.("change", sync)
  }, [reduceMotion])

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    rotateY.set(px * max * 2)
    rotateX.set(-py * max * 2)
  }

  const reset = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  if (!enabled || reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={className} style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        className="h-full"
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        onBlur={reset}
      >
        {children}
      </motion.div>
    </div>
  )
}
