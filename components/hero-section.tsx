"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true
        requestAnimationFrame(() => {
          const progress = Math.min(window.scrollY / 300, 1)
          setScrollProgress(progress)
          ticking.current = false
        })
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMenuToggle = (e: CustomEvent) => {
      setIsMobileMenuOpen(e.detail.isOpen)
    }
    window.addEventListener("mobileMenuToggle", handleMenuToggle as EventListener)
    return () => window.removeEventListener("mobileMenuToggle", handleMenuToggle as EventListener)
  }, [])

  const logoStyle = isMobileMenuOpen
    ? {
        left: "50%",
        top: "20px",
        transform: "translateX(-50%) scale(0.7)",
      }
    : {
        left: `calc(${50 - scrollProgress * 46}% - ${50 - scrollProgress * 30}px)`,
        top: `calc(${20 - scrollProgress * 18}vh)`,
        transform: `scale(${1 - scrollProgress * 0.55})`,
      }

  return (
    <section id="home" className="relative h-[100svh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/dji-20251001152835-0036-d.jpg"
          alt="The Escape Bandipur Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Floating Logo */}
      <div
        className={cn("fixed transition-all duration-200 ease-out", isMobileMenuOpen ? "z-[65]" : "z-[60]")}
        style={logoStyle}
      >
        <Image
          src="/images/the-20escape-20bandipur.png"
          alt="The Escape Bandipur Logo"
          width={120}
          height={120}
          className={cn(
            "object-contain w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]",
            scrollProgress > 0.5 && "drop-shadow-md",
            isMobileMenuOpen && "drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]",
          )}
        />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        {/* Spacer for logo */}
        <div className="h-[80px] sm:h-[100px] md:h-[150px] lg:h-[180px]" />

        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-light text-white tracking-[0.15em] sm:tracking-widest mb-2 md:mb-4 animate-fade-in-up animation-delay-200">
          THE ESCAPE
        </h1>
        <p className="text-base sm:text-lg md:text-2xl text-white/90 tracking-[0.15em] sm:tracking-[0.3em] font-light mb-4 sm:mb-6 md:mb-8 animate-fade-in-up animation-delay-400">
          BANDIPUR
        </p>
        <p className="max-w-[280px] sm:max-w-md md:max-w-2xl text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-6 sm:mb-8 md:mb-12 animate-fade-in-up animation-delay-600">
          A charming retreat designed for slow living, tucked away between lush forest and peaceful green farmland
        </p>

        <a
          href="#contact"
          className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/40 text-white text-sm sm:text-base font-medium rounded-full hover:bg-white/30 transition-colors animate-fade-in-up animation-delay-600 mb-8"
        >
          Book Your Stay
        </a>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
        </a>
      </div>
    </section>
  )
}
