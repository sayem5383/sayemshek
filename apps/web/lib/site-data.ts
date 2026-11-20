export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
] as const

export const socialLinks = {
  github: "https://github.com/sayem5383",
  linkedin: "https://www.linkedin.com/in/sayemshek5383",
  twitter: "https://x.com/sayem_5383",
  email: "sayemshek5383@gmail.com",
  phone: "+8801815812911",
  whatsapp: "https://wa.me/8801815812911",
} as const

export type Skill = {
  name: string
  icon: string
  color: string
  level: string
}

export const skills: Skill[] = [
  { name: "HTML", icon: "html", color: "#ff6b1a", level: "Semantic markup" },
  { name: "CSS", icon: "css", color: "#3b82f6", level: "Modern layouts" },
  { name: "JavaScript", icon: "javascript", color: "#f7df1e", level: "Interactions" },
  { name: "Tailwind CSS", icon: "tailwind", color: "#38bdf8", level: "Rapid styling" },
  { name: "Next.js", icon: "nextjs", color: "#ffffff", level: "Full-stack React" },
  { name: "Node.js", icon: "nodejs", color: "#68a063", level: "Server-side JS" },
]

export type Tool = {
  name: string
  icon: string
  color: string
  description: string
}

export const tools: Tool[] = [
  {
    name: "VS Code",
    icon: "vscode",
    color: "#3b9eff",
    description: "Where the ideas become code.",
  },
  {
    name: "Git",
    icon: "git",
    color: "#ff5c36",
    description: "Version control, always in sync.",
  },
  {
    name: "GitHub",
    icon: "github",
    color: "#ffffff",
    description: "Code, collaborate and ship.",
  },
]

export type Project = {
  title: string
  description: string
  preview: "portfolio" | "ecommerce" | "business"
  tags: string[]
}

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio site.",
    preview: "portfolio",
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "E-Commerce Store",
    description: "A fully functional online store.",
    preview: "ecommerce",
    tags: ["React", "UI/UX"],
  },
  {
    title: "Business Website",
    description: "A professional business website.",
    preview: "business",
    tags: ["Responsive", "SEO"],
  },
]

export type JourneyItem = {
  year: string
  title: string
  icon: string
  detail: string
}

export const journey: JourneyItem[] = [
  {
    year: "2023",
    title: "Started Learning Web Development",
    icon: "book",
    detail: "The first steps into HTML, CSS and the web.",
  },
  {
    year: "2024",
    title: "Built My First Website",
    icon: "code",
    detail: "Turning a blank page into something real.",
  },
  {
    year: "2025",
    title: "Worked On Real Projects",
    icon: "briefcase",
    detail: "Shipping interfaces for real-world use.",
  },
  {
    year: "2026",
    title: "Growing as a Professional Developer",
    icon: "rocket",
    detail: "Refining craft and taking on new challenges.",
  },
]
