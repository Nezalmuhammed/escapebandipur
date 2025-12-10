import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
