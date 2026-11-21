import Image from "next/image"
import { CheckCircle2, Mail, MapPin, User } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { socialLinks } from "@/lib/site-data"

const details = [
  { label: "Name", value: "Sayem Shek", icon: User },
  { label: "Email", value: socialLinks.email, icon: Mail },
  { label: "Location", value: "Bangladesh", icon: MapPin },
  { label: "Availability", value: "Available for Freelance", icon: CheckCircle2 },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          align="left"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-500/15 via-transparent to-orange-700/10 blur-2xl" />
              <div className="glass-card relative h-full w-full rounded-[1.8rem] p-2">
                <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
                  <Image
                    src="/images/about-sayem.webp"
                    alt="Sayem Shek"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 80vw, 380px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080a]/55 via-transparent to-transparent" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-3 rounded-2xl border border-orange-400/30 bg-[#0d0d10]/90 px-4 py-3 shadow-xl backdrop-blur-md">
                <span className="block text-2xl font-bold text-orange-300">3+</span>
                <span className="text-[11px] uppercase tracking-wider text-white/45">
                  Years of learning
                </span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.1}>
              <p className="text-lg leading-9 text-white/65 sm:text-xl sm:leading-10">
                I&apos;m a{" "}
                <span className="font-semibold text-white">passionate web developer</span>{" "}
                who loves to turn ideas into fast, tidy, and user-friendly
                websites. I enjoy working with modern web technologies and
                always try to learn something new.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 text-sm leading-7 text-white/45">
                From the first line of markup to the final polished interaction,
                I care about the details that make a website feel effortless to
                use.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {details.map((detail, index) => {
                const Icon = detail.icon
                return (
                  <Reveal key={detail.label} delay={0.22 + index * 0.07}>
                    <div className="glass-card flex items-start gap-3 rounded-2xl p-4">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-orange-400/20 bg-orange-500/10 text-orange-300">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">
                          {detail.label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-medium text-white/85">
                          {detail.value}
                        </span>
                      </span>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
