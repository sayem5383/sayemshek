import { AboutSection } from "@/components/about-section"
import { BackgroundEffects } from "@/components/background-effects"
import { ContactSection } from "@/components/contact-section"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/hero-section"
import { JourneySection } from "@/components/journey-section"
import { ProjectsSection } from "@/components/projects-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SkillsSection } from "@/components/skills-section"
import { ToolsSection } from "@/components/tools-section"
import { TypingMessage } from "@/components/typing-message"

export default function Page() {
  return (
    <>
      <BackgroundEffects />
      <CustomCursor />
      <SiteHeader />
      <main className="page-enter">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ToolsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
        <TypingMessage />
      </main>
      <SiteFooter />
    </>
  )
}
