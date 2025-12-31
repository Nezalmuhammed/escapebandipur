import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AmenitiesSection } from "@/components/amenities-section"
import { KidsPlaySection } from "@/components/kids-play-section"
import { FarmingSection } from "@/components/farming-section"
import { WildlifeSection } from "@/components/wildlife-section"
import { TempleSection } from "@/components/temple-section"
import { GallerySection } from "@/components/gallery-section"
import { ActivitiesSection } from "@/components/activities-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <KidsPlaySection />
      <FarmingSection />
      <WildlifeSection />
      <TempleSection />
      <GallerySection />
      <ActivitiesSection />
      <LocationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
