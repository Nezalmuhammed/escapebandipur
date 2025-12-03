"use client"

import { useEffect, useRef } from "react"
import { Leaf, TreePine, Bird, Camera, Sun, Compass, Milk, Apple } from "lucide-react"

const activities = [
  {
    icon: Leaf,
    title: "Hands-on Farming",
    description: "Experience real farm life — plant, water, or harvest seasonal crops.",
  },
  {
    icon: Milk,
    title: "Cow Milking & Animal Care",
    description: "Learn how local farmers live in rhythm with their animals.",
  },
  {
    icon: TreePine,
    title: "Farm Walks & Nature Trails",
    description: "Guided walks through green landscapes rich with native flora.",
  },
  {
    icon: Apple,
    title: "Organic Picking",
    description: "Collect vegetables or herbs from the garden for your own meal.",
  },
  {
    icon: Compass,
    title: "Bandipur Jeep Safari",
    description: "Spot elephants, deer, peacocks, wild boars, and maybe a tiger.",
  },
  {
    icon: Bird,
    title: "Birdwatching Expeditions",
    description: "Discover exotic species in their natural habitat.",
  },
  {
    icon: Camera,
    title: "Wildlife Photography",
    description: "Capture the raw soul of the jungle with expert guidance.",
  },
  {
    icon: Sun,
    title: "Sunrise Over the Fields",
    description: "Watch dawn light up the farmland as the forest wakes.",
  },
]

export function ActivitiesSection() {
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
    <section id="activities" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-[#8b9d6a] text-sm tracking-[0.3em] uppercase font-medium">Discover</span>
          <h2 className="text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4">Activities & Experiences</h2>
          <div className="w-16 h-0.5 bg-[#8b9d6a] mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-[#5a5a5a] text-lg">
            From wildlife safaris to peaceful farm walks, discover experiences that reconnect you with nature
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 bg-[#f8f9f6] border border-[#e5e7e2] p-6 rounded-lg hover:shadow-lg hover:border-[#8b9d6a]/30 group"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2d4a2d] transition-colors duration-300">
                <activity.icon className="w-5 h-5 text-[#2d4a2d] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-medium text-[#2d4a2d] mb-2">{activity.title}</h3>
              <p className="text-[#5a5a5a] text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
