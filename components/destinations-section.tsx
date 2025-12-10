"use client"

import { useRef } from "react"
import Image from "next/image"
import { MapPin, Car } from "lucide-react"
import { useAutoScrollAnimation } from "@/hooks/use-scroll-animation"

const destinations = [
  {
    name: "Bandipur Tiger Reserve",
    description: "A serene escape filled with greenery, wildlife, and scenic forest routes—perfect for nature lovers.",
    distance: "26 KM",
    image: "/images/img-9903.jpeg",
  },
  {
    name: "Mudumalai & Masinagudi",
    description: "Enjoy serene forests, fresh air, and thrilling safari experiences in beautiful Masinagudi.",
    distance: "36 KM",
    image: "/images/img-9905.jpeg",
  },
  {
    name: "Wayanad",
    description: "Lush green hills, misty valleys, and serene landscapes await in this beautiful Kerala destination.",
    distance: "25 KM",
    image: "/images/img-9909.jpeg",
  },
]

const allDistances = [
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

export function DestinationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useAutoScrollAnimation(sectionRef)

  return (
    <section id="destinations" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-[#f8f9f6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 scroll-fade-in">
          <span className="text-[#8b9d6a] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">Explore</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4">Nearby Destinations</h2>
          <div className="w-12 md:w-16 h-0.5 bg-[#8b9d6a] mx-auto mb-4 md:mb-6" />
          <p className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-[#5a5a5a] text-base md:text-lg px-4">
            A perfect mid-way stay option for Bangalore–Wayanad travelers. Stay the night, relax, and continue your
            journey the next day.
          </p>
        </div>

        {/* Featured Destinations */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-10 md:mb-16 scroll-fade-in delay-1">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-[#2d4a2d] text-sm font-semibold">{dest.distance}</span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-medium text-[#2d4a2d] mb-2">{dest.name}</h3>
                <p className="text-[#5a5a5a] text-sm">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Convenient Break Journey Stay */}
        <div className="scroll-fade-in delay-2 bg-[#2d4a2d] rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0">
              <Car className="w-8 h-8 md:w-10 md:h-10 text-[#8b9d6a]" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-2">Convenient Break Journey Stay</h3>
              <p className="text-white/80 text-base md:text-lg">
                A perfect mid-way stay option for Bangalore–Wayanad travelers. Stay the night, relax, and continue your
                journey the next day.
              </p>
            </div>
          </div>
        </div>

        {/* All Distances Grid */}
        <div className="scroll-fade-in delay-3">
          <h3 className="text-xl md:text-2xl font-medium text-[#2d4a2d] mb-4 md:mb-6 text-center">
            Distances from The Escape Bandipur
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {allDistances.map((item) => (
              <div
                key={item.place}
                className="flex flex-col items-center bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#8b9d6a] mb-2" />
                <span className="text-[#5a5a5a] text-xs md:text-sm mb-1">{item.place}</span>
                <span className="text-[#2d4a2d] font-bold text-sm md:text-base">{item.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
