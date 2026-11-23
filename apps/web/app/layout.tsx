import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import "./portfolio.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Sayem Shek — Frontend Developer",
  description:
    "Sayem Shek is a frontend developer who builds modern, high-performance websites using HTML, CSS, JavaScript, React, Next.js and more.",
  keywords: [
    "Sayem Shek",
    "frontend developer",
    "web developer",
    "React developer",
    "Next.js developer",
    "portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Sayem Shek" }],
  openGraph: {
    type: "website",
    title: "Sayem Shek — Frontend Developer",
    description:
      "Modern, high-performance websites built with HTML, CSS, JavaScript, React and Next.js.",
    siteName: "Sayem Shek",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#08080a] font-sans text-white antialiased">
        {children}
      </body>
    </html>
  )
}
