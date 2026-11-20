"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState, type ReactNode } from "react"

export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  const reduceMotion = useReducedMotion()
  const [shown, setShown] = useState(false)

  // Fallback for browsers/environments where IntersectionObserver is throttled:
  // content must never stay invisible.
  useEffect(() => {
    const timer = window.setTimeout(() => setShown(true), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  const target = reduceMotion || shown ? { opacity: 1, y: 0 } : undefined

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={target}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setShown(true)}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
