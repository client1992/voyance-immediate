import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie Dupont",
    location: "Paris",
    text: "Cheikh m'a aidée à traverser une période très difficile dans ma vie sentimentale. Ses prédictions se sont réalisées et mon compagnon est revenu vers moi. Je le recommande les yeux fermés.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Jean-Pierre Martin",
    location: "Lyon",
    text: "Consultation sérieuse et professionnelle. Cheikh a su me guider dans mes choix professionnels avec une précision remarquable. Aujourd'hui, j'ai décroché le poste que je convoitais.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Sophie Bernard",
    location: "Marseille",
    text: "L'interprétation de mes rêves par Cheikh m'a apporté des réponses que je cherchais depuis longtemps. Son approche est respectueuse, bienveillante et sans jugement.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Nicolas Lambert",
    location: "Toulouse",
    text: "Grâce à la voyance Mektoub de Cheikh, j'ai pu prendre les bonnes décisions pour ma famille. Un médium authentique et de grande confiance. Merci infiniment.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Isabelle Moreau",
    location: "Bordeaux",
    text: "J'étais sceptique au début mais Cheikh m'a bluffée par la précision de ses visions. Il a su voir des détails de ma vie que personne ne connaissait. Extraordinaire.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Philippe Dubois",
    location: "Nice",
    text: "Cheikh possède un don rare. Sa lecture du marc de café m'a révélé des choses incroyables sur mon avenir. Tout s'est réalisé exactement comme il l'avait prédit.",
    rating: 5,
    date: "Janvier 2026"
  }
]

export function TestimonialsSection() {
  return (
    <section id="avis" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#0a0a0a] to-[#141414]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a855]/50 to-transparent" />
      
      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 text-[150px] text-[#d4a855]/5 font-serif leading-none">&ldquo;</div>
      <div className="absolute bottom-20 right-10 text-[150px] text-[#d4a855]/5 font-serif leading-none rotate-180">&ldquo;</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#8b1a1a] font-medium mb-2 uppercase tracking-wider text-sm">Ils Me Font Confiance</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f0e6] mb-4">
            Avis de Mes <span className="text-[#d4a855]">Clients</span>
          </h2>
          <p className="text-[#a89f8f] max-w-2xl mx-auto">
            Des consultations sincères, sans jugement - Plus de 2000 personnes accompagnées
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#141414] rounded-2xl p-6 border border-[#2d2418] hover:border-[#d4a855]/50 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#d4a855]/20 group-hover:text-[#d4a855]/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4a855] text-[#d4a855]" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-[#f5f0e6]/90 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8b1a1a] to-[#5a1010] rounded-full flex items-center justify-center">
                    <span className="text-[#f5f0e6] font-serif font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#f5f0e6] text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[#a89f8f]">{testimonial.location}</p>
                  </div>
                </div>
                <span className="text-xs text-[#a89f8f]">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 bg-gradient-to-r from-[#2d1810] via-[#141414] to-[#2d1810] rounded-2xl p-8 border border-[#d4a855]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-[#d4a855]">+2000</p>
              <p className="text-sm text-[#a89f8f] mt-1">Consultations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-[#d4a855]">98%</p>
              <p className="text-sm text-[#a89f8f] mt-1">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-[#d4a855]">+20</p>
              <p className="text-sm text-[#a89f8f] mt-1">Ans d&apos;Expérience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-[#d4a855]">7j/7</p>
              <p className="text-sm text-[#a89f8f] mt-1">Disponibilité</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
