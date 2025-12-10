"use client"

import { useRef } from "react"
import Image from "next/image"
import { useAutoScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useAutoScrollAnimation(sectionRef)

  return (
    <section id="about" ref={sectionRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="scroll-fade-in order-2 lg:order-1">
            <span className="text-[#8b9d6a] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">
              Welcome to
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2d4a2d] mt-2 sm:mt-3 mb-3 sm:mb-4 md:mb-6 leading-tight">
              The Escape Bandipur
            </h2>
            <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-[#8b9d6a] mb-4 sm:mb-6 md:mb-8" />
            <p className="text-[#5a5a5a] leading-relaxed mb-3 sm:mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
              Tucked away between lush forest and peaceful green farmland, The Escape Bandipur is a charming little
              retreat designed for slow living. Every corner of the property feels warm, intimate and close to nature —
              perfect for travellers who love privacy, calm and scenic beauty.
            </p>
            <p className="text-[#5a5a5a] leading-relaxed text-sm sm:text-base md:text-lg">
              Wake up to the sound of birds, sip your morning coffee with mountain air, and spend your days surrounded
              by greenery instead of crowds. Whether you're here to relax, reconnect or simply escape routine, this
              place makes you feel at home — only better.
            </p>
          </div>

          <div className="scroll-fade-in delay-2 order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl">
                <Image src="/images/dsc01005.jpg" alt="The Escape Bandipur Villa" fill className="object-cover" />
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
