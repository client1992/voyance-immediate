"use client"

import Image from "next/image"
import { Phone, Calendar, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

const iconMap = [Phone, Calendar, MessageCircle]

const imagePaths = [
  "/images/tarot-cards.jpg",
  "/images/crystal-ball.jpg",
  "/images/jinn-work.jpg",
  "/images/shams-almaarif.jpg",
]

export function ServicesSection() {
  const { t, tArray } = useTranslation()
  const types = tArray("services.types") as { title: string; description: string; features: string[]; cta: string; href?: string; highlight: boolean }[]
  const services = tArray("services.services") as { title: string; description: string }[]
  const faqQuestions = tArray("services.faqQuestions") as string[]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1425] via-[#251e35] to-[#1a1425]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a86c]/50 to-transparent" />
      
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#6b4e8d]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#c9a86c]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#6b4e8d] font-medium mb-2 uppercase tracking-wider text-sm">{t("services.badge")}</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f8f5f0] mb-4">
            {t("services.title")}
          </h2>
          <p className="text-[#b8a8c8] max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {types.map((type, index) => {
            const Icon = iconMap[index] || Phone
            const href = type.href || (index === 0 ? "tel:0033782388164" : index === 2 ? "https://wa.me/33782388164" : "#contact")
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  type.highlight 
                    ? "bg-gradient-to-br from-[#6b4e8d] to-[#4a3563] border-2 border-[#c9a86c]" 
                    : "bg-[#251e35] border border-[#3d2e5a] hover:border-[#c9a86c]/50"
                }`}
              >
                {type.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a86c] text-[#1a1425] text-xs font-bold px-3 py-1 rounded-full">
                    {t("services.recommended")}
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  type.highlight ? "bg-[#c9a86c]/20" : "bg-[#6b4e8d]/20"
                }`}>
                  <Icon className={`w-7 h-7 ${type.highlight ? "text-[#c9a86c]" : "text-[#6b4e8d]"}`} />
                </div>
                
                <h3 className="font-serif text-xl font-bold text-[#f8f5f0] mb-2">{type.title}</h3>
                <p className="text-[#b8a8c8] text-sm mb-4">{type.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-sm text-[#f8f5f0]/80">
                      <CheckCircle className="w-4 h-4 text-[#c9a86c]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className={`w-full font-bold ${
                    type.highlight 
                      ? "bg-[#c9a86c] hover:bg-[#d9b87c] text-[#1a1425]" 
                      : "bg-[#6b4e8d] hover:bg-[#7d5ba6] text-[#f8f5f0]"
                  }`}
                >
                  <a href={href}>{type.cta}</a>
                </Button>
              </div>
            )
          })}
        </div>

        <div className="text-center mb-12">
          <span className="inline-block text-[#6b4e8d] font-medium mb-2 uppercase tracking-wider text-sm">{t("services.specialtiesBadge")}</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f8f5f0] mb-4">
            {t("services.specialtiesTitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-[#251e35] border border-[#3d2e5a] hover:border-[#c9a86c]/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={imagePaths[index] || "/images/tarot-cards.jpg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#251e35] to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[#c9a86c] mb-2">{service.title}</h3>
                <p className="text-[#b8a8c8] text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#3d2e5a] via-[#251e35] to-[#3d2e5a] rounded-2xl p-8 border border-[#c9a86c]/20">
          <h3 className="font-serif text-2xl font-bold text-[#f8f5f0] text-center mb-8">
            {t("services.faqTitle")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {faqQuestions.map((question, qi) => (
              <div 
                key={qi}
                className="bg-[#1a1425]/50 rounded-xl p-4 text-center border border-[#6b4e8d]/30 hover:border-[#c9a86c]/50 transition-colors"
              >
                <p className="text-[#f8f5f0] font-medium italic">&quot;{question}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
