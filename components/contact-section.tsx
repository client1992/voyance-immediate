"use client"

import { Phone, Clock, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,85,0.1)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Contactez</span>-moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consultation immédiate par téléphone ou sur rendez-vous
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main contact card */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border-2 border-primary/30 shadow-2xl shadow-primary/5">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Appelez-moi maintenant
              </h3>
              <p className="text-muted-foreground">
                Je vous réponds personnellement
              </p>
            </div>

            {/* Phone number - prominent display */}
            <div className="text-center mb-10">
              <a 
                href="tel:0782388164"
                className="inline-block text-4xl md:text-5xl lg:text-6xl font-bold text-primary hover:text-primary/80 transition-colors font-serif tracking-wider"
              >
                07 82 38 81 64
              </a>
            </div>

            {/* Call buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-7"
                asChild
              >
                <a href="tel:0782388164" className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Appeler Maintenant
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-10 py-7"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Disponibilité</h4>
                <p className="text-sm text-muted-foreground">7j/7 - 9h à 21h</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Consultation</h4>
                <p className="text-sm text-muted-foreground">Téléphone ou Rendez-vous</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">Localisation</h4>
                <p className="text-sm text-muted-foreground">Paris & à distance</p>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-card rounded-xl p-6 border border-border">
              <p className="text-foreground mb-2 font-serif text-lg">
                Consultation <span className="text-primary font-semibold">discrète</span> et <span className="text-primary font-semibold">confidentielle</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Réponses sincères, sans jugement - Plus de 20 ans d&apos;expérience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
