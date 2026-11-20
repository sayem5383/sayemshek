import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Rocket,
  type LucideIcon,
} from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TimelineProgress } from "@/components/timeline-progress"
import { journey } from "@/lib/site-data"

const iconMap: Record<string, LucideIcon> = {
  book: BookOpen,
  code: Code2,
  briefcase: BriefcaseBusiness,
  rocket: Rocket,
}

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The road so far"
          title="My Journey"
          subtitle="My learning & growth path, one year at a time."
        />

        <div className="relative">
          <TimelineProgress />

          <div className="grid gap-10 md:grid-cols-4 md:gap-5">
            {journey.map((item, index) => {
              const Icon = iconMap[item.icon] ?? Code2
              return (
                <Reveal key={item.year} delay={index * 0.12}>
                  <div className="relative pl-11 md:pl-0">
                    <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-orange-400/40 bg-[#0e0e12] text-orange-300 shadow-[0_0_20px_rgba(255,107,26,0.2)] md:static md:mb-6">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="inline-flex rounded-full border border-orange-400/25 bg-orange-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-orange-300">
                      {item.year}
                    </span>
                    <h3 className="mt-4 text-base font-semibold leading-6 text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
