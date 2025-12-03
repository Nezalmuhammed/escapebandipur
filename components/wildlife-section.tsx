"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Compass, Camera, Bird, TreePine, Sun } from "lucide-react"

const safariExperiences = [
  {
    icon: Compass,
    title: "Bandipur Jeep Safari",
    description: "Spot elephants, deer, peacocks, wild boars, and maybe a tiger.",
  },
  {
    icon: Sun,
    title: "Evening Forest Drive",
    description: "Experience the forest's changing moods as day fades to dusk.",
  },
  {
    icon: Bird,
    title: "Birdwatching Expeditions",
    description: "Discover exotic species in their natural habitat.",
  },
  {
    icon: TreePine,
    title: "Nature Talks",
    description: "Learn about Bandipur's biodiversity from local guides.",
  },
  {
    icon: Camera,
    title: "Wildlife Photography",
    description: "Capture the raw soul of the jungle.",
  },
]

const wildlifeImages = [
  {
    src: "/images/img-9903.jpeg",
    alt: "Bengal Tiger in Bandipur",
    label: "Bengal Tiger",
  },
  {
    src: "/images/img-9905.jpeg",
    alt: "Asian Elephants",
    label: "Asian Elephants",
  },
  {
    src: "/images/img-9922.jpeg",
    alt: "Spotted Deer",
    label: "Spotted Deer",
  },
]

export function WildlifeSection() {
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
    <section id="wildlife" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-[#2d4a2d] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <Image src="/images/img-9903.jpeg" alt="Background" fill className="object-cover" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-[#8b9d6a] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
            Bandipur Tiger Reserve
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mt-3 mb-4">Wildlife & Safari</h2>
          <div className="w-12 md:w-16 h-0.5 bg-[#8b9d6a] mx-auto mb-4 md:mb-6" />
          <p className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-white/80 text-base md:text-lg px-4">
            Just 26 km away from Bandipur Tiger Reserve, The Escape opens the door to unforgettable wildlife moments
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-16">
          {wildlifeImages.map((image, index) => (
            <div
              key={image.label}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 relative aspect-[4/5] rounded-lg overflow-hidden group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                <span className="text-white text-lg md:text-xl font-medium">{image.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {safariExperiences.map((experience, index) => (
            <div
              key={experience.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 bg-white/10 backdrop-blur-sm border border-white/20 p-5 md:p-6 lg:p-8 rounded-lg hover:bg-white/20 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-white/10 rounded-full flex items-center justify-center mb-4 md:mb-5 group-hover:bg-[#8b9d6a] transition-colors duration-300">
                <experience.icon className="w-5 h-5 md:w-6 md:h-6 text-[#8b9d6a] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg md:text-xl font-medium text-white mb-2">{experience.title}</h3>
              <p className="text-white/70 text-sm md:text-base">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
