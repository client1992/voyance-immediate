import { Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jfif-HL1yolo4AJzhMHvKyYuG6fq4Hg4emZ.jpeg"
                  alt="Voyance Immédiate Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="font-serif text-xl font-bold text-foreground">
                Voyance <span className="text-primary">Immédiate</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cheikh - Médium Marocain de confiance. 
              Plus de 20 ans d&apos;expérience dans la voyance orientale.
            </p>
          </div>

          {/* Services */}
          <div className="text-center">
            <h4 className="font-serif font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Voyance Mektoub</li>
              <li>Interprétation des Rêves</li>
              <li>Astrologie Arabe</li>
              <li>Lecture du Marc de Café</li>
              <li>Amour & Relations</li>
              <li>Travail & Carrière</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-serif font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="tel:0782388164" 
                className="flex items-center justify-center md:justify-end gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-semibold">07 82 38 81 64</span>
              </a>
              <div className="flex items-center justify-center md:justify-end gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Voyance Immédiate - Cheikh Médium Marocain. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span>Voyant Paris</span>
              <span className="text-primary">|</span>
              <span>Cabinet de Voyance</span>
              <span className="text-primary">|</span>
              <span>Médium Maghrébin</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
