"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Farming", href: "#farming" },
  { name: "Wildlife", href: "#wildlife" },
  { name: "Temple", href: "#temple" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const headerHeight = 70
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
      {/* Fixed Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-2 md:py-3",
        )}
      >
        <div className="container mx-auto px-3 md:px-4 flex items-center justify-between">
          {/* Logo placeholder space - smaller on mobile */}
          <div className="w-10 h-10 md:w-14 md:h-14" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-[#2d4a2d] hover:bg-[#2d4a2d]/10 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Book Now Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden lg:block px-5 py-2 bg-[#2d4a2d] text-white text-sm font-semibold rounded-lg hover:bg-[#3d5a3d] transition-colors"
          >
            Book Now
          </a>

          {/* Mobile Menu Button - Larger touch target */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#2d4a2d] text-white active:scale-95 transition-transform"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full screen for mobile */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

          {/* Menu Panel - Full width on mobile */}
          <div className="absolute top-0 right-0 w-full sm:max-w-sm h-full bg-white shadow-2xl flex flex-col">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-4 border-b bg-[#f8f9f6]">
              <span className="text-xl font-semibold text-[#2d4a2d]">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#2d4a2d] text-white active:scale-95 transition-transform"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links - Larger touch targets for mobile */}
            <nav className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center px-4 py-4 text-lg text-[#2d4a2d] font-medium rounded-xl hover:bg-[#2d4a2d]/10 active:bg-[#2d4a2d]/20 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* Bottom Section - Always visible */}
            <div className="p-4 border-t bg-[#f8f9f6] safe-area-bottom">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block w-full py-4 bg-[#2d4a2d] text-white text-center text-lg font-semibold rounded-xl active:bg-[#3d5a3d] transition-colors"
              >
                Book Your Stay
              </a>
              <a
                href="tel:+917736368336"
                className="flex items-center justify-center gap-3 mt-4 py-3 text-[#2d4a2d] text-lg font-medium"
              >
                <div className="w-10 h-10 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+91 77363 68336</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
