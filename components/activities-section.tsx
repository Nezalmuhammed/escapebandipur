"use client"

import { useRef } from "react"
import { Leaf, TreePine, Bird, Camera, Sun, Compass, Milk, Apple } from "lucide-react"
import { useAutoScrollAnimation } from "@/hooks/use-scroll-animation"

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

  useAutoScrollAnimation(sectionRef)

  return (
    <section id="activities" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 scroll-fade-in">
          <span className="text-[#8b9d6a] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">Discover</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4">
            Activities & Experiences
          </h2>
          <div className="w-12 md:w-16 h-0.5 bg-[#8b9d6a] mx-auto mb-4 md:mb-6" />
          <p className="max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-[#5a5a5a] text-base md:text-lg px-4">
            From wildlife safaris to peaceful farm walks, discover experiences that reconnect you with nature
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 scroll-fade-in delay-1">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-[#f8f9f6] border border-[#e5e7e2] p-4 md:p-6 rounded-lg hover:shadow-lg hover:border-[#8b9d6a]/30 transition-all duration-200 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:bg-[#2d4a2d] transition-colors duration-200">
                <activity.icon className="w-4 h-4 md:w-5 md:h-5 text-[#2d4a2d] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-base md:text-lg font-medium text-[#2d4a2d] mb-2">{activity.title}</h3>
              <p className="text-[#5a5a5a] text-xs md:text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
