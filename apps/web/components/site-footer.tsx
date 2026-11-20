import { Mail } from "lucide-react"
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa"
import { SiGithub } from "react-icons/si"

import { InteractiveButton } from "@/components/interactive-button"
import { socialLinks } from "@/lib/site-data"

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#070709]/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 sm:flex-row sm:px-8 lg:px-12">
        <p className="text-center text-sm text-white/40 sm:text-left">
          © 2026 Sayem Shek. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/30">
            Follow Me
          </span>
          <div className="flex items-center gap-2">
            <InteractiveButton>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
              >
                <SiGithub className="h-4 w-4" aria-hidden="true" />
              </a>
            </InteractiveButton>
            <InteractiveButton>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
              >
                <FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
              </a>
            </InteractiveButton>
            <InteractiveButton>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp chat"
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
              </a>
            </InteractiveButton>
            <InteractiveButton>
              <a
                href={`mailto:${socialLinks.email}`}
                aria-label="Send email"
                className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/40 hover:text-orange-300"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </InteractiveButton>
          </div>
        </div>
      </div>
    </footer>
  )
}
