"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function KidsPlaySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="kids-play" ref={sectionRef} className="py-12 sm:py-16 md:py-24 bg-[#f8f9f5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 scroll-fade-in">
          <span className="text-[#8b9d6a] text-xs tracking-[0.2em] font-medium uppercase">Fun For Little Ones</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2d4a2d] mt-2 sm:mt-3 text-balance">
            Kids Play Area
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-[#8b9d6a] mx-auto mt-3 sm:mt-4"></div>
          <p className="text-[#5a6d5a] mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2">
            A dedicated space where children can play, explore, and create lasting memories while parents relax and
            enjoy the serene surroundings.
          </p>
        </div>

        <div className="scroll-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {/* Image 1 */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/kids-play-area-1.jpg"
                  alt="Kids Play Area at The Escape Bandipur - View 1"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d4a2d]/30 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/kids-play-area-2.jpg"
                  alt="Kids Play Area at The Escape Bandipur - View 2"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d4a2d]/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Tags below images - scrollable on mobile */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
            <span className="bg-white text-[#2d4a2d] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm">
              Safe Environment
            </span>
            <span className="bg-white text-[#2d4a2d] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm">
              Outdoor Fun
            </span>
            <span className="bg-white text-[#2d4a2d] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm">
              Family Friendly
            </span>
          </div>
        </div>

        {/* Features - 2x2 grid on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 scroll-fade-in">
          {[
            { title: "Swings", desc: "Fun swing sets" },
            { title: "Slides", desc: "Safe play slides" },
            { title: "Open Space", desc: "Room to run" },
            { title: "Shaded Area", desc: "Comfortable play" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 text-center shadow-sm hover:shadow-md active:shadow-md transition-shadow"
            >
              <h4 className="text-[#2d4a2d] font-semibold text-sm sm:text-base md:text-lg">{feature.title}</h4>
              <p className="text-[#5a6d5a] text-xs sm:text-sm mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
