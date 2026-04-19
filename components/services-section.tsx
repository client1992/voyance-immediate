import { Heart, Briefcase, Users, Moon, Coffee, Star, Sparkles, BookOpen } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Heart,
    title: "Amour & Relations",
    description: "Est-ce qu'il va revenir ? Comment retrouver l'harmonie dans votre couple ? Je vous guide vers les réponses.",
    keywords: ["Retour de l'être aimé", "Problèmes de couple", "Rencontres amoureuses"]
  },
  {
    icon: Star,
    title: "Voyance Mektoub",
    description: "Comment connaître mon Mektoub ? Découvrez ce que le destin vous réserve selon la tradition orientale.",
    keywords: ["Destin", "Mektoub", "Avenir"]
  },
  {
    icon: Moon,
    title: "Interprétation des Rêves",
    description: "Quelle est la signification de mon rêve ? Interprétation des rêves selon la tradition islamique et orientale.",
    keywords: ["Rêves en Islam", "Symboles oniriques", "Messages"]
  },
  {
    icon: Briefcase,
    title: "Travail & Carrière",
    description: "Vais-je trouver du travail cette année ? Guidance professionnelle et orientation de carrière.",
    keywords: ["Emploi", "Réussite professionnelle", "Projets"]
  },
  {
    icon: Users,
    title: "Famille & Conflits",
    description: "Résolution des conflits familiaux, réconciliation et harmonie au sein du foyer.",
    keywords: ["Conflits familiaux", "Réconciliation", "Harmonie"]
  },
  {
    icon: Sparkles,
    title: "Astrologie Arabe",
    description: "Découvrez votre thème astral selon l'astrologie arabe traditionnelle et ses influences sur votre vie.",
    keywords: ["Astrologie orientale", "Thème astral", "Influences"]
  },
  {
    icon: Coffee,
    title: "Lecture du Marc de Café",
    description: "Art divinatoire ancestral, la lecture du marc de café révèle les messages cachés de votre avenir.",
    keywords: ["Tasséographie", "Tradition orientale", "Divination"]
  },
  {
    icon: BookOpen,
    title: "Déblocage & Protection",
    description: "Libération des blocages énergétiques et protection spirituelle selon les traditions maghrébines.",
    keywords: ["Protection", "Déblocage", "Énergie positive"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,85,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mes <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voyance orientale sérieuse - Médium maghrébin de confiance à Paris
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.keywords.map((keyword, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 bg-secondary/50 text-muted-foreground rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Questions section */}
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 border border-primary/20">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Questions fréquentes que vous vous posez
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Est-ce qu'il va revenir ?",
              "Comment connaître mon Mektoub ?",
              "Quelle est la signification de mon rêve ?",
              "Vais-je trouver du travail cette année ?",
              "Comment retrouver l'harmonie familiale ?",
              "Que me réserve l'avenir ?"
            ].map((question, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <p className="text-foreground italic font-serif">{`"${question}"`}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
