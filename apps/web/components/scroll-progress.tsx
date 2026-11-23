"use client"

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion"

/** Slim scroll indicator that anchors the transition between sections. */
export function ScrollProgress() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  })

  if (reduceMotion) return null

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-gradient-to-r from-orange-600 via-orange-300 to-orange-500 shadow-[0_0_12px_rgba(255,107,26,0.7)]"
      style={{ scaleX }}
    />
  )
}
