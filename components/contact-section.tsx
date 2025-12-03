"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Phone, Instagram, MapPin } from "lucide-react"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#8b9d6a] text-sm tracking-[0.3em] uppercase font-medium">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-6 leading-tight">Book Your Escape</h2>
            <div className="w-16 h-0.5 bg-[#8b9d6a] mb-8" />
            <p className="text-[#5a5a5a] leading-relaxed mb-8 text-lg">
              Ready to escape the ordinary? Contact us to book your stay at The Escape Bandipur and experience the
              perfect blend of nature, comfort, and adventure.
            </p>

            <div className="space-y-6">
              <a href="tel:+917736368336" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center group-hover:bg-[#2d4a2d] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#2d4a2d] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-[#5a5a5a]">Call us</p>
                  <p className="text-[#2d4a2d] font-medium">+91 77363 68336</p>
                </div>
              </a>

              <a href="tel:+917736368436" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center group-hover:bg-[#2d4a2d] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#2d4a2d] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-[#5a5a5a]">Alternate Number</p>
                  <p className="text-[#2d4a2d] font-medium">+91 77363 68436</p>
                </div>
              </a>

              <a
                href="https://instagram.com/theescape.bandipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center group-hover:bg-[#2d4a2d] transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-[#2d4a2d] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-sm text-[#5a5a5a]">Follow us</p>
                  <p className="text-[#2d4a2d] font-medium">@theescape.bandipur</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#2d4a2d]" />
                </div>
                <div>
                  <p className="text-sm text-[#5a5a5a]">Location</p>
                  <p className="text-[#2d4a2d] font-medium">Gundlupet Road, Bandipur, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="relative">
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/dji-20251001152801-0034-d.jpg"
                  alt="The Escape Bandipur Property"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#2d4a2d]/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
