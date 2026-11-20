import { ArrowUpRight, Mail } from "lucide-react"
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import type { LucideIcon } from "lucide-react"

import { InteractiveButton } from "@/components/interactive-button"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Tilt3D } from "@/components/tilt-3d"
import { socialLinks } from "@/lib/site-data"

type ContactCard = {
  label: string
  value: string
  href: string
  button: string
  icon: LucideIcon | typeof FaWhatsapp | typeof FaXTwitter
  color: string
  external: boolean
}

const cards: ContactCard[] = [
  {
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    button: "Send Email",
    icon: Mail,
    color: "#ff6b1a",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Sayem Shek",
    href: socialLinks.linkedin,
    button: "Visit Profile",
    icon: FaLinkedinIn,
    color: "#38bdf8",
    external: true,
  },
  {
    label: "WhatsApp",
    value: socialLinks.phone,
    href: socialLinks.whatsapp,
    button: "Chat Now",
    icon: FaWhatsapp,
    color: "#25d366",
    external: true,
  },
  {
    label: "X (Twitter)",
    value: "@sayem_5383",
    href: socialLinks.twitter,
    button: "Visit Profile",
    icon: FaXTwitter,
    color: "#e7e9ea",
    external: true,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-600/[0.07] blur-[110px]"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Let's connect"
          title="Contact Me"
          subtitle="Feel free to reach out! I'm always open to discussing new projects, opportunities, or just a friendly chat."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <Reveal key={card.label} delay={index * 0.1}>
                <Tilt3D max={7}>
                  <article className="glass-card group flex h-full flex-col p-6 sm:p-7">
                    <span
                      className="grid h-13 w-13 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-xl transition-transform duration-500 group-hover:scale-110"
                      style={{ color: card.color }}
                    >
                      <Icon
                        className="contact-icon-float h-6 w-6"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
                      {card.label}
                    </p>
                    <p className="mt-2 break-words text-base font-medium text-white sm:text-lg">
                      {card.value}
                    </p>
                    <span className="my-5 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                    <InteractiveButton className="mt-auto inline-flex">
                      <a
                        href={card.href}
                        {...(card.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-400/25 bg-orange-500/[0.08] px-5 py-3 text-sm font-semibold text-orange-200 transition-all duration-300 hover:border-orange-400/60 hover:bg-orange-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                      >
                        {card.button}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </InteractiveButton>
                  </article>
                </Tilt3D>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
