"use client"

import Image from "next/image"
import { Phone, Star, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

export function HeroSection() {
  const { t, tArray } = useTranslation()
  const trustItems = tArray("hero.trustItems") as string[]
  const domains = tArray("hero.domains") as { label: string; sublabel: string }[]

  return (
    <section id="accueil" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/consultation.jpg"
          alt="Consultation de voyance"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1425] via-[#1a1425]/80 to-[#1a1425]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b4e8d]/20 via-transparent to-[#c9a86c]/20" />
      </div>

      <div className="absolute top-40 left-10 w-32 h-32 bg-[#c9a86c]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-[#6b4e8d]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#c9a86c]/10 border border-[#c9a86c]/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-[#c9a86c] fill-[#c9a86c]" />
              <span className="text-[#c9a86c] text-sm font-medium">{t("hero.badge")}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#f8f5f0] mb-6 leading-tight">
              <span className="text-[#c9a86c]">{t("hero.title1")}</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">{t("hero.title2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-[#b8a8c8] mb-4 max-w-xl mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>

            <p className="text-[#f8f5f0]/80 mb-8 max-w-xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#c9a86c] to-[#a8894d] hover:from-[#d9b87c] hover:to-[#c9a86c] text-[#1a1425] font-bold text-lg px-8 py-6 shadow-lg shadow-[#c9a86c]/20"
              >
                <a href="tel:0033782388164">
                  <Phone className="w-5 h-5 mr-2" />
                  {t("hero.cta")}
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#6b4e8d] text-[#f8f5f0] hover:bg-[#6b4e8d] hover:text-[#f8f5f0] font-bold text-lg px-8 py-6"
              >
                <a href="#services">
                  {t("hero.cta2")}
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-[#b8a8c8]">
                <Clock className="w-5 h-5 text-[#c9a86c]" />
                <span className="text-sm">{trustItems[0]}</span>
              </div>
              <div className="flex items-center gap-2 text-[#b8a8c8]">
                <Shield className="w-5 h-5 text-[#c9a86c]" />
                <span className="text-sm">{trustItems[1]}</span>
              </div>
              <div className="flex items-center gap-2 text-[#b8a8c8]">
                <Star className="w-5 h-5 text-[#c9a86c]" />
                <span className="text-sm">{trustItems[2]}</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-[#c9a86c] shadow-2xl shadow-[#c9a86c]/30">
                <Image
                  src="/images/logo.jpg"
                  alt="Cheikh Voyant"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#6b4e8d] shadow-xl">
                <Image
                  src="/images/tarot-cards.jpg"
                  alt="Cartes de tarot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#c9a86c] shadow-xl">
                <Image
                  src="/images/crystal-ball.jpg"
                  alt="Boule de cristal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-12 w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#6b4e8d] shadow-xl">
                <Image
                  src="/images/jinn-work.jpg"
                  alt="Travail avec les Djinns"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {domains.map((item, index) => {
            const icons = [HeartIcon, BriefcaseIcon, UsersIcon, SparklesIcon]
            const Icon = icons[index] || HeartIcon
            return (
              <div 
                key={index}
                className="bg-[#251e35]/80 backdrop-blur-sm border border-[#c9a86c]/20 rounded-xl p-4 text-center hover:border-[#c9a86c]/50 transition-colors group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#6b4e8d] to-[#4a3563] flex items-center justify-center group-hover:from-[#c9a86c] group-hover:to-[#a8894d] transition-all">
                  <Icon className="w-6 h-6 text-[#f8f5f0]" />
                </div>
                <h3 className="font-serif text-lg text-[#c9a86c] font-semibold">{item.label}</h3>
                <p className="text-sm text-[#b8a8c8]">{item.sublabel}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  )
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}
