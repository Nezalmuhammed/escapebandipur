"use client"

import { useRef } from "react"
import Image from "next/image"
import { Leaf, Milk, TreePine, Apple, Sun } from "lucide-react"
import { useAutoScrollAnimation } from "@/hooks/use-scroll-animation"

const farmingActivities = [
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
    icon: Sun,
    title: "Sunrise Over the Fields",
    description: "Watch dawn light up the farmland as the forest wakes.",
  },
]

export function FarmingSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useAutoScrollAnimation(sectionRef)

  return (
    <section id="farming" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-[#f8f9f6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <div className="scroll-fade-in order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg md:shadow-xl">
                <Image
                  src="/images/img-9911.jpeg"
                  alt="Farming in Bandipur"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg md:shadow-xl mt-6 md:mt-8">
                <Image
                  src="/images/img-9909.jpeg"
                  alt="Nature in Bandipur"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="scroll-fade-in delay-2 order-1 lg:order-2">
            <span className="text-[#8b9d6a] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">Experience</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4 md:mb-6 leading-tight">
              Farming & Village Visit
            </h2>
            <div className="w-12 md:w-16 h-0.5 bg-[#8b9d6a] mb-6 md:mb-8" />

            <div className="space-y-4 md:space-y-6">
              {farmingActivities.map((activity) => (
                <div key={activity.title} className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2d4a2d]/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#2d4a2d] transition-colors duration-200">
                    <activity.icon className="w-4 h-4 md:w-5 md:h-5 text-[#2d4a2d] group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-[#2d4a2d] mb-1">{activity.title}</h3>
                    <p className="text-[#5a5a5a] text-sm md:text-base">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
