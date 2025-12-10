"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/dji-20251001152835-0036-d.jpg",
    alt: "Aerial View of Property with Pool",
    category: "Property",
  },
  {
    src: "/images/img-9903.jpeg",
    alt: "Bengal Tiger at Bandipur",
    category: "Wildlife",
  },
  {
    src: "/images/dsc01005.jpg",
    alt: "Villa Exterior",
    category: "Property",
  },
  {
    src: "/images/img-9905.jpeg",
    alt: "Baby Elephants Playing",
    category: "Wildlife",
  },
  {
    src: "/images/dji-20251001152801-0034-d.jpg",
    alt: "Property Front View",
    category: "Property",
  },
  {
    src: "/images/img-9922.jpeg",
    alt: "Spotted Deer in Forest",
    category: "Wildlife",
  },
  {
    src: "/images/dsc01044.jpg",
    alt: "Swimming Pool",
    category: "Property",
  },
  {
    src: "/images/image.jpeg",
    alt: "Gopalaswamy Betta Temple",
    category: "Attractions",
  },
  {
    src: "/images/dsc00994.jpg",
    alt: "Living Room Interior",
    category: "Property",
  },
  {
    src: "/images/img-9913.jpeg",
    alt: "Village View with Mountains",
    category: "Surroundings",
  },
  {
    src: "/images/img-9909.jpeg",
    alt: "Lone Tree in Field",
    category: "Surroundings",
  },
  {
    src: "/images/img-9911.jpeg",
    alt: "Farmland Aerial View",
    category: "Surroundings",
  },
]

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", "Property", "Wildlife", "Attractions", "Surroundings"]
  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

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

  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
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
    <section id="gallery" ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
          <span className="text-[#8b9d6a] text-xs md:text-sm tracking-[0.3em] uppercase font-medium">Explore</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2d4a2d] mt-3 mb-4">Photo Gallery</h2>
          <div className="w-12 md:w-16 h-0.5 bg-[#8b9d6a] mx-auto mb-6 md:mb-8" />

          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  filter === category ? "bg-[#2d4a2d] text-white" : "bg-[#f8f9f6] text-[#5a5a5a] hover:bg-[#2d4a2d]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`animate-on-scroll opacity-0 translate-y-8 transition-all duration-500 cursor-pointer group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-[#8b9d6a] transition-colors z-10 p-2"
            aria-label="Close gallery"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-2 md:left-6 text-white hover:text-[#8b9d6a] transition-colors p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 md:right-6 text-white hover:text-[#8b9d6a] transition-colors p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] mx-4">
            <Image
              src={filteredImages[selectedImage].src || "/placeholder.svg"}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 md:p-4 text-center">
              <span className="text-white font-medium text-sm md:text-base">{filteredImages[selectedImage].alt}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
