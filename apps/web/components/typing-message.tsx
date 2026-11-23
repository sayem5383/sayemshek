"use client"

import { useInView, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { InteractiveButton } from "@/components/interactive-button"
import { Reveal } from "@/components/reveal"

const messages = [
  "Thanks for Visiting My Portfolio!",
  "Let's Build Something Amazing Together.",
  "Feel Free to Contact Me.",
] as const

/** Types through the closing lines once when the section scrolls into view. */
export function TypingMessage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduceMotion = useReducedMotion()
  const [text, setText] = useState("")
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (!inView) return

    if (reduceMotion) {
      setText(messages[messages.length - 1] ?? "")
      setFinished(true)
      return
    }

    let cancelled = false
    let timer = 0
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = window.setTimeout(resolve, ms)
      })

    const run = async () => {
      for (let index = 0; index < messages.length; index++) {
        const full = messages[index] ?? ""

        for (let length = 1; length <= full.length; length++) {
          if (cancelled) return
          setText(full.slice(0, length))
          await wait(42 + Math.random() * 26)
        }

        // Stay on the final line instead of looping forever.
        if (index === messages.length - 1) break

        await wait(1500)

        for (let length = full.length - 1; length >= 0; length--) {
          if (cancelled) return
          setText(full.slice(0, length))
          await wait(20)
        }

        await wait(350)
      }

      if (!cancelled) setFinished(true)
    }

    void run()
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [inView, reduceMotion])

  return (
    <section className="closing-section relative py-20 sm:py-24" aria-label="Closing message">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Until next time
          </span>

          <p className="sr-only">
            Thanks for visiting my portfolio! Let&apos;s build something amazing
            together. Feel free to contact me.
          </p>

          <div
            ref={ref}
            className="mt-7 flex min-h-[5rem] w-full items-center justify-center sm:min-h-[4.5rem]"
          >
            <p aria-hidden="true" className="text-xl font-semibold leading-snug text-white sm:text-2xl md:text-3xl">
              <span>{text}</span>
              <span
                className={`typing-caret ${reduceMotion ? "typing-caret--static" : ""} ${finished ? "typing-caret--settled" : ""}`}
              >
                |
              </span>
            </p>
          </div>

          <p className="mt-1 text-sm text-white/45">
            Have a project in mind? I&apos;d love to hear about it.
          </p>

          <InteractiveButton className="mt-7 inline-flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/[0.08] px-6 py-3 text-sm font-semibold text-orange-200 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </InteractiveButton>
        </Reveal>
      </div>
    </section>
  )
}
