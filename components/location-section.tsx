"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { MapPin, Car } from "lucide-react"

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
    <section id="location" ref={sectionRef} className="py-24 md:py-32 bg-[#f8f9f6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-[#8b9d6a] text-sm tracking-[0.3em] uppercase font-medium">Find Us</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4">Location & Distances</h2>
          <div className="w-16 h-0.5 bg-[#8b9d6a] mx-auto mb-6" />
          <p className="text-[#5a5a5a] text-lg max-w-2xl mx-auto">Gundlupet Road, Bandipur, Karnataka</p>
        </div>

        {/* Convenient Break Journey Stay Banner */}
        <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 bg-[#2d4a2d] rounded-2xl p-8 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0">
              <Car className="w-8 h-8 text-[#8b9d6a]" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-medium text-white mb-2">Convenient Break Journey Stay</h3>
              <p className="text-white/80">
                A perfect mid-way stay option for Bangalore–Wayanad travelers. Stay the night, relax, and continue your
                journey the next day.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-700">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl mb-6">
              <Image src="/images/img-9913.jpeg" alt="Bandipur Area" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Gundlupet Road, Bandipur, Karnataka</span>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-x-[20px] transition-all duration-700 delay-200">
            <h3 className="text-2xl font-medium text-[#2d4a2d] mb-6">Distances from The Escape Bandipur</h3>
            <div className="grid grid-cols-2 gap-3">
              {distances.map((item, index) => (
                <div
                  key={item.place}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-[#5a5a5a] text-sm">{item.place}</span>
                  <span className="text-[#2d4a2d] font-semibold text-sm">{item.distance}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
