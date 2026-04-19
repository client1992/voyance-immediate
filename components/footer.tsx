import { Phone, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2d2418]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d4a855]">
                <Image
                  src="/images/logo.jpg"
                  alt="Voyance Immédiate Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-xl font-bold text-[#f5f0e6]">
                Voyance <span className="text-[#d4a855]">Immédiate</span>
              </span>
            </div>
            <p className="text-sm text-[#a89f8f] leading-relaxed">
              Cheikh - Médium Marocain de confiance. 
              Plus de 20 ans d&apos;expérience dans la voyance orientale.
              Consultations à Paris et à distance.
            </p>
          </div>

          {/* Services */}
          <div className="text-center">
            <h4 className="font-serif font-semibold text-[#d4a855] mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-[#a89f8f]">
              <li className="hover:text-[#d4a855] transition-colors cursor-pointer">Voyance Mektoub</li>
              <li className="hover:text-[#d4a855] transition-colors cursor-pointer">Interprétation des Rêves</li>
              <li className="hover:text-[#d4a855] transition-colors cursor-pointer">Astrologie Arabe</li>
              <li className="hover:text-[#d4a855] transition-colors cursor-pointer">Lecture du Marc de Café</li>
              <li className="hover:text-[#d4a855] transition-colors cursor-pointer">Amour & Relations</li>
              <li className="hover:text-[#d4a855] transition-colors cursor-pointer">Travail & Carrière</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-serif font-semibold text-[#d4a855] mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:0782388164" 
                className="flex items-center justify-center md:justify-end gap-2 text-[#f5f0e6] hover:text-[#d4a855] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4a855]" />
                <span className="font-semibold">07 82 38 81 64</span>
              </a>
              <a 
                href="https://wa.me/33782388164" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-[#f5f0e6] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center justify-center md:justify-end gap-2 text-[#a89f8f]">
                <MapPin className="w-4 h-4 text-[#d4a855]" />
                <span className="text-sm">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Keywords for SEO */}
        <div className="mt-10 pt-6 border-t border-[#2d2418]">
          <div className="flex flex-wrap justify-center gap-3 text-xs text-[#a89f8f]/60">
            <span>Voyant Paris</span>
            <span className="text-[#d4a855]/40">|</span>
            <span>Cabinet de Voyance</span>
            <span className="text-[#d4a855]/40">|</span>
            <span>Médium Maghrébin</span>
            <span className="text-[#d4a855]/40">|</span>
            <span>Voyance Marocaine</span>
            <span className="text-[#d4a855]/40">|</span>
            <span>Voyance Mektoub</span>
            <span className="text-[#d4a855]/40">|</span>
            <span>Interprétation Rêves Islam</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-[#2d2418]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#a89f8f]">
              &copy; {new Date().getFullYear()} Voyance Immédiate - Cheikh Médium Marocain. Tous droits réservés.
            </p>
            <p className="text-xs text-[#a89f8f]">
              Disponible 7j/7 de 9h à 21h
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
