"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Wifi, Car, Waves, Trees, UtensilsCrossed, Mountain } from "lucide-react"

const amenities = [
  { icon: Waves, title: "Swimming Pool", description: "Refreshing pool with mountain views" },
  { icon: UtensilsCrossed, title: "Homemade Cuisine", description: "Fresh organic meals daily" },
  { icon: Trees, title: "Landscaped Gardens", description: "Beautifully manicured grounds" },
  { icon: Mountain, title: "Mountain Views", description: "Breathtaking panoramic scenery" },
  { icon: Car, title: "Free Parking", description: "Secure on-site parking" },
  { icon: Wifi, title: "Free WiFi", description: "Stay connected when needed" },
]

export function AmenitiesSection() {
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
    <section id="amenities" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-[#f8f9f6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-[#8b9d6a] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">Experience</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4">Our Amenities</h2>
          <div className="w-12 md:w-16 h-0.5 bg-[#8b9d6a] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-12 items-center mb-10 md:mb-16">
          <div className="animate-on-scroll opacity-0 translate-x-[-20px] transition-all duration-700">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg md:shadow-xl">
              <Image
                src="/images/dsc01044.jpg"
                alt="Swimming Pool"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 translate-x-[20px] transition-all duration-700 delay-200">
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg md:shadow-xl">
              <Image
                src="/images/dsc00994.jpg"
                alt="Living Room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 bg-white p-5 md:p-6 lg:p-8 rounded-lg shadow-sm hover:shadow-lg group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[#2d4a2d] transition-colors duration-300">
                <amenity.icon className="w-5 h-5 md:w-6 md:h-6 text-[#2d4a2d] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-[#2d4a2d] mb-2">{amenity.title}</h3>
              <p className="text-[#5a5a5a] text-sm md:text-base">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
