"use client"

import Image from "next/image"
import { Phone, Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-700" />
      </div>

      {/* Golden border decorations */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Logo and text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo.jfif-HL1yolo4AJzhMHvKyYuG6fq4Hg4emZ.jpeg"
                  alt="Voyance Immédiate - Logo Cheikh Médium Marocain"
                  fill
                  className="object-contain rounded-full border-2 border-primary/30"
                  priority
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="text-primary">Voyance</span> Immédiate
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-serif mb-6">
              Consultation Médium Marocain
            </p>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Vous traversez un doute ou un blocage dans votre vie ? 
              Je vous apporte des réponses claires avec sérieux et discrétion.
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <Star className="w-5 h-5 text-primary" />
                <span>+20 ans d&apos;expérience</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Réponse immédiate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6"
                asChild
              >
                <a href="tel:0782388164" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Appeler Maintenant
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6"
                asChild
              >
                <a href="#contact">
                  Prendre Rendez-vous
                </a>
              </Button>
            </div>

            {/* Phone number display */}
            <div className="mt-8 p-4 bg-card/50 backdrop-blur-sm rounded-lg border border-primary/20 inline-block">
              <p className="text-sm text-muted-foreground mb-1">Appelez-moi directement</p>
              <a 
                href="tel:0782388164" 
                className="text-2xl md:text-3xl font-bold text-primary hover:text-primary/80 transition-colors font-serif"
              >
                07 82 38 81 64
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 rounded-2xl" />
              <div className="relative overflow-hidden rounded-xl border-2 border-primary/30">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-17%20at%2023.14.40%20%281%29-W3nznhz5YKp2ws9n2W3IKcoXMvHuEG.jpeg"
                  alt="Cheikh - Médium Marocain en consultation"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
