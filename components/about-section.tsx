"use client"

import Image from "next/image"
import { MapPin, Award, Heart, Eye, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

export function AboutSection() {
  const { t, tArray } = useTranslation()
  const features = tArray("about.features") as { title: string; label: string }[]
  const featureIcons = [Award, MapPin, Heart, Eye]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#251e35] via-[#1a1425] to-[#251e35]" />
      
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a86c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#6b4e8d]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#6b4e8d] font-medium mb-2 uppercase tracking-wider text-sm">{t("about.badge")}</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f8f5f0] mb-4">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#c9a86c]/30">
              <Image
                src="/images/consultation.jpg"
                alt="Cheikh - Medium Marocain"
                width={600}
                height={500}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1425]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#c9a86c] font-serif text-xl font-bold">{t("about.name")}</p>
                <p className="text-[#f8f5f0]/80 text-sm">{t("about.subtitle")}</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-[#6b4e8d] rounded-xl p-4 border border-[#c9a86c]/30 shadow-xl hidden md:block">
              <p className="text-[#c9a86c] font-serif text-3xl font-bold">{t("about.expYears")}</p>
              <p className="text-[#f8f5f0] text-sm">{t("about.expLabel")}</p>
            </div>
          </div>

          <div>
            <p className="text-lg text-[#f8f5f0] leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t("about.paragraph1") }} />
            <p className="text-[#b8a8c8] leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: t("about.paragraph2") }} />

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const Icon = featureIcons[index] || Award
                return (
                  <div key={index} className="bg-[#251e35] rounded-xl p-4 border border-[#3d2e5a] hover:border-[#c9a86c]/50 transition-colors">
                    <div className="w-10 h-10 bg-[#6b4e8d]/20 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-[#c9a86c]" />
                    </div>
                    <h3 className="font-serif text-[#f8f5f0] font-semibold mb-1">{feature.title}</h3>
                    <p className="text-xs text-[#b8a8c8]">{feature.label}</p>
                  </div>
                )
              })}
            </div>

            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#c9a86c] to-[#a8894d] hover:from-[#d9b87c] hover:to-[#c9a86c] text-[#1a1425] font-bold"
            >
              <a href="tel:0033782388164">
                <Phone className="w-5 h-5 mr-2" />
                {t("about.cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
