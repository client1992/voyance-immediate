import Image from "next/image"
import { Phone, Clock, MapPin, MessageCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a855]/50 to-transparent" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8b1a1a]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d4a855]/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#8b1a1a] font-medium mb-2 uppercase tracking-wider text-sm">Contact</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f0e6] mb-4">
            <span className="text-[#d4a855]">Contactez</span>-moi
          </h2>
          <p className="text-[#a89f8f] max-w-2xl mx-auto">
            Consultation immédiate par téléphone ou sur rendez-vous - Je vous réponds personnellement
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main contact card */}
          <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] rounded-3xl p-8 md:p-12 border-2 border-[#d4a855]/30 shadow-2xl relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#d4a855]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#8b1a1a]/20 to-transparent" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#8b1a1a] to-[#5a1010] rounded-full mb-6 border-2 border-[#d4a855]/30">
                  <Phone className="w-10 h-10 text-[#d4a855]" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#f5f0e6] mb-2">
                  Appelez-moi maintenant
                </h3>
                <p className="text-[#a89f8f]">
                  Je vous réponds personnellement
                </p>
              </div>

              {/* Phone number - prominent display */}
              <div className="text-center mb-10">
                <a 
                  href="tel:0782388164"
                  className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold text-[#d4a855] hover:text-[#e5b966] transition-colors font-serif tracking-wider"
                >
                  07 82 38 81 64
                </a>
              </div>

              {/* Call buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#d4a855] to-[#b8922e] hover:from-[#e5b966] hover:to-[#d4a855] text-[#0a0a0a] font-bold text-lg px-10 py-7"
                  asChild
                >
                  <a href="tel:0782388164" className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    Appeler Maintenant
                  </a>
                </Button>
                <Button 
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg px-10 py-7"
                  asChild
                >
                  <a 
                    href="https://wa.me/33782388164" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#2d2418]">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#8b1a1a]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-[#d4a855]" />
                  </div>
                  <h4 className="font-semibold text-[#f5f0e6] mb-1">Disponibilité</h4>
                  <p className="text-sm text-[#a89f8f]">7j/7 - 9h à 21h</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#8b1a1a]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-[#d4a855]" />
                  </div>
                  <h4 className="font-semibold text-[#f5f0e6] mb-1">Discrétion</h4>
                  <p className="text-sm text-[#a89f8f]">100% Confidentiel</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#8b1a1a]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-[#d4a855]" />
                  </div>
                  <h4 className="font-semibold text-[#f5f0e6] mb-1">Localisation</h4>
                  <p className="text-sm text-[#a89f8f]">Paris & à distance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images row */}
          <div className="mt-12 grid grid-cols-4 gap-4">
            <div className="relative h-24 rounded-xl overflow-hidden border border-[#2d2418]">
              <Image src="/images/tarot-cards.jpg" alt="Tarot" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-xl overflow-hidden border border-[#2d2418]">
              <Image src="/images/crystal-ball.jpg" alt="Boule de cristal" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-xl overflow-hidden border border-[#2d2418]">
              <Image src="/images/coffee-reading.jpg" alt="Marc de café" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-xl overflow-hidden border border-[#2d2418]">
              <Image src="/images/astrology.jpg" alt="Astrologie" fill className="object-cover" />
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-[#141414] rounded-xl p-6 border border-[#d4a855]/20">
              <p className="text-[#f5f0e6] mb-2 font-serif text-lg">
                Consultation <span className="text-[#d4a855] font-semibold">discrète</span> et <span className="text-[#d4a855] font-semibold">confidentielle</span>
              </p>
              <p className="text-sm text-[#a89f8f]">
                Réponses sincères, sans jugement - Plus de 20 ans d&apos;expérience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
