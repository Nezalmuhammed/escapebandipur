"use client"

import { useRef } from "react"
import Image from "next/image"
import { Wifi, Baby, Waves, Trees, UtensilsCrossed, Mountain } from "lucide-react"
import { useAutoScrollAnimation } from "@/hooks/use-scroll-animation"

const amenities = [
  { icon: Waves, title: "Swimming Pool", description: "Refreshing pool with mountain views" },
  { icon: UtensilsCrossed, title: "Homemade Cuisine", description: "Fresh organic meals daily" },
  { icon: Trees, title: "Landscaped Gardens", description: "Beautifully manicured grounds" },
  { icon: Mountain, title: "Mountain Views", description: "Breathtaking panoramic scenery" },
  { icon: Baby, title: "Kids Play Area", description: "Fun outdoor play zone for children" },
  { icon: Wifi, title: "Free WiFi", description: "Stay connected when needed" },
]

export function AmenitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useAutoScrollAnimation(sectionRef)

  return (
    <section id="amenities" ref={sectionRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-[#f8f9f6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-16 scroll-fade-in">
          <span className="text-[#8b9d6a] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">
            Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2d4a2d] mt-2 sm:mt-3 mb-3 sm:mb-4">
            Our Amenities
          </h2>
          <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-[#8b9d6a] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-12 items-center mb-8 sm:mb-10 md:mb-16 scroll-fade-in delay-1">
          <div className="aspect-video relative rounded-xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl">
            <Image src="/images/dsc01044.jpg" alt="Swimming Pool" fill className="object-cover" loading="lazy" />
          </div>

          <div className="aspect-video relative rounded-xl overflow-hidden shadow-md sm:shadow-lg md:shadow-xl">
            <Image src="/images/dsc00994.jpg" alt="Living Room" fill className="object-cover" loading="lazy" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 scroll-fade-in delay-2">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="bg-white p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md active:shadow-md transition-shadow duration-200 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:bg-[#2d4a2d] transition-colors duration-200">
                <amenity.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2d4a2d] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#2d4a2d] mb-1 sm:mb-2">
                {amenity.title}
              </h3>
              <p className="text-[#5a5a5a] text-xs sm:text-sm md:text-base line-clamp-2">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
