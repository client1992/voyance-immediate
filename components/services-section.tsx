import Image from "next/image"
import { Phone, Calendar, Clock, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const consultationTypes = [
    {
      icon: Phone,
      title: "Consultation Telephonique Immediate",
      description: "Appelez maintenant et obtenez des reponses immediates a vos questions. Disponible 7j/7.",
      features: ["Reponse immediate", "Sans rendez-vous", "Discretion assuree"],
      cta: "Appeler Maintenant",
      href: "tel:0782388164",
      highlight: true,
    },
    {
      icon: Calendar,
      title: "Consultation sur Rendez-vous",
      description: "Planifiez votre consultation a l'heure qui vous convient pour une seance approfondie.",
      features: ["Horaire flexible", "Preparation personnalisee", "Duree adaptee"],
      cta: "Prendre RDV",
      href: "#contact",
      highlight: false,
    },
    {
      icon: MessageCircle,
      title: "Consultation WhatsApp",
      description: "Consultation via WhatsApp pour une experience plus personnelle et pratique.",
      features: ["Face a face virtuel", "Lecture en direct", "Accessible partout"],
      cta: "WhatsApp",
      href: "https://wa.me/33782388164",
      highlight: false,
    },
  ]

  const services = [
    {
      image: "/images/tarot-cards.jpg",
      title: "Voyance Mektoub",
      description: "Decouvrez votre destinee ecrite. Le Mektoub revele le chemin que la vie a trace pour vous.",
    },
    {
      image: "/images/crystal-ball.jpg",
      title: "Retour de l'Etre Aime",
      description: "Specialiste du retour affectif. Je vous aide a retrouver l'amour et l'harmonie dans votre couple.",
    },
    {
      image: "/images/jinn-work.jpg",
      title: "Travail avec les Djinns",
      description: "Invocation et communication avec les esprits pour resoudre vos problemes les plus complexes.",
    },
    {
      image: "/images/shams-almaarif.jpg",
      title: "Kitab Shams Al-Maarif",
      description: "Secrets ancestraux du livre sacre Shams Al-Maarif Al-Kubra pour une guidance spirituelle profonde.",
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1425] via-[#251e35] to-[#1a1425]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a86c]/50 to-transparent" />
      
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#6b4e8d]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#c9a86c]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#6b4e8d] font-medium mb-2 uppercase tracking-wider text-sm">Types de Consultation</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f8f5f0] mb-4">
            Comment Me <span className="text-[#c9a86c]">Consulter</span> ?
          </h2>
          <p className="text-[#b8a8c8] max-w-2xl mx-auto">
            Choisissez le mode de consultation qui vous convient le mieux. Par telephone pour une reponse immediate ou sur rendez-vous pour une seance approfondie.
          </p>
        </div>

        {/* Consultation types */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {consultationTypes.map((type) => (
            <div 
              key={type.title}
              className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                type.highlight 
                  ? "bg-gradient-to-br from-[#6b4e8d] to-[#4a3563] border-2 border-[#c9a86c]" 
                  : "bg-[#251e35] border border-[#3d2e5a] hover:border-[#c9a86c]/50"
              }`}
            >
              {type.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c9a86c] text-[#1a1425] text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMANDE
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                type.highlight ? "bg-[#c9a86c]/20" : "bg-[#6b4e8d]/20"
              }`}>
                <type.icon className={`w-7 h-7 ${type.highlight ? "text-[#c9a86c]" : "text-[#6b4e8d]"}`} />
              </div>
              
              <h3 className="font-serif text-xl font-bold text-[#f8f5f0] mb-2">{type.title}</h3>
              <p className="text-[#b8a8c8] text-sm mb-4">{type.description}</p>
              
              <ul className="space-y-2 mb-6">
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#f8f5f0]/80">
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
                <a href={type.href}>{type.cta}</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Services header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#6b4e8d] font-medium mb-2 uppercase tracking-wider text-sm">Mes Specialites</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#f8f5f0] mb-4">
            Domaines de <span className="text-[#c9a86c]">Voyance</span>
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.title}
              className="group relative rounded-2xl overflow-hidden bg-[#251e35] border border-[#3d2e5a] hover:border-[#c9a86c]/50 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
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

        {/* Questions section */}
        <div className="mt-16 bg-gradient-to-r from-[#3d2e5a] via-[#251e35] to-[#3d2e5a] rounded-2xl p-8 border border-[#c9a86c]/20">
          <h3 className="font-serif text-2xl font-bold text-[#f8f5f0] text-center mb-8">
            Questions Frequentes de Mes Consultants
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Est-ce qu'il va revenir ?",
              "Comment connaitre mon Mektoub ?",
              "Comment debloquer ma chance ?",
              "Comment savoir si j'ai le mauvais oeil ?",
            ].map((question) => (
              <div 
                key={question}
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
