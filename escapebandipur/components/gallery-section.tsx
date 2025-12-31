"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useAutoScrollAnimation } from "@/hooks/use-scroll-animation"

const galleryImages = [
  { src: "/images/dji-20251001152835-0036-d.jpg", alt: "Aerial View of Property with Pool", category: "Property" },
  { src: "/images/img-9903.jpeg", alt: "Tiger", category: "Wildlife" },
  { src: "/images/dsc01005.jpg", alt: "Villa Exterior", category: "Property" },
  { src: "/images/img-9905.jpeg", alt: "Elephants", category: "Wildlife" },
  { src: "/images/dji-20251001152801-0034-d.jpg", alt: "Property Front View", category: "Property" },
  { src: "/images/img-9922.jpeg", alt: "Deer", category: "Wildlife" },
  { src: "/images/dsc01044.jpg", alt: "Swimming Pool", category: "Property" },
  { src: "/images/image.jpeg", alt: "Gopalaswamy Betta Temple", category: "Attractions" },
  { src: "/images/dsc00994.jpg", alt: "Living Room Interior", category: "Property" },
  { src: "/images/img-9913.jpeg", alt: "Village View with Mountains", category: "Surroundings" },
  { src: "/images/img-9909.jpeg", alt: "Lone Tree in Field", category: "Surroundings" },
  { src: "/images/img-9911.jpeg", alt: "Farmland Aerial View", category: "Surroundings" },
]

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")

  useAutoScrollAnimation(sectionRef)

  const categories = ["All", "Property", "Wildlife", "Attractions", "Surroundings"]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedImage])

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section id="gallery" ref={sectionRef} className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 scroll-fade-in">
          <span className="text-[#8b9d6a] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">
            Explore
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2d4a2d] mt-2 sm:mt-3 mb-3 sm:mb-4">
            Photo Gallery
          </h2>
          <div className="w-10 sm:w-12 md:w-16 h-0.5 bg-[#8b9d6a] mx-auto mb-4 sm:mb-6 md:mb-8" />

          <div className="flex overflow-x-auto pb-2 sm:flex-wrap sm:justify-center gap-2 sm:gap-3 px-1 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  filter === category
                    ? "bg-[#2d4a2d] text-white"
                    : "bg-[#f8f9f6] text-[#5a5a5a] hover:bg-[#2d4a2d]/10 active:bg-[#2d4a2d]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 scroll-fade-in delay-2">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className={`cursor-pointer group ${index === 0 ? "col-span-2 row-span-2" : ""}`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 group-active:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 group-active:bg-black/20 transition-colors duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox - Full screen on mobile */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
            className="absolute top-4 right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-2 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image */}
          <div className="relative w-full h-full p-4 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-white text-sm">
              {selectedImage + 1} / {filteredImages.length}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
