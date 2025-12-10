"use client"

import { useRef } from "react"
import Image from "next/image"
import { Phone, Instagram, MapPin } from "lucide-react"
import { useAutoScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useAutoScrollAnimation(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="scroll-fade-in order-2 lg:order-1">
            <span className="text-[#8b9d6a] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2d4a2d] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6 leading-tight">
              Book Your Escape
            </h2>
            <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-[#8b9d6a] mb-4 sm:mb-6 md:mb-8" />
            <p className="text-[#5a5a5a] leading-relaxed mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
              Ready to escape the ordinary? Contact us to book your stay at The Escape Bandipur and experience the
              perfect blend of nature, comfort, and adventure.
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <a
                href="tel:+917736368336"
                className="flex items-center gap-3 sm:gap-4 group p-2 -m-2 rounded-xl active:bg-[#2d4a2d]/5"
              >
                <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center group-hover:bg-[#2d4a2d] transition-colors duration-200 shrink-0">
                  <Phone className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2d4a2d] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs text-[#5a5a5a]">Call us</p>
                  <p className="text-[#2d4a2d] font-medium text-base sm:text-lg">+91 77363 68336</p>
                </div>
              </a>

              <a
                href="tel:+917736368436"
                className="flex items-center gap-3 sm:gap-4 group p-2 -m-2 rounded-xl active:bg-[#2d4a2d]/5"
              >
                <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center group-hover:bg-[#2d4a2d] transition-colors duration-200 shrink-0">
                  <Phone className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2d4a2d] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs text-[#5a5a5a]">Alternate Number</p>
                  <p className="text-[#2d4a2d] font-medium text-base sm:text-lg">+91 77363 68436</p>
                </div>
              </a>

              <a
                href="https://instagram.com/theescape.bandipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 group p-2 -m-2 rounded-xl active:bg-[#2d4a2d]/5"
              >
                <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center group-hover:bg-[#2d4a2d] transition-colors duration-200 shrink-0">
                  <Instagram className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2d4a2d] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-xs text-[#5a5a5a]">Follow us</p>
                  <p className="text-[#2d4a2d] font-medium text-base sm:text-lg">@theescape.bandipur</p>
                </div>
              </a>

              <div className="flex items-center gap-3 sm:gap-4 p-2 -m-2">
                <div className="w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2d4a2d]" />
                </div>
                <div>
                  <p className="text-xs text-[#5a5a5a]">Location</p>
                  <p className="text-[#2d4a2d] font-medium text-base sm:text-lg">Gundlupet Road, Bandipur, Karnataka</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-fade-in delay-2 order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] sm:aspect-square relative rounded-xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl">
                <Image
                  src="/images/dji-20251001152801-0034-d.jpg"
                  alt="The Escape Bandipur Property"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden md:block absolute -bottom-6 -right-6 w-48 h-48 bg-[#2d4a2d]/10 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
