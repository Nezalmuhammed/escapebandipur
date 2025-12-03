import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2d4a2d] text-white py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <Image
              src="/images/the-20escape-20bandipur.png"
              alt="The Escape Bandipur"
              width={80}
              height={80}
              className="mb-4 w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
            />
            <p className="text-white/70 leading-relaxed mb-4 text-sm md:text-base">
              A charming retreat designed for slow living, tucked away between lush forest and peaceful green farmland.
            </p>
            <div className="flex items-start gap-2 text-white/70 text-sm md:text-base">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Gundlupet Road, Bandipur, Karnataka</span>
            </div>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-medium mb-3 md:mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#about" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                About Us
              </Link>
              <Link href="#amenities" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                Amenities
              </Link>
              <Link href="#gallery" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                Gallery
              </Link>
              <Link href="#wildlife" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                Wildlife
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-white transition-colors text-sm md:text-base">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-medium mb-3 md:mb-4">Contact Us</h4>
            <div className="space-y-2 md:space-y-3">
              <a
                href="tel:+917736368336"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm md:text-base"
              >
                <Phone className="w-4 h-4" />
                +91 77363 68336
              </a>
              <a
                href="tel:+917736368436"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm md:text-base"
              >
                <Phone className="w-4 h-4" />
                +91 77363 68436
              </a>
              <a
                href="https://instagram.com/theescape.bandipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm md:text-base"
              >
                <Instagram className="w-4 h-4" />
                @theescape.bandipur
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
          <p className="text-white/50 text-xs md:text-sm">
            © {new Date().getFullYear()} The Escape Bandipur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
