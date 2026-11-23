import { ArrowUpRight } from "lucide-react"

import { InteractiveButton } from "@/components/interactive-button"
import { ProjectPreview } from "@/components/project-preview"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Tilt3D } from "@/components/tilt-3d"
import { projects } from "@/lib/site-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Selected work"
          title="My Projects"
          subtitle="Some of my recent work — a small selection of what I love building."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <Tilt3D max={8} glare>
                <article
                  data-cursor="hover"
                  className="glass-card project-card group flex h-full flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06] bg-[#0d0d11]">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.06]">
                      <ProjectPreview variant={project.preview} />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080a]/45 to-transparent" />
                  </div>

                  <div className="relative flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-orange-400/20 bg-orange-500/[0.07] px-2.5 py-1 text-[10px] font-medium text-orange-200/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-white/45">
                      {project.description}
                    </p>
                    <InteractiveButton className="mt-6 inline-flex">
                      <a
                        href="#contact"
                        aria-label={`Discuss the ${project.title} project`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-900/30 transition-all duration-300 hover:rotate-6 hover:scale-110 hover:shadow-orange-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
                      >
                        <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </InteractiveButton>
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
