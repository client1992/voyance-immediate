"use client"

import { Phone, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "@/lib/use-translation"

export function Footer() {
  const { t, tArray } = useTranslation()
  const servicesList = tArray("footer.servicesList") as string[]
  const seoKeywords = tArray("footer.seoKeywords") as string[]
  return (
    <footer className="bg-[#1a1425] border-t border-[#3d2e5a]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c9a86c]">
                <Image
                  src="/images/logo.jpg"
                  alt="Voyance Immediate Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-xl font-bold text-[#f8f5f0]">
                Voyance <span className="text-[#c9a86c]">Immediate</span>
              </span>
            </div>
            <p className="text-sm text-[#b8a8c8] leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-serif font-semibold text-[#c9a86c] mb-4">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-2 text-sm text-[#b8a8c8]">
              {servicesList.map((service, i) => (
                <li key={i} className="hover:text-[#c9a86c] transition-colors cursor-pointer">{service}</li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-serif font-semibold text-[#c9a86c] mb-4">{t("footer.contactTitle")}</h4>
            <div className="space-y-3">
              <a 
                href="tel:0033782388164" 
                className="flex items-center justify-center md:justify-end gap-2 text-[#f8f5f0] hover:text-[#c9a86c] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c9a86c]" />
                <span className="font-semibold">07 82 38 81 64</span>
              </a>
              <a 
                href="https://wa.me/33782388164" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end gap-2 text-[#f8f5f0] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center justify-center md:justify-end gap-2 text-[#b8a8c8]">
                <MapPin className="w-4 h-4 text-[#c9a86c]" />
                <span className="text-sm">{t("footer.location")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#3d2e5a]">
          <div className="flex flex-wrap justify-center gap-3 text-xs text-[#b8a8c8]/60">
            {seoKeywords.map((kw, i) => (
              <span key={i}>{kw}{i < seoKeywords.length - 1 ? <span className="text-[#c9a86c]/40 mx-3">|</span> : null}</span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-[#3d2e5a]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#b8a8c8]">
              &copy; {new Date().getFullYear()} {t("footer.copyright")}
            </p>
            <p className="text-xs text-[#b8a8c8]">
              {t("footer.availability")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
