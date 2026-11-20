import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TechIcon } from "@/components/tech-icons"
import { Tilt3D } from "@/components/tilt-3d"
import { skills } from "@/lib/site-data"

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="What I work with"
          title="My Skills"
          subtitle="The technologies I use to build fast, polished and dependable experiences."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.07}>
              <Tilt3D max={7}>
                <article className="glass-card group h-full p-6">
                  <span
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                    style={{ backgroundColor: skill.color }}
                    aria-hidden="true"
                  />
                  <div className="relative flex items-center justify-between">
                    <span
                      className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ color: skill.color }}
                    >
                      <TechIcon
                        name={skill.icon}
                        className="tech-icon-glow h-7 w-7"
                      />
                    </span>
                    <span className="font-mono text-xs text-white/20">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="relative mt-6 text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <p className="relative mt-1 text-sm text-white/45">
                    {skill.level}
                  </p>
                  <span className="relative mt-5 block h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                </article>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
