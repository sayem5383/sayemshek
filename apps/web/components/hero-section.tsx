import Image from "next/image"
import { ArrowRight, Download, Mail, MapPin } from "lucide-react"
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { SiGithub } from "react-icons/si"

import { HeroSpotlight } from "@/components/hero-spotlight"
import { HeroTypewriter } from "@/components/hero-typewriter"
import { InteractiveButton } from "@/components/interactive-button"
import { ParallaxLayer } from "@/components/parallax-layer"
import { Reveal } from "@/components/reveal"
import { Tilt3D } from "@/components/tilt-3d"
import { socialLinks } from "@/lib/site-data"

export function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section-bg relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 sm:pt-32"
    >
      <HeroSpotlight />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12">
        <div className="relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/25 bg-orange-500/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400" />
              Frontend Developer
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <HeroTypewriter />
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-sm text-white/45">
                <MapPin className="h-3.5 w-3.5 text-orange-400/80" aria-hidden="true" />
                Bangladesh
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
              I build modern, high-performance websites using HTML, CSS,
              JavaScript, React &amp; more.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <InteractiveButton>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                >
                  View My Projects
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </InteractiveButton>
              <InteractiveButton>
                <a
                  href="/Sayem-Shek-CV.pdf"
                  download="Sayem-Shek-CV.pdf"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                >
                  <Download
                    className="h-4 w-4 text-orange-300 transition-transform duration-300 group-hover:translate-y-0.5"
                    aria-hidden="true"
                  />
                  Download CV
                </a>
              </InteractiveButton>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                Follow me
              </span>
              <span className="h-px w-8 bg-white/10" />
              <div className="flex items-center gap-2.5">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
                >
                  <SiGithub className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
                >
                  <FaLinkedinIn className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
                >
                  <FaWhatsapp className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  aria-label="Send email"
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
                >
                  <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative z-10">
          <ParallaxLayer distance={38}>
            <Tilt3D className="mx-auto w-full max-w-[430px]" max={6}>
              <div className="hero-stage relative aspect-square w-full">
                <div className="animate-glow absolute inset-[6%] rounded-full bg-orange-500/25 blur-3xl" />
                <div className="animate-orbit absolute inset-[2%] rounded-full border border-dashed border-orange-400/25" />
                <div className="hero-light-ring absolute inset-[4%] rounded-full" />
                <div className="absolute inset-[9%] rounded-full border border-orange-500/10" />
                <div className="hero-portrait-float relative h-full w-full overflow-hidden rounded-full border-2 border-orange-400/35 bg-[#111114] shadow-[0_0_70px_rgba(255,107,26,0.22)]">
                  <Image
                    src="/images/hero-sayem.webp"
                    alt="Sayem Shek"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 80vw, 430px"
                    className="object-contain"
                  />
                  <div className="hero-sheen pointer-events-none absolute inset-0" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080a]/45 via-transparent to-orange-300/10" />
                </div>
                <span className="hero-chip hero-chip--one" aria-hidden="true">
                  React
                </span>
                <span className="hero-chip hero-chip--two" aria-hidden="true">
                  Next.js
                </span>
                <span className="hero-chip hero-chip--three" aria-hidden="true">
                  Tailwind
                </span>
                <div className="absolute bottom-5 right-1 z-10 flex items-center gap-2 rounded-full border border-orange-400/30 bg-[#0d0d10]/85 px-3 py-2 text-[11px] font-medium text-white/80 shadow-lg backdrop-blur-md sm:bottom-8 sm:right-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                  Available for freelance
                </div>
              </div>
            </Tilt3D>
          </ParallaxLayer>
        </Reveal>
      </div>
    </section>
  )
}
