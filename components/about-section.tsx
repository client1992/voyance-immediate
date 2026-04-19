import { MapPin, Award, Heart, Eye } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Qui est <span className="text-primary">Cheikh</span> ?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/20">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-center font-serif">
              Je suis <span className="text-primary font-semibold">Cheikh</span>, médium et voyant d&apos;origine marocaine, 
              originaire de la région du <span className="text-primary">Souss</span>, dans le sud du Maroc. 
              Fort de plus de <span className="text-primary font-semibold">20 ans d&apos;expérience</span> dans les arts divinatoires, 
              je mets mon don au service de ceux qui cherchent des réponses à leurs questions les plus profondes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center">
              Installé à <span className="text-primary">Paris</span>, je propose des consultations aussi bien en personne 
              qu&apos;à distance par téléphone. Mon approche est basée sur l&apos;écoute, le respect et la discrétion absolue. 
              Chaque consultation est unique, car chaque personne mérite une attention particulière.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">+20 ans</h3>
                <p className="text-sm text-muted-foreground">d&apos;expérience</p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Paris</h3>
                <p className="text-sm text-muted-foreground">et à distance</p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Discrétion</h3>
                <p className="text-sm text-muted-foreground">totale garantie</p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">Voyance</h3>
                <p className="text-sm text-muted-foreground">authentique</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
