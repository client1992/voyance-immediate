import Image from "next/image"
import { Phone, Star, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/consultation.jpg"
          alt="Consultation de voyance"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b1a1a]/20 via-transparent to-[#d4a855]/20" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-32 h-32 bg-[#d4a855]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-[#8b1a1a]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#d4a855]/10 border border-[#d4a855]/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-[#d4a855] fill-[#d4a855]" />
              <span className="text-[#d4a855] text-sm font-medium">Voyant de confiance depuis + de 20 ans</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#f5f0e6] mb-6 leading-tight">
              <span className="text-[#d4a855]">Voyance Immédiate</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">avec Cheikh</span>
            </h1>

            <p className="text-lg md:text-xl text-[#a89f8f] mb-4 max-w-xl mx-auto lg:mx-0">
              Médium Marocain Authentique - Voyance Orientale Sérieuse
            </p>

            <p className="text-[#f5f0e6]/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Vous traversez un doute ou un blocage ? Je vous apporte des réponses claires avec sérieux et discrétion. 
              Spécialiste du <span className="text-[#d4a855]">Mektoub</span>, de l&apos;interprétation des rêves et de la lecture du marc de café.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#d4a855] to-[#b8922e] hover:from-[#e5b966] hover:to-[#d4a855] text-[#0a0a0a] font-bold text-lg px-8 py-6 shadow-lg shadow-[#d4a855]/20"
              >
                <a href="tel:0782388164">
                  <Phone className="w-5 h-5 mr-2" />
                  07 82 38 81 64
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#8b1a1a] text-[#f5f0e6] hover:bg-[#8b1a1a] hover:text-[#f5f0e6] font-bold text-lg px-8 py-6"
              >
                <a href="#services">
                  Nos Services
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-[#a89f8f]">
                <Clock className="w-5 h-5 text-[#d4a855]" />
                <span className="text-sm">Réponse Immédiate</span>
              </div>
              <div className="flex items-center gap-2 text-[#a89f8f]">
                <Shield className="w-5 h-5 text-[#d4a855]" />
                <span className="text-sm">100% Confidentiel</span>
              </div>
              <div className="flex items-center gap-2 text-[#a89f8f]">
                <Star className="w-5 h-5 text-[#d4a855]" />
                <span className="text-sm">+2000 Consultations</span>
              </div>
            </div>
          </div>

          {/* Right content - Images */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main image */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-[#d4a855] shadow-2xl shadow-[#d4a855]/30">
                <Image
                  src="/images/logo.jpg"
                  alt="Cheikh Voyant"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating images */}
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#8b1a1a] shadow-xl">
                <Image
                  src="/images/tarot-cards.jpg"
                  alt="Cartes de tarot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl overflow-hidden border-2 border-[#d4a855] shadow-xl">
                <Image
                  src="/images/crystal-ball.jpg"
                  alt="Boule de cristal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/2 -right-12 w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#8b1a1a] shadow-xl">
                <Image
                  src="/images/coffee-reading.jpg"
                  alt="Lecture du marc de café"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Domains of expertise */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "heart", label: "Amour", sublabel: "Retour de l'être aimé" },
            { icon: "briefcase", label: "Travail", sublabel: "Carrière & Projets" },
            { icon: "users", label: "Famille", sublabel: "Conflits & Harmonie" },
            { icon: "sparkles", label: "Mektoub", sublabel: "Votre Destinée" },
          ].map((item) => (
            <div 
              key={item.label}
              className="bg-[#141414]/80 backdrop-blur-sm border border-[#d4a855]/20 rounded-xl p-4 text-center hover:border-[#d4a855]/50 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#8b1a1a] to-[#5a1010] flex items-center justify-center group-hover:from-[#d4a855] group-hover:to-[#b8922e] transition-all">
                {item.icon === "heart" && <HeartIcon className="w-6 h-6 text-[#f5f0e6]" />}
                {item.icon === "briefcase" && <BriefcaseIcon className="w-6 h-6 text-[#f5f0e6]" />}
                {item.icon === "users" && <UsersIcon className="w-6 h-6 text-[#f5f0e6]" />}
                {item.icon === "sparkles" && <SparklesIcon className="w-6 h-6 text-[#f5f0e6]" />}
              </div>
              <h3 className="font-serif text-lg text-[#d4a855] font-semibold">{item.label}</h3>
              <p className="text-sm text-[#a89f8f]">{item.sublabel}</p>
            </div>
          ))}
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
