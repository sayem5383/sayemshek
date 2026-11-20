import type { ReactNode } from "react"

import { Reveal } from "@/components/reveal"

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  icon,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: "center" | "left"
  icon?: ReactNode
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start"

  return (
    <Reveal className={`mb-12 flex flex-col gap-3 ${alignment}`}>
      <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/[0.07] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-300">
        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
        {eyebrow}
      </span>
      <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {icon}
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xl text-sm leading-relaxed text-white/50 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
