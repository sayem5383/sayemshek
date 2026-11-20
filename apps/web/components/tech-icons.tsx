import {
  SiCss,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si"
import type { IconType } from "react-icons"

function VsCodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.15 2.587 18.67.881a1.02 1.02 0 0 0-1.06.25L8.23 10.47 3.54 7.09 2 7.79v8.42l1.54.7 4.69-3.38 9.38 9.34a1.02 1.02 0 0 0 1.06.25l4.48-1.706a1.02 1.02 0 0 0 .65-.95V3.537a1.02 1.02 0 0 0-.65-.95ZM18.3 16.7 11.4 12l6.9-4.7v9.4Z" />
    </svg>
  )
}

const iconMap: Record<string, IconType> = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  vscode: VsCodeIcon as IconType,
  git: SiGit,
  github: SiGithub,
}

export function TechIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon className={className} aria-hidden="true" />
}
