"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const parallaxSpeed = 0.5
        heroRef.current.style.transform = `translateY(${scrollY * parallaxSpeed}px)`
      }

      const progress = Math.min(window.scrollY / 300, 1)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMenuToggle = (e: CustomEvent) => {
      setIsMobileMenuOpen(e.detail.isOpen)
    }
    window.addEventListener("mobileMenuToggle", handleMenuToggle as EventListener)
    return () => window.removeEventListener("mobileMenuToggle", handleMenuToggle as EventListener)
  }, [])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <div ref={heroRef} className="absolute inset-0">
        <Image
          src="/images/dji-20251001152835-0036-d.jpg"
          alt="The Escape Bandipur Resort"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div
        className={cn(
          "fixed transition-all duration-100 ease-out",
          // Higher z-index when menu is open so logo stays visible
          isMobileMenuOpen ? "z-[65]" : "z-[60]",
        )}
        style={{
          left: isMobileMenuOpen
            ? `calc(50% - 50px)`
            : `calc(${50 - scrollProgress * 50}% - ${60 - scrollProgress * 35}px + ${scrollProgress * 16}px)`,
          top: isMobileMenuOpen
            ? `20px`
            : `calc(${25 - scrollProgress * 25}vh - ${60 - scrollProgress * 40}px + ${scrollProgress * 8}px)`,
          transform: isMobileMenuOpen ? `scale(0.8)` : `scale(${1 - scrollProgress * 0.5})`,
          opacity: scrollProgress > 0.1 ? 1 : undefined,
        }}
      >
        <Image
          src="/images/the-20escape-20bandipur.png"
          alt="The Escape Bandipur Logo"
          width={120}
          height={120}
          className={cn(
            "object-contain transition-all duration-300 w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]",
            scrollProgress > 0.5 ? "drop-shadow-md" : "",
            // Add white glow/shadow when menu is open for better visibility
            isMobileMenuOpen && "drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]",
          )}
        />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="h-[120px] md:h-[150px] lg:h-[180px]" />

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-widest mb-3 md:mb-4 animate-fade-in-up animation-delay-200">
          THE ESCAPE
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 tracking-[0.2em] md:tracking-[0.3em] font-light mb-6 md:mb-8 animate-fade-in-up animation-delay-400">
          BANDIPUR
        </p>
        <p className="max-w-xs sm:max-w-md md:max-w-2xl text-white/80 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-8 md:mb-12 animate-fade-in-up animation-delay-600 px-4">
          A charming retreat designed for slow living, tucked away between lush forest and peaceful green farmland
        </p>

        <a href="#about" className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
    </section>
  )
}
