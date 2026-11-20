import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TechIcon } from "@/components/tech-icons"
import { Tilt3D } from "@/components/tilt-3d"
import { tools } from "@/lib/site-data"

export function ToolsSection() {
  return (
    <section id="tools" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="My toolkit"
          title="Tools I Use"
          subtitle="My favorite tools for writing, tracking and shipping great code."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {tools.map((tool, index) => (
            <Reveal key={tool.name} delay={index * 0.09}>
              <Tilt3D max={7}>
                <article className="glass-card group flex h-full items-center gap-5 p-6">
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl transition-transform duration-500 group-hover:scale-110"
                    style={{ color: tool.color }}
                  >
                    <TechIcon
                      name={tool.icon}
                      className="tech-icon-glow h-7 w-7"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-white">
                      {tool.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-white/45">
                      {tool.description}
                    </p>
                  </div>
                </article>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
