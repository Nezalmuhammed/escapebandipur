"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, Phone } from "lucide-react"
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
  const [activeLink, setActiveLink] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => ({
        name: link.name,
        element: document.querySelector(link.href),
      }))

      for (const section of sections.reverse()) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveLink(section.name)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("mobileMenuToggle", { detail: { isOpen: isMobileMenuOpen } }))
  }, [isMobileMenuOpen])

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName)
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.08)] py-2"
          : "bg-transparent py-3 md:py-4",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div
          className={cn(
            "transition-all duration-500",
            isScrolled ? "w-[50px] h-[50px] md:w-[60px] md:h-[60px]" : "w-[50px] h-[50px] md:w-[70px] md:h-[70px]",
          )}
        />

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={cn(
                "relative px-3 2xl:px-4 py-2 text-xs 2xl:text-sm font-medium tracking-wide transition-all duration-300 rounded-full group",
                isScrolled
                  ? activeLink === link.name
                    ? "text-white"
                    : "text-[#2d4a2d] hover:text-[#2d4a2d]"
                  : activeLink === link.name
                    ? "text-white"
                    : "text-white/80 hover:text-white",
              )}
            >
              <span
                className={cn(
                  "absolute inset-0 rounded-full transition-all duration-300 -z-10",
                  activeLink === link.name
                    ? "bg-[#2d4a2d] scale-100 opacity-100"
                    : "bg-[#2d4a2d]/10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100",
                )}
              />
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className={cn(
            "hidden xl:flex items-center gap-2 px-5 2xl:px-6 py-2.5 rounded-full text-xs 2xl:text-sm font-semibold transition-all duration-500 group overflow-hidden relative",
            isScrolled
              ? "bg-[#2d4a2d] text-white shadow-lg shadow-[#2d4a2d]/20 hover:shadow-xl hover:shadow-[#2d4a2d]/30 hover:scale-105"
              : "bg-white text-[#2d4a2d] hover:bg-white/90 hover:scale-105",
          )}
        >
          <span className="relative z-10">Book Now</span>
          <span
            className={cn(
              "absolute inset-0 bg-[#3d5a3d] transition-transform duration-500 -translate-x-full group-hover:translate-x-0",
              !isScrolled && "bg-[#f5f5f0]",
            )}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "xl:hidden relative z-[70] w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300",
            isMobileMenuOpen
              ? "bg-[#2d4a2d] text-white"
              : isScrolled
                ? "bg-[#2d4a2d]/10 text-[#2d4a2d] hover:bg-[#2d4a2d]/20"
                : "bg-white/20 text-white hover:bg-white/30",
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-5 h-5">
            <span
              className={cn(
                "absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ease-out",
                isMobileMenuOpen ? "top-[9px] rotate-45" : "top-1",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[9px] w-5 h-0.5 bg-current transition-all duration-300",
                isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 w-5 h-0.5 bg-current transition-all duration-300 ease-out",
                isMobileMenuOpen ? "top-[9px] -rotate-45" : "top-[17px]",
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 z-[55] transition-all duration-500",
          isMobileMenuOpen ? "visible" : "invisible",
        )}
      >
        {/* Backdrop - semi-transparent to show logo behind */}
        <div
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500",
            isMobileMenuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={cn(
            "absolute right-0 top-0 h-full w-full sm:w-[380px] bg-white shadow-2xl transition-transform duration-500 ease-out overflow-hidden",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Header with transparent cutout for logo */}
          <div className="relative border-b border-[#2d4a2d]/10 bg-gradient-to-b from-[#f8f8f5] to-white">
            {/* Back button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute left-4 top-4 flex items-center gap-2 text-[#2d4a2d] hover:text-[#3d5a3d] transition-colors duration-300 group z-10"
            >
              <span className="w-10 h-10 rounded-full bg-[#2d4a2d]/10 flex items-center justify-center group-hover:bg-[#2d4a2d] group-hover:text-white transition-all duration-300 shadow-sm">
                <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
              </span>
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Back
              </span>
            </button>

            {/* Centered menu title with decorative elements */}
            <div className="flex flex-col items-center justify-center py-6 pt-16">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-px bg-[#2d4a2d]/30"></span>
                <span className="text-[#2d4a2d] font-serif text-xl tracking-[0.2em] uppercase">Menu</span>
                <span className="w-8 h-px bg-[#2d4a2d]/30"></span>
              </div>
              <span className="text-[#2d4a2d]/50 text-xs tracking-widest">THE ESCAPE BANDIPUR</span>
            </div>
          </div>

          {/* Navigation links */}
          <nav className="p-5 space-y-1 overflow-y-auto max-h-[calc(100vh-280px)]">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={cn(
                  "flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group",
                  activeLink === link.name ? "bg-[#2d4a2d] text-white" : "text-[#2d4a2d] hover:bg-[#2d4a2d]/10",
                )}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 40}ms` : "0ms",
                  transform: isMobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
              >
                <span
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeLink === link.name
                      ? "bg-white scale-100"
                      : "bg-[#2d4a2d]/30 scale-75 group-hover:scale-100 group-hover:bg-[#2d4a2d]",
                  )}
                />
                <span className="font-medium text-base">{link.name}</span>
                <span
                  className={cn(
                    "ml-auto transition-all duration-300",
                    activeLink === link.name
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0",
                  )}
                >
                  <ChevronLeft className="w-4 h-4 rotate-180" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom CTA section */}
          <div
            className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#2d4a2d]/10 bg-gradient-to-t from-[#f8f8f5] to-white space-y-3"
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 40 + 100}ms` : "0ms",
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#2d4a2d] text-white rounded-xl font-semibold text-base hover:bg-[#3d5a3d] transition-all duration-300 hover:shadow-lg hover:shadow-[#2d4a2d]/20"
            >
              Book Your Stay
            </Link>

            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 w-full py-3 text-[#2d4a2d] font-medium hover:text-[#3d5a3d] transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
