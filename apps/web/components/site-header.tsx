"use client"

import { ArrowUpRight, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { InteractiveButton } from "@/components/interactive-button"
import { ScrollProgress } from "@/components/scroll-progress"
import { navLinks } from "@/lib/site-data"

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>("#home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((element): element is Element => element !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-white/[0.07] bg-[#08080a]/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <ScrollProgress />
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#home"
          className="group flex min-w-0 items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          aria-label="SAYEM SHEK — back to top"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-sm font-black text-white shadow-lg shadow-orange-900/40">
            S
            <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          <span className="whitespace-nowrap text-[15px] font-bold uppercase tracking-[0.06em] text-white transition-colors duration-300 group-hover:text-white/90 sm:text-base">
            SAYEM <span className="text-orange-400">SHEK</span>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                active === link.href
                  ? "text-orange-300"
                  : "text-white/60 hover:text-white"
              }`}
              aria-current={active === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <InteractiveButton className="hidden sm:inline-flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg shadow-orange-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </InteractiveButton>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:border-orange-400/40 hover:text-orange-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/[0.05] bg-[#0a0a0c]/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active === link.href
                  ? "bg-orange-500/10 text-orange-300"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <InteractiveButton className="mt-2 inline-flex w-full sm:hidden">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </InteractiveButton>
        </nav>
      </div>
    </header>
  )
}
