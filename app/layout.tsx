import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Escape Bandipur | Luxury Retreat Near Bandipur Tiger Reserve",
  description:
    "Experience slow living at The Escape Bandipur - a charming retreat tucked between lush forest and peaceful farmland. Book your wildlife safari getaway today.",
  keywords: [
    "Bandipur resort",
    "wildlife resort",
    "nature retreat",
    "Karnataka homestay",
    "safari lodge",
    "eco resort",
  ],
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
