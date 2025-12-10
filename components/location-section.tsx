"use client"

import { useRef } from "react"
import Image from "next/image"
import { MapPin, Car } from "lucide-react"
import { useAutoScrollAnimation } from "@/hooks/use-scroll-animation"

const distances = [
  { place: "Bandipur Tiger Reserve", distance: "26 KM" },
  { place: "Gopalaswamy Temple", distance: "9 KM" },
  { place: "Shivanasamudra Waterfalls", distance: "20 KM" },
  { place: "Muthanga Wildlife", distance: "25 KM" },
  { place: "Wayanad", distance: "25 KM" },
  { place: "Mudumalai", distance: "36 KM" },
  { place: "Masinagudi", distance: "36 KM" },
  { place: "Mysore", distance: "58 KM" },
  { place: "Ooty", distance: "70 KM" },
  { place: "Shivasamudram Falls", distance: "90 KM" },
]

export function LocationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useAutoScrollAnimation(sectionRef)

  return (
    <section id="location" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-[#f8f9f6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 scroll-fade-in">
          <span className="text-[#8b9d6a] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">Find Us</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4">Location & Distances</h2>
          <div className="w-12 md:w-16 h-0.5 bg-[#8b9d6a] mx-auto mb-4 md:mb-6" />
          <p className="text-[#5a5a5a] text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
            Gundlupet Road, Bandipur, Karnataka
          </p>
        </div>

        {/* Convenient Break Journey Stay Banner */}
        <div className="scroll-fade-in delay-1 bg-[#2d4a2d] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0">
              <Car className="w-7 h-7 md:w-8 md:h-8 text-[#8b9d6a]" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-lg md:text-xl font-medium text-white mb-2">Convenient Break Journey Stay</h3>
              <p className="text-white/80 text-sm md:text-base">
                A perfect mid-way stay option for Bangalore–Wayanad travelers. Stay the night, relax, and continue your
                journey the next day.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="scroll-fade-in delay-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl mb-6">
              <Image src="/images/img-9913.jpeg" alt="Bandipur Area" fill className="object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium text-sm md:text-base">Gundlupet Road, Bandipur, Karnataka</span>
              </div>
            </div>
          </div>

          <div className="scroll-fade-in delay-3">
            <h3 className="text-xl md:text-2xl font-medium text-[#2d4a2d] mb-4 md:mb-6">
              Distances from The Escape Bandipur
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {distances.map((item) => (
                <div
                  key={item.place}
                  className="flex items-center justify-between bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-[#5a5a5a] text-xs md:text-sm">{item.place}</span>
                  <span className="text-[#2d4a2d] font-semibold text-xs md:text-sm">{item.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
