"use client"

import Image from "next/image"
import { Phone, Clock, MapPin, MessageCircle, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

export function ContactSection() {
  const { t, tArray } = useTranslation()
  const infoItems = tArray("contact.infoItems") as { icon: string; title: string; description: string }[]
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1425] via-[#251e35] to-[#1a1425]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a86c]/50 to-transparent" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6b4e8d]/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#c9a86c]/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#6b4e8d] font-medium mb-2 uppercase tracking-wider text-sm">{t("contact.badge")}</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f8f5f0] mb-4" dangerouslySetInnerHTML={{ __html: t("contact.title") }} />
          <p className="text-[#b8a8c8] max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main contact card */}
          <div className="bg-gradient-to-br from-[#251e35] to-[#1a1425] rounded-3xl p-8 md:p-12 border-2 border-[#c9a86c]/30 shadow-2xl relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#c9a86c]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#6b4e8d]/20 to-transparent" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#6b4e8d] to-[#4a3563] rounded-full mb-6 border-2 border-[#c9a86c]/30">
                  <Phone className="w-10 h-10 text-[#c9a86c]" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#f8f5f0] mb-2">
                  {t("contact.callTitle")}
                </h3>
                <p className="text-[#b8a8c8]">
                  {t("contact.callSubtitle")}
                </p>
              </div>

              {/* Phone number - prominent display */}
              <div className="text-center mb-10">
                <a 
                  href="tel:0033782388164"
                  className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold text-[#c9a86c] hover:text-[#d9b87c] transition-colors font-serif tracking-wider"
                >
                  07 82 38 81 64
                </a>
              </div>

              {/* Call buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#c9a86c] to-[#a8894d] hover:from-[#d9b87c] hover:to-[#c9a86c] text-[#1a1425] font-bold text-lg px-10 py-7"
                  asChild
                >
                  <a href="tel:0033782388164" className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    {t("contact.callNow")}
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#3d2e5a]">
                {infoItems.map((item, i) => {
                  const Icon = item.icon === "Clock" ? Clock : item.icon === "Shield" ? Shield : MapPin
                  return (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-[#6b4e8d]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-[#c9a86c]" />
                      </div>
                      <h4 className="font-semibold text-[#f8f5f0] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#b8a8c8]">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Images row */}
          <div className="mt-12 grid grid-cols-4 gap-4">
            <div className="relative h-24 rounded-xl overflow-hidden border border-[#3d2e5a]">
              <Image src="/images/tarot-cards.jpg" alt="Tarot" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-xl overflow-hidden border border-[#3d2e5a]">
              <Image src="/images/crystal-ball.jpg" alt="Boule de cristal" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-xl overflow-hidden border border-[#3d2e5a]">
              <Image src="/images/jinn-work.jpg" alt="Travail avec les Djinns" fill className="object-cover" />
            </div>
            <div className="relative h-24 rounded-xl overflow-hidden border border-[#3d2e5a]">
              <Image src="/images/shams-almaarif.jpg" alt="Shams Al-Maarif" fill className="object-cover" />
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-center">
            <div className="inline-block bg-[#251e35] rounded-xl p-6 border border-[#c9a86c]/20">
              <p className="text-[#f8f5f0] mb-2 font-serif text-lg" dangerouslySetInnerHTML={{ __html: t("contact.disclaimer") }} />
              <p className="text-sm text-[#b8a8c8]">
                {t("contact.disclaimerSub")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
