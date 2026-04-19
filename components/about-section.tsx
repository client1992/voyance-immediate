import Image from "next/image"
import { MapPin, Award, Heart, Eye, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#251e35] via-[#1a1425] to-[#251e35]" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a86c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#6b4e8d]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#6b4e8d] font-medium mb-2 uppercase tracking-wider text-sm">A Propos</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f8f5f0] mb-4">
            Qui est <span className="text-[#c9a86c]">Cheikh</span> ?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image side */}
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
                <p className="text-[#c9a86c] font-serif text-xl font-bold">Cheikh</p>
                <p className="text-[#f8f5f0]/80 text-sm">Medium Marocain - Voyance Orientale</p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#6b4e8d] rounded-xl p-4 border border-[#c9a86c]/30 shadow-xl hidden md:block">
              <p className="text-[#c9a86c] font-serif text-3xl font-bold">+20</p>
              <p className="text-[#f8f5f0] text-sm">ans d&apos;experience</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-lg text-[#f8f5f0] leading-relaxed mb-6">
              Je suis <span className="text-[#c9a86c] font-semibold">Cheikh</span>, medium et voyant d&apos;origine marocaine, 
              originaire de la region du <span className="text-[#c9a86c]">Souss</span>, dans le sud du Maroc. 
              Fort de plus de <span className="text-[#c9a86c] font-semibold">20 ans d&apos;experience</span> dans les arts divinatoires, 
              je mets mon don au service de ceux qui cherchent des reponses a leurs questions les plus profondes.
            </p>

            <p className="text-[#b8a8c8] leading-relaxed mb-8">
              Installe a <span className="text-[#c9a86c]">Paris</span>, je propose des consultations aussi bien en personne 
              qu&apos;a distance par telephone. Mon approche est basee sur l&apos;ecoute, le respect et la discretion absolue. 
              Chaque consultation est unique, car chaque personne merite une attention particuliere.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#251e35] rounded-xl p-4 border border-[#3d2e5a] hover:border-[#c9a86c]/50 transition-colors">
                <div className="w-10 h-10 bg-[#6b4e8d]/20 rounded-lg flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-[#c9a86c]" />
                </div>
                <h3 className="font-serif text-[#f8f5f0] font-semibold mb-1">+20 ans</h3>
                <p className="text-xs text-[#b8a8c8]">d&apos;experience</p>
              </div>

              <div className="bg-[#251e35] rounded-xl p-4 border border-[#3d2e5a] hover:border-[#c9a86c]/50 transition-colors">
                <div className="w-10 h-10 bg-[#6b4e8d]/20 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-[#c9a86c]" />
                </div>
                <h3 className="font-serif text-[#f8f5f0] font-semibold mb-1">Paris</h3>
                <p className="text-xs text-[#b8a8c8]">et a distance</p>
              </div>

              <div className="bg-[#251e35] rounded-xl p-4 border border-[#3d2e5a] hover:border-[#c9a86c]/50 transition-colors">
                <div className="w-10 h-10 bg-[#6b4e8d]/20 rounded-lg flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-[#c9a86c]" />
                </div>
                <h3 className="font-serif text-[#f8f5f0] font-semibold mb-1">Discretion</h3>
                <p className="text-xs text-[#b8a8c8]">totale garantie</p>
              </div>

              <div className="bg-[#251e35] rounded-xl p-4 border border-[#3d2e5a] hover:border-[#c9a86c]/50 transition-colors">
                <div className="w-10 h-10 bg-[#6b4e8d]/20 rounded-lg flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-[#c9a86c]" />
                </div>
                <h3 className="font-serif text-[#f8f5f0] font-semibold mb-1">Voyance</h3>
                <p className="text-xs text-[#b8a8c8]">authentique</p>
              </div>
            </div>

            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#c9a86c] to-[#a8894d] hover:from-[#d9b87c] hover:to-[#c9a86c] text-[#1a1425] font-bold"
            >
              <a href="tel:0782388164">
                <Phone className="w-5 h-5 mr-2" />
                Me Consulter
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
