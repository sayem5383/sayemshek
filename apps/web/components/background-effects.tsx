"use client"

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion"
import { type CSSProperties } from "react"

type Particle = {
  left: number
  top: number
  size: number
  duration: number
  delay: number
  opacity: number
  drift: number
}

const particles: Particle[] = [
  { left: 6, top: 9, size: 3, duration: 21, delay: -3, opacity: 0.5, drift: 16 },
  { left: 14, top: 24, size: 5, duration: 26, delay: -11, opacity: 0.35, drift: -18 },
  { left: 22, top: 61, size: 2, duration: 18, delay: -7, opacity: 0.6, drift: 12 },
  { left: 29, top: 14, size: 4, duration: 24, delay: -16, opacity: 0.42, drift: 22 },
  { left: 34, top: 78, size: 3, duration: 20, delay: -5, opacity: 0.48, drift: -14 },
  { left: 41, top: 35, size: 6, duration: 30, delay: -19, opacity: 0.28, drift: 20 },
  { left: 47, top: 88, size: 2, duration: 17, delay: -2, opacity: 0.55, drift: -10 },
  { left: 52, top: 7, size: 4, duration: 25, delay: -13, opacity: 0.4, drift: 18 },
  { left: 58, top: 48, size: 3, duration: 22, delay: -9, opacity: 0.5, drift: -20 },
  { left: 63, top: 72, size: 5, duration: 28, delay: -21, opacity: 0.3, drift: 14 },
  { left: 69, top: 19, size: 2, duration: 19, delay: -4, opacity: 0.62, drift: -12 },
  { left: 74, top: 55, size: 4, duration: 27, delay: -15, opacity: 0.36, drift: 24 },
  { left: 79, top: 92, size: 3, duration: 23, delay: -8, opacity: 0.46, drift: -16 },
  { left: 84, top: 31, size: 6, duration: 32, delay: -24, opacity: 0.26, drift: 18 },
  { left: 89, top: 67, size: 2, duration: 18, delay: -6, opacity: 0.58, drift: -14 },
  { left: 94, top: 12, size: 4, duration: 26, delay: -17, opacity: 0.38, drift: 20 },
  { left: 10, top: 46, size: 2, duration: 20, delay: -12, opacity: 0.52, drift: 12 },
  { left: 18, top: 83, size: 5, duration: 29, delay: -22, opacity: 0.3, drift: -18 },
  { left: 26, top: 37, size: 3, duration: 23, delay: -10, opacity: 0.44, drift: 16 },
  { left: 38, top: 57, size: 2, duration: 19, delay: -1, opacity: 0.6, drift: -10 },
  { left: 55, top: 27, size: 5, duration: 31, delay: -26, opacity: 0.25, drift: 22 },
  { left: 66, top: 94, size: 3, duration: 21, delay: -14, opacity: 0.48, drift: -16 },
  { left: 76, top: 41, size: 2, duration: 18, delay: -3, opacity: 0.56, drift: 12 },
  { left: 92, top: 82, size: 4, duration: 25, delay: -18, opacity: 0.34, drift: -20 },
]

type ParticleStyle = CSSProperties & {
  "--p-opacity"?: number
  "--p-drift"?: string
}

export function BackgroundEffects() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()

  const layerNear = useSpring(useTransform(scrollY, [0, 7000], [0, -60]), {
    stiffness: 40,
    damping: 28,
  })
  const layerMid = useSpring(useTransform(scrollY, [0, 7000], [0, -110]), {
    stiffness: 40,
    damping: 28,
  })
  const layerFar = useSpring(useTransform(scrollY, [0, 7000], [0, -165]), {
    stiffness: 40,
    damping: 28,
  })

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#08080a]"
    >
      {/* Liquid mesh gradients */}
      <motion.div
        className="absolute -inset-[12%]"
        style={{ y: reduceMotion ? 0 : layerFar }}
      >
        <div className="mesh-gradient h-full w-full" />
      </motion.div>

      {/* Aurora-style glow */}
      <motion.div
        className="absolute -inset-x-[8%] top-[8%] h-[70vh]"
        style={{ y: reduceMotion ? 0 : layerMid }}
      >
        <div className="aurora-glow h-full w-full" />
      </motion.div>

      {/* Slow drifting gradient lights */}
      <motion.div
        style={{ y: reduceMotion ? 0 : layerNear }}
        className="animate-drift absolute -left-52 -top-40 h-[36rem] w-[36rem] rounded-full bg-orange-600/10 blur-[130px]"
      />
      <motion.div
        style={{ y: reduceMotion ? 0 : layerMid }}
        className="animate-glow absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-orange-500/[0.07] blur-[120px]"
      />
      <motion.div
        style={{ y: reduceMotion ? 0 : layerFar }}
        className="animate-drift absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-amber-700/[0.06] blur-[140px]"
      />

      {/* Morphing abstract light waves */}
      <motion.div
        style={{ y: reduceMotion ? 0 : layerMid }}
        className="wave-blob absolute -left-24 top-[18%] h-[30rem] w-[34rem]"
      />
      <motion.div
        style={{ y: reduceMotion ? 0 : layerFar }}
        className="wave-blob wave-blob--alt absolute -right-32 bottom-[12%] h-[34rem] w-[38rem]"
      />

      {/* Soft glowing depth rings */}
      <motion.div
        style={{ y: reduceMotion ? 0 : layerNear }}
        className="glow-ring absolute left-[12%] top-[28%] h-40 w-40"
      />
      <motion.div
        style={{ y: reduceMotion ? 0 : layerFar }}
        className="glow-ring glow-ring--small absolute bottom-[22%] right-[16%] h-24 w-24"
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute left-[17%] top-[14%] h-20 w-20"
        style={{ y: reduceMotion ? 0 : layerNear }}
      >
        <div className="geo-shape geo-shape--triangle h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute right-[22%] top-[54%] h-16 w-16"
        style={{ y: reduceMotion ? 0 : layerMid }}
      >
        <div className="geo-shape geo-shape--hexagon h-full w-full" />
      </motion.div>
      <motion.div
        className="absolute bottom-[12%] left-[38%] h-14 w-14"
        style={{ y: reduceMotion ? 0 : layerFar }}
      >
        <div className="geo-shape geo-shape--ring h-full w-full" />
      </motion.div>

      {/* Neon light streaks */}
      <div className="light-streak light-streak--one" />
      <div className="light-streak light-streak--two" />
      <div className="light-streak light-streak--three" />

      {/* Animated grid + fine dot pattern */}
      <div className="grid-layer absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-[length:28px_28px] opacity-[0.045]" />

      {/* Floating orange particles */}
      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="particle"
            style={
              {
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: particle.size,
                height: particle.size,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
                "--p-opacity": particle.opacity,
                "--p-drift": `${particle.drift}px`,
              } as ParticleStyle
            }
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,8,10,0)_55%,rgba(8,8,10,0.75)_100%)]" />
    </div>
  )
}
