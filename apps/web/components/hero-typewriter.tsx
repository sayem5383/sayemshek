"use client"

import { useInView, useReducedMotion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const GREETING = "Hello, I am Sayem Shek"
const ROLE = "Frontend Developer"
const NAME_START = GREETING.indexOf("Sayem")

/**
 * Types the hero heading line by line. It runs once when the hero is visible,
 * holds briefly between lines and leaves a blinking caret at the end.
 */
export function HeroTypewriter() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const reduceMotion = useReducedMotion()
  const [greeting, setGreeting] = useState("")
  const [role, setRole] = useState("")
  const [settled, setSettled] = useState(false)

  useEffect(() => {
    if (!inView) return

    if (reduceMotion) {
      setGreeting(GREETING)
      setRole(ROLE)
      setSettled(true)
      return
    }

    let cancelled = false
    let timer = 0
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms)
      })

    const run = async () => {
      for (let length = 1; length <= GREETING.length; length++) {
        if (cancelled) return
        setGreeting(GREETING.slice(0, length))
        await wait(46)
      }

      // Brief pause so the first line can be read before the role types in.
      await wait(1100)

      for (let length = 1; length <= ROLE.length; length++) {
        if (cancelled) return
        setRole(ROLE.slice(0, length))
        await wait(58)
      }

      if (!cancelled) setSettled(true)
    }

    void run()
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [inView, reduceMotion])

  const caret = (visible: boolean) =>
    visible ? (
      <span
        className={`typing-caret ${reduceMotion ? "typing-caret--static" : ""} ${settled ? "typing-caret--settled" : ""}`}
      >
        |
      </span>
    ) : null

  return (
    <div ref={ref}>
      <h1 className="mt-6 text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
        <span className="sr-only">{GREETING} — {ROLE}</span>
        <span aria-hidden="true">
          <span className="block min-h-[1.05em]">
            <span className="text-white/85">
              {greeting.slice(0, Math.min(greeting.length, NAME_START))}
            </span>
            <span className="gradient-text">{greeting.slice(NAME_START)}</span>
            {caret(role.length === 0)}
          </span>
          <span className="gradient-text mt-1 block min-h-[1.05em] text-[0.72em] sm:mt-2 lg:text-[0.62em]">
            {role}
            {caret(role.length > 0)}
          </span>
        </span>
      </h1>
    </div>
  )
}
