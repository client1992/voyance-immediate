import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Fatima B.",
    location: "Paris",
    text: "Cheikh m'a aidée à comprendre ma situation amoureuse. Ses prédictions se sont réalisées et j'ai enfin retrouvé la paix intérieure. Je le recommande vivement.",
    rating: 5
  },
  {
    name: "Youssef M.",
    location: "Lyon",
    text: "Consultation sérieuse et professionnelle. Cheikh a su me guider dans mes choix professionnels. Aujourd'hui, j'ai trouvé le travail que je cherchais.",
    rating: 5
  },
  {
    name: "Sarah K.",
    location: "Marseille",
    text: "L'interprétation de mes rêves par Cheikh m'a apporté des réponses que je cherchais depuis longtemps. Son approche est respectueuse et bienveillante.",
    rating: 5
  },
  {
    name: "Ahmed R.",
    location: "Toulouse",
    text: "Grâce à la voyance Mektoub de Cheikh, j'ai pu prendre les bonnes décisions pour ma famille. Un médium authentique et de confiance.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl text-primary font-serif">&ldquo;</div>
        <div className="absolute bottom-10 right-10 text-8xl text-primary font-serif rotate-180">&ldquo;</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Témoignages de <span className="text-primary">Confiance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des consultations sincères, sans jugement
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-foreground leading-relaxed mb-6 italic font-serif">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-serif font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
          <div className="text-center">
            <p className="text-4xl font-serif font-bold text-primary">+1000</p>
            <p className="text-sm text-muted-foreground">Consultations</p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-serif font-bold text-primary">98%</p>
            <p className="text-sm text-muted-foreground">Satisfaction</p>
          </div>
          <div className="w-px h-12 bg-border hidden md:block" />
          <div className="text-center">
            <p className="text-4xl font-serif font-bold text-primary">+20</p>
            <p className="text-sm text-muted-foreground">Ans d&apos;expérience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
