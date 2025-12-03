"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <span className="text-[#8b9d6a] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">Welcome to</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4 md:mb-6 leading-tight">
              The Escape Bandipur
            </h2>
            <div className="w-12 md:w-16 h-0.5 bg-[#8b9d6a] mb-6 md:mb-8" />
            <p className="text-[#5a5a5a] leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
              Tucked away between lush forest and peaceful green farmland, The Escape Bandipur is a charming little
              retreat designed for slow living. Every corner of the property feels warm, intimate and close to nature —
              perfect for travellers who love privacy, calm and scenic beauty.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed text-base md:text-lg">
              Wake up to the sound of birds, sip your morning coffee with mountain air, and spend your days surrounded
              by greenery instead of crowds. Whether you're here to relax, reconnect or simply escape routine, this
              place makes you feel at home — only better.
            </p>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl md:shadow-2xl">
                <Image
                  src="/images/dsc01005.jpg"
                  alt="The Escape Bandipur Villa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="hidden md:block absolute -bottom-6 -left-6 w-48 h-48 bg-[#2d4a2d]/10 rounded-lg -z-10" />
              <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 bg-[#8b9d6a]/20 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
