import Image from "next/image"
import { Phone, Calendar, Clock, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const consultationTypes = [
    {
      icon: Phone,
      title: "Consultation Téléphonique Immédiate",
      description: "Appelez maintenant et obtenez des réponses immédiates à vos questions. Disponible 7j/7.",
      features: ["Réponse immédiate", "Sans rendez-vous", "Discrétion assurée"],
      cta: "Appeler Maintenant",
      href: "tel:0782388164",
      highlight: true,
    },
    {
      icon: Calendar,
      title: "Consultation sur Rendez-vous",
      description: "Planifiez votre consultation à l'heure qui vous convient pour une séance approfondie.",
      features: ["Horaire flexible", "Préparation personnalisée", "Durée adaptée"],
      cta: "Prendre RDV",
      href: "#contact",
      highlight: false,
    },
    {
      icon: MessageCircle,
      title: "Consultation WhatsApp",
      description: "Consultation via WhatsApp pour une expérience plus personnelle et pratique.",
      features: ["Face à face virtuel", "Lecture en direct", "Accessible partout"],
      cta: "WhatsApp",
      href: "https://wa.me/33782388164",
      highlight: false,
    },
  ]

  const services = [
    {
      image: "/images/tarot-cards.jpg",
      title: "Voyance Mektoub",
      description: "Découvrez votre destinée écrite. Le Mektoub révèle le chemin que la vie a tracé pour vous.",
    },
    {
      image: "/images/crystal-ball.jpg",
      title: "Interprétation des Rêves",
      description: "Vos rêves ont une signification profonde en Islam. Je vous aide à comprendre leurs messages.",
    },
    {
      image: "/images/jinn-work.jpg",
      title: "Travail avec les Djinns",
      description: "Invocation et communication avec les esprits pour résoudre vos problèmes les plus complexes.",
    },
    {
      image: "/images/shams-almaarif.jpg",
      title: "Kitab Shams Al-Maarif",
      description: "Secrets ancestraux du livre sacré Shams Al-Maarif Al-Kubra pour une guidance spirituelle profonde.",
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a855]/50 to-transparent" />
      
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#8b1a1a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#d4a855]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#8b1a1a] font-medium mb-2 uppercase tracking-wider text-sm">Types de Consultation</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f0e6] mb-4">
            Comment Me <span className="text-[#d4a855]">Consulter</span> ?
          </h2>
          <p className="text-[#a89f8f] max-w-2xl mx-auto">
            Choisissez le mode de consultation qui vous convient le mieux. Par téléphone pour une réponse immédiate ou sur rendez-vous pour une séance approfondie.
          </p>
        </div>

        {/* Consultation types */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {consultationTypes.map((type) => (
            <div 
              key={type.title}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                type.highlight 
                  ? "bg-gradient-to-br from-[#8b1a1a] to-[#5a1010] border-2 border-[#d4a855]" 
                  : "bg-[#141414] border border-[#2d2418] hover:border-[#d4a855]/50"
              }`}
            >
              {type.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d4a855] text-[#0a0a0a] text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMANDÉ
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                type.highlight ? "bg-[#d4a855]/20" : "bg-[#8b1a1a]/20"
              }`}>
                <type.icon className={`w-7 h-7 ${type.highlight ? "text-[#d4a855]" : "text-[#8b1a1a]"}`} />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-[#f5f0e6] mb-2">{type.title}</h3>
              <p className="text-[#a89f8f] text-sm mb-4">{type.description}</p>
              
              <ul className="space-y-2 mb-6">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#f5f0e6]/80">
                    <CheckCircle className="w-4 h-4 text-[#d4a855]" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className={`w-full font-bold ${
                  type.highlight 
                    ? "bg-[#d4a855] hover:bg-[#e5b966] text-[#0a0a0a]" 
                    : "bg-[#8b1a1a] hover:bg-[#a02020] text-[#f5f0e6]"
                }`}
              >
                <a href={type.href}>{type.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Services header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#8b1a1a] font-medium mb-2 uppercase tracking-wider text-sm">Mes Spécialités</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f5f0e6] mb-4">
            Domaines de <span className="text-[#d4a855]">Voyance</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#2d2418] hover:border-[#d4a855]/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold text-[#d4a855] mb-2">{service.title}</h3>
                <p className="text-[#a89f8f] text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Questions section */}
        <div className="mt-16 bg-gradient-to-r from-[#2d1810] via-[#141414] to-[#2d1810] rounded-2xl p-8 border border-[#d4a855]/20">
          <h3 className="font-serif text-2xl font-bold text-[#f5f0e6] text-center mb-8">
            Questions Fréquentes de Mes Consultants
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Est-ce qu'il va revenir ?",
              "Comment connaître mon Mektoub ?",
              "Comment débloquer ma chance ?",
              "Comment savoir si j'ai le mauvais œil ?",
            ].map((question) => (
              <div 
                key={question}
                className="bg-[#0a0a0a]/50 rounded-xl p-4 text-center border border-[#8b1a1a]/30 hover:border-[#d4a855]/50 transition-colors"
              >
                <p className="text-[#f5f0e6] font-medium italic">&quot;{question}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
