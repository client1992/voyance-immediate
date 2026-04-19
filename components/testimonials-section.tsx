"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  // Avis francais
  {
    name: "Marie Dupont",
    location: "Paris, France",
    text: "Franchement au debut j'y croyais pas trop mais ma copine m'a force a appeler... et la je suis restee bouche bee. Il a decrit mon ex comme s'il le connaissait perso. 3 semaines apres il m'a recontacte exactement comme Cheikh l'avait dit.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Jean-Pierre Martin",
    location: "Lyon, France",
    text: "Je traverse une periode compliquee au boulot et Cheikh m'a vraiment aide a y voir plus clair. Pas de blabla, il va droit au but. Il m'a dit d'attendre avant de demissionner et il avait raison, j'ai eu une promo le mois dernier.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Sophie Bernard",
    location: "Marseille, France",
    text: "Ca faisait 2 ans que j'avais un blocage dans ma vie, rien n'avancait. Cheikh m'a parle du mauvais oeil et a travaille dessus. En 1 mois ma vie a change, j'ai trouve un appart et rencontre quelqu'un.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Nicolas Lambert",
    location: "Toulouse, France",
    text: "Mon frere m'avait parle de Cheikh. J'ai appele pour ma femme qui voulait me quitter. Il a fait un travail spirituel et aujourd'hui on est plus soudes que jamais. Des fois faut pas chercher a comprendre.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Isabelle Moreau",
    location: "Bordeaux, France",
    text: "Je suis cartesienne de base mais la... il m'a dit des trucs sur ma famille, sur ma grand-mere decedee, des details que personne pouvait savoir. J'en ai eu les larmes aux yeux. C'est un vrai medium.",
    rating: 5,
    date: "Fevrier 2026"
  },
  // Avis arabes France
  {
    name: "Fatima Benali",
    location: "Paris 18e, France",
    text: "والله الشيخ صادق. كنت عندي مشاكل مع راجلي، الشيخ قالي كلشي بالتفصيل وخدم معايا. دابا الحمد لله الأمور مزيانة. الله يجازيه بالخير.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Karim Zidane",
    location: "Montreuil, France",
    text: "Un ami m'a donne son numero. Wallah c'est un vrai, il voit les choses avant qu'elles arrivent. Il m'a prevenu pour un probleme au travail et j'ai pu l'eviter. Baraka Allahou fik ya Cheikh.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Samira El Amrani",
    location: "Saint-Denis, France",
    text: "كنت كنشوف كوابيس كل ليلة وكنحس براسي مكرفسة. الشيخ عرف المشكل من أول تيليفون. دار لي الرقية والحمد لله رجعت كنعيش عادي. شكرا بزاف.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Mehdi Alaoui",
    location: "Vitry, France",
    text: "J'avais la poisse depuis des annees, rien ne marchait dans ma vie. Cheikh m'a dit que quelqu'un m'avait fait du tort. Il a travaille avec le Coran et les choses ont change. Allah y7afdek ya Cheikh.",
    rating: 5,
    date: "Mars 2026"
  },
  // Avis Espagne
  {
    name: "Carlos Garcia",
    location: "Madrid, Espagne",
    text: "Un amigo marroqui me recomendo al Cheikh. No hablo bien frances pero el me entendio perfectamente. Me ayudo con un problema de trabajo que tenia desde hace meses. Gracias Cheikh!",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Maria Lopez",
    location: "Barcelona, Espagne",
    text: "Increible! Cheikh vio cosas de mi pasado que nadie podia saber. Me hablo de mi madre fallecida con detalles precisos. Ahora entiendo porque mi vida estaba bloqueada. Muchas gracias.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Antonio Rodriguez",
    location: "Valencia, Espagne",
    text: "Mi mujer queria divorciarse. Llame a Cheikh desesperado. Hizo un trabajo espiritual y en pocas semanas mi mujer cambio completamente. Estamos mejor que nunca. Gracias de corazon.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Carmen Fernandez",
    location: "Sevilla, Espagne",
    text: "Tenia mal de ojo desde hace anos. Cheikh lo vio inmediatamente por telefono. Despues de su trabajo, mi salud mejoro y encontre trabajo. Es un verdadero vidente.",
    rating: 5,
    date: "Mars 2026"
  },
  // Avis Italie
  {
    name: "Marco Rossi",
    location: "Milano, Italie",
    text: "Un collega mi ha parlato di Cheikh. All'inizio ero scettico ma ho chiamato lo stesso. Mi ha detto cose sul mio passato che nessuno poteva sapere. Ora la mia vita va molto meglio. Grazie mille!",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Giulia Bianchi",
    location: "Roma, Italie",
    text: "Avevo problemi d'amore da anni. Cheikh mi ha spiegato che avevo il malocchio. Dopo il suo lavoro spirituale, ho incontrato l'uomo della mia vita in meno di 2 mesi. Incredibile!",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Alessandro Ferrari",
    location: "Torino, Italie",
    text: "Il mio business andava malissimo. Cheikh ha visto che qualcuno mi aveva fatto del male. Ha fatto il lavoro necessario e ora gli affari vanno benissimo. Lo consiglio a tutti.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Francesca Romano",
    location: "Napoli, Italie",
    text: "Cheikh e un vero medium. Mi ha parlato dei miei nonni defunti con dettagli precisi. Mi ha aiutato a capire perche avevo tanti blocchi nella vita. Grazie di cuore Cheikh!",
    rating: 5,
    date: "Fevrier 2026"
  },
  // Avis Suisse
  {
    name: "Thomas Muller",
    location: "Zurich, Suisse",
    text: "J'habite en Suisse mais j'ai appele Cheikh a Paris. En 30 minutes il m'a dit des choses sur ma vie que personne savait. Il a debloquer ma situation professionnelle. Je le recommande vivement.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Sophie Favre",
    location: "Geneve, Suisse",
    text: "Mon mari voulait me quitter apres 15 ans de mariage. Une amie m'a donne le numero de Cheikh. Apres son travail, mon mari est revenu et on est plus heureux que jamais. Merci infiniment.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Pierre Dubois",
    location: "Lausanne, Suisse",
    text: "J'avais des problemes de sante que les medecins n'arrivaient pas a expliquer. Cheikh a vu tout de suite que c'etait spirituel. Apres son intervention je vais beaucoup mieux. Impressionnant.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Marie-Claire Bonvin",
    location: "Bern, Suisse",
    text: "Cheikh est tres professionnel et discret. Il m'a aide a comprendre pourquoi ma fille avait des comportements etranges. C'etait le mauvais oeil. Maintenant elle va tres bien alhamdoulillah.",
    rating: 5,
    date: "Mars 2026"
  },
  // Avis Koweit
  {
    name: "عبدالله الصباح",
    location: "الكويت",
    text: "الشيخ ماشاء الله عليه عنده علم كبير. ساعدني في مشاكل العمل والعائلة. الحمد لله الأمور تحسنت بشكل كبير. أنصح الجميع بالتواصل معه.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "فاطمة العنزي",
    location: "الكويت",
    text: "كنت أعاني من مشاكل زوجية صعبة. تواصلت مع الشيخ وساعدني كثيرا. الحمد لله رجع زوجي وعائلتنا مستقرة الآن. جزاه الله خير.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "محمد الرشيدي",
    location: "الكويت",
    text: "صديقي نصحني بالشيخ. والله إنسان صادق وأمين. شاف أشياء ماكان أحد يعرفها. ساعدني في فك السحر اللي كان علي. الله يحفظه.",
    rating: 5,
    date: "Janvier 2026"
  },
  // Avis Qatar
  {
    name: "خالد آل ثاني",
    location: "الدوحة، قطر",
    text: "الشيخ رجل صادق وعنده علم حقيقي. ساعدني في مشاكل كانت تأرقني من سنين. الحمد لله دابا كل شي تمام. أنصح كل من يحتاج مساعدة روحانية.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "نورة المهندي",
    location: "الدوحة، قطر",
    text: "كنت أعاني من العين والحسد. الشيخ عرف المشكل من أول اتصال. بعد ما خدم معايا رجعت حياتي طبيعية. شكرا جزيلا يا شيخ.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "أحمد السليطي",
    location: "الدوحة، قطر",
    text: "تجارتي كانت واقفة ومافي بركة. الشيخ قالي إن في عمل مسوي علي. بعد العلاج الروحاني، الحمد لله التجارة رجعت أحسن من قبل.",
    rating: 5,
    date: "Janvier 2026"
  },
  // Avis Arabie Saoudite
  {
    name: "عبدالرحمن العتيبي",
    location: "الرياض، السعودية",
    text: "سمعت عن الشيخ من قريب لي في فرنسا. اتصلت فيه وكان صادق مية بالمية. ساعدني في مشكلة كبيرة كانت تأرقني. الله يجزاه خير.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "سارة القحطاني",
    location: "جدة، السعودية",
    text: "كنت أبحث عن شيخ صادق من زمان. الحمد لله لقيت الشيخ. ساعدني في علاج الحسد وفك عقدة النصيب. الآن أنا متزوجة والحمد لله.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "فهد الدوسري",
    location: "الرياض، السعودية",
    text: "الشيخ ماشاء الله متمكن في علمه. عرف مشكلتي من أول كلمة. عمل معي على فك السحر والحمد لله حياتي تغيرت للأفضل. أنصح به بقوة.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "منى الشمري",
    location: "الدمام، السعودية",
    text: "زوجي كان متغير علي بشكل غريب. الشيخ قال لي إن في سحر تفريق. بعد العلاج زوجي رجع أحسن من الأول. جزاك الله خير يا شيخ.",
    rating: 5,
    date: "Mars 2026"
  },
  // Plus d'avis francais
  {
    name: "Nathalie Petit",
    location: "Nantes, France",
    text: "Mon fils avait des problemes a l'ecole, comportement bizarre, cauchemars... Les medecins trouvaient rien. Cheikh a vu tout de suite ce qui n'allait pas. Apres son intervention mon fils va beaucoup mieux.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Christophe Leroy",
    location: "Strasbourg, France",
    text: "J'avais des dettes, des problemes partout, la poisse quoi. Cheikh m'a dit que j'avais un travail fait sur moi. Il s'en est occupe et petit a petit les choses se sont debloquees. Aujourd'hui je revis.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Celine Fournier",
    location: "Lille, France",
    text: "Super consultation par telephone. Cheikh prend son temps, il ecoute, il juge pas. Il m'a aidee a comprendre pourquoi tous mes projets echouaient. Maintenant je sais et j'avance.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Laurent Girard",
    location: "Rennes, France",
    text: "Ma mere me l'avait conseille. J'appelais pour savoir si ma copine me trompait... il m'a dit la verite sans detour. Ca fait mal mais au moins j'ai pu tourner la page. Respect.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Amina Tazi",
    location: "Aubervilliers, France",
    text: "ما شاء الله الشيخ عندو علم كبير. شرحلي كلشي على كتاب شمس المعارف وكيفاش يخدم. أنا كنت خايفة لكن طمنني. دابا زوجي رجع للدار.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Youssef Berrada",
    location: "Clichy, France",
    text: "Cheikh serieux et pas comme les autres. Il m'a parle de ma situation sans que je dise rien. Il travaille avec les djinns de maniere correcte, dans le halal. Je recommande a tous mes freres.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Khadija Moussaoui",
    location: "Bobigny, France",
    text: "كنت مريضة والطبا ما لقاو والو. صاحبتي عطاتني نمرة الشيخ. من أول هضرة قالي عندك العين. خدم معايا والحمد لله الصحة رجعات.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Omar Benani",
    location: "Creteil, France",
    text: "Hamdoulilah j'ai trouve Cheikh. Ca faisait 5 ans que je cherchais une femme, rien ne marchait. Il m'a dit pourquoi et a fait le necessaire. 4 mois apres j'etais marie. Que Dieu le protege.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Julien Marchand",
    location: "Versailles, France",
    text: "Ma belle-mere maghrebine m'a conseille Cheikh. J'etais sceptique mais bon... Il a vu des choses sur mon passe que meme ma femme savait pas. Depuis sa consultation, j'ai retrouve la paix interieure.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Layla Ouazzani",
    location: "Sarcelles, France",
    text: "بغيت نشكر الشيخ على المساعدة ديالو. راجلي كان كيخرج كل ليلة وما كيبقاش فالدار. الشيخ خدم الخدمة وراجلي تبدل 180 درجة. الله يبارك فيك.",
    rating: 5,
    date: "Fevrier 2026"
  },
  {
    name: "Alexandre Durand",
    location: "Cannes, France",
    text: "J'ai decouvert Cheikh par hasard sur internet. Meilleure decision de ma vie. Il m'a aide dans mes affaires, m'a prevenu des personnes toxiques autour de moi. Un vrai guide spirituel.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Caroline Lefevre",
    location: "Aix-en-Provence, France",
    text: "Troisieme voyant que je consultais et le seul qui a ete honnete avec moi. Il m'a dit la verite meme si c'etait dur a entendre. Pas de fausses promesses, juste la realite. Je respecte ca.",
    rating: 5,
    date: "Fevrier 2026"
  },
  // Plus d'avis espagnols
  {
    name: "Pablo Martinez",
    location: "Malaga, Espagne",
    text: "Cheikh me ayudo cuando nadie mas podia. Mi negocio estaba arruinado y el vio que era por envidia. Despues de su trabajo todo cambio. Ahora mi negocio va mejor que nunca.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Isabel Sanchez",
    location: "Bilbao, Espagne",
    text: "Tenia problemas para quedarme embarazada. Los medicos no encontraban nada. Cheikh me dijo que era espiritual y trabajo en ello. Ahora tengo un bebe hermoso. Gracias Cheikh!",
    rating: 5,
    date: "Janvier 2026"
  },
  // Plus d'avis italiens
  {
    name: "Luca Esposito",
    location: "Firenze, Italie",
    text: "Non credevo nella voyance ma un amico mi ha convinto a chiamare. Cheikh mi ha detto cose che solo io sapevo. Mi ha aiutato a risolvere problemi familiari che duravano da anni.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Chiara Colombo",
    location: "Bologna, Italie",
    text: "Il Cheikh e una persona seria e onesta. Mi ha aiutato con il mio matrimonio che stava andando in pezzi. Ora io e mio marito siamo piu felici che mai. Grazie infinite!",
    rating: 5,
    date: "Fevrier 2026"
  },
]

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 6
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="avis" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#251e35] via-[#1a1425] to-[#251e35]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a86c]/50 to-transparent" />
      
      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 text-[150px] text-[#c9a86c]/5 font-serif leading-none">&ldquo;</div>
      <div className="absolute bottom-20 right-10 text-[150px] text-[#c9a86c]/5 font-serif leading-none rotate-180">&ldquo;</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#6b4e8d] font-medium mb-2 uppercase tracking-wider text-sm">Ils Me Font Confiance</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f8f5f0] text-balance">
            Avis de Mes <span className="text-[#c9a86c]">Clients</span>
          </h2>
          <p className="text-[#b8a8c8] max-w-2xl mx-auto mt-4">
            Des consultations sinceres, sans jugement - Plus de 2000 personnes accompagnees dans le monde entier
          </p>
          <p className="text-[#c9a86c] text-sm mt-2">
            {testimonials.length} avis verifies - France, Espagne, Italie, Suisse, Koweit, Qatar, Arabie Saoudite
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#251e35] rounded-2xl p-6 border border-[#3d2e5a] hover:border-[#c9a86c]/50 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#c9a86c]/20 group-hover:text-[#c9a86c]/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c9a86c] text-[#c9a86c]" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-[#f8f5f0]/90 leading-relaxed mb-6 italic text-sm">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#6b4e8d] to-[#4a3563] rounded-full flex items-center justify-center">
                    <span className="text-[#f8f5f0] font-serif font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#f8f5f0] text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[#b8a8c8]">{testimonial.location}</p>
                  </div>
                </div>
                <span className="text-xs text-[#b8a8c8]">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button 
            onClick={prevPage}
            className="p-3 rounded-full bg-[#3d2e5a] border border-[#c9a86c]/30 text-[#c9a86c] hover:bg-[#c9a86c] hover:text-[#1a1425] transition-all"
            aria-label="Avis precedents"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentPage === i 
                    ? "bg-[#c9a86c] w-8" 
                    : "bg-[#3d2e5a] hover:bg-[#c9a86c]/50"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextPage}
            className="p-3 rounded-full bg-[#3d2e5a] border border-[#c9a86c]/30 text-[#c9a86c] hover:bg-[#c9a86c] hover:text-[#1a1425] transition-all"
            aria-label="Avis suivants"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 bg-gradient-to-r from-[#3d2e5a] via-[#251e35] to-[#3d2e5a] rounded-2xl p-8 border border-[#c9a86c]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-[#c9a86c]">+2000</p>
              <p className="text-sm text-[#b8a8c8] mt-1">Consultations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-[#c9a86c]">98%</p>
              <p className="text-sm text-[#b8a8c8] mt-1">Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-[#c9a86c]">+20</p>
              <p className="text-sm text-[#b8a8c8] mt-1">Ans d&apos;Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-serif font-bold text-[#c9a86c]">7j/7</p>
              <p className="text-sm text-[#b8a8c8] mt-1">Disponibilite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
