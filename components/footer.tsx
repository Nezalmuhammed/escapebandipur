import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2d4a2d] text-white py-8 sm:py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
          {/* Logo and description */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/images/the-20escape-20bandipur.png"
                alt="The Escape Bandipur"
                width={80}
                height={80}
                className="mb-4 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[100px] md:h-[100px]"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-4 text-sm">
              A charming retreat designed for slow living, tucked away between lush forest and peaceful green farmland.
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-white/70 text-sm">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Gundlupet Road, Bandipur, Karnataka</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base font-medium mb-3 md:mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About Us", "Amenities", "Gallery", "Wildlife", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-base font-medium mb-3 md:mb-4">Contact Us</h4>
            <div className="space-y-2">
              <a
                href="tel:+917736368336"
                className="flex items-center justify-center sm:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 77363 68336
              </a>
              <a
                href="tel:+917736368436"
                className="flex items-center justify-center sm:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 77363 68436
              </a>
              <a
                href="https://instagram.com/theescape.bandipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center sm:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @theescape.bandipur
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} The Escape Bandipur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
