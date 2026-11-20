"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

export function TimelineProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 25%"],
  })

  const progress = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1]),
    { stiffness: 60, damping: 24 },
  )

  return (
    <div ref={ref} className="absolute inset-0" aria-hidden="true">
      <motion.div
        className="absolute left-[15px] top-2 h-[calc(100%-1rem)] w-[2px] origin-top rounded-full bg-gradient-to-b from-orange-400/80 to-orange-600/30 shadow-[0_0_12px_rgba(255,107,26,0.35)] md:hidden"
        style={{ scaleY: reduceMotion ? 1 : progress }}
      />
      <motion.div
        className="absolute left-0 top-[21px] hidden h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-orange-400/80 to-orange-600/30 shadow-[0_0_12px_rgba(255,107,26,0.35)] md:block"
        style={{ scaleX: reduceMotion ? 1 : progress }}
      />
    </div>
  )
}
