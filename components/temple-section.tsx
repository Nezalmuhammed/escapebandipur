"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { MapPin, Sun, Mountain } from "lucide-react"

export function TempleSection() {
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
      { threshold: 0.2 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="temple" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#8b9d6a] text-sm tracking-[0.3em] uppercase font-medium">Sacred Destination</span>
            <h2 className="text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-6 leading-tight">
              Gopalaswamy Betta Temple
            </h2>
            <div className="w-16 h-0.5 bg-[#8b9d6a] mb-8" />
            <p className="text-[#5a5a5a] leading-relaxed mb-6 text-lg">
              A beautiful hilltop temple with amazing views of Bandipur. The climate here is cool and peaceful, and it's
              a great place to watch the sunrise. On the way, you may also spot elephants and deer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center gap-3 bg-[#f8f9f6] p-4 rounded-lg">
                <MapPin className="w-5 h-5 text-[#2d4a2d]" />
                <div>
                  <p className="text-sm text-[#5a5a5a]">Distance</p>
                  <p className="font-semibold text-[#2d4a2d]">Only 9 KM</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#f8f9f6] p-4 rounded-lg">
                <Sun className="w-5 h-5 text-[#2d4a2d]" />
                <div>
                  <p className="text-sm text-[#5a5a5a]">Best Time</p>
                  <p className="font-semibold text-[#2d4a2d]">Sunrise</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#f8f9f6] p-4 rounded-lg">
                <Mountain className="w-5 h-5 text-[#2d4a2d]" />
                <div>
                  <p className="text-sm text-[#5a5a5a]">Type</p>
                  <p className="font-semibold text-[#2d4a2d]">Hilltop</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/image.jpeg"
                  alt="Gopalaswamy Betta Temple"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#2d4a2d]/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#8b9d6a]/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
