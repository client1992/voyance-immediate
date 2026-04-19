import Image from "next/image"
import { MapPin, Award, Heart, Eye, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#0a0a0a] to-[#141414]" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4a855]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8b1a1a]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#8b1a1a] font-medium mb-2 uppercase tracking-wider text-sm">A Propos</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f0e6] mb-4">
            Qui est <span className="text-[#d4a855]">Cheikh</span> ?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4a855]/30">
              <Image
                src="/images/consultation.jpg"
                alt="Cheikh - Médium Marocain"
                width={600}
                height={500}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#d4a855] font-serif text-xl font-bold">Cheikh</p>
                <p className="text-[#f5f0e6]/80 text-sm">Médium Marocain - Voyance Orientale</p>
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-[#8b1a1a] rounded-xl p-4 border border-[#d4a855]/30 shadow-xl hidden md:block">
              <p className="text-[#d4a855] font-serif text-3xl font-bold">+20</p>
              <p className="text-[#f5f0e6] text-sm">ans d&apos;expérience</p>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-lg text-[#f5f0e6] leading-relaxed mb-6">
              Je suis <span className="text-[#d4a855] font-semibold">Cheikh</span>, médium et voyant d&apos;origine marocaine, 
              originaire de la région du <span className="text-[#d4a855]">Souss</span>, dans le sud du Maroc. 
              Fort de plus de <span className="text-[#d4a855] font-semibold">20 ans d&apos;expérience</span> dans les arts divinatoires, 
              je mets mon don au service de ceux qui cherchent des réponses à leurs questions les plus profondes.
            </p>

            <p className="text-[#a89f8f] leading-relaxed mb-8">
              Installé à <span className="text-[#d4a855]">Paris</span>, je propose des consultations aussi bien en personne 
              qu&apos;à distance par téléphone. Mon approche est basée sur l&apos;écoute, le respect et la discrétion absolue. 
              Chaque consultation est unique, car chaque personne mérite une attention particulière.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#141414] rounded-xl p-4 border border-[#2d2418] hover:border-[#d4a855]/50 transition-colors">
                <div className="w-10 h-10 bg-[#8b1a1a]/20 rounded-lg flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-[#d4a855]" />
                </div>
                <h3 className="font-serif text-[#f5f0e6] font-semibold mb-1">+20 ans</h3>
                <p className="text-xs text-[#a89f8f]">d&apos;expérience</p>
              </div>

              <div className="bg-[#141414] rounded-xl p-4 border border-[#2d2418] hover:border-[#d4a855]/50 transition-colors">
                <div className="w-10 h-10 bg-[#8b1a1a]/20 rounded-lg flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-[#d4a855]" />
                </div>
                <h3 className="font-serif text-[#f5f0e6] font-semibold mb-1">Paris</h3>
                <p className="text-xs text-[#a89f8f]">et à distance</p>
              </div>

              <div className="bg-[#141414] rounded-xl p-4 border border-[#2d2418] hover:border-[#d4a855]/50 transition-colors">
                <div className="w-10 h-10 bg-[#8b1a1a]/20 rounded-lg flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5 text-[#d4a855]" />
                </div>
                <h3 className="font-serif text-[#f5f0e6] font-semibold mb-1">Discrétion</h3>
                <p className="text-xs text-[#a89f8f]">totale garantie</p>
              </div>

              <div className="bg-[#141414] rounded-xl p-4 border border-[#2d2418] hover:border-[#d4a855]/50 transition-colors">
                <div className="w-10 h-10 bg-[#8b1a1a]/20 rounded-lg flex items-center justify-center mb-3">
                  <Eye className="w-5 h-5 text-[#d4a855]" />
                </div>
                <h3 className="font-serif text-[#f5f0e6] font-semibold mb-1">Voyance</h3>
                <p className="text-xs text-[#a89f8f]">authentique</p>
              </div>
            </div>

            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#d4a855] to-[#b8922e] hover:from-[#e5b966] hover:to-[#d4a855] text-[#0a0a0a] font-bold"
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
