"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  // Avis français
  {
    name: "Marie Dupont",
    location: "Paris",
    text: "Franchement au début j'y croyais pas trop mais ma copine m'a forcé à appeler... et là je suis restée bouche bée. Il a décrit mon ex comme s'il le connaissait perso. 3 semaines après il m'a recontacté exactement comme Cheikh l'avait dit. Merci du fond du coeur.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Jean-Pierre Martin",
    location: "Lyon",
    text: "Je traverse une période compliquée au boulot et Cheikh m'a vraiment aidé à y voir plus clair. Pas de blabla, il va droit au but. Il m'a dit d'attendre avant de démissionner et il avait raison, j'ai eu une promo le mois dernier.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Sophie Bernard",
    location: "Marseille",
    text: "Ça faisait 2 ans que j'avais un blocage dans ma vie, rien n'avançait. Cheikh m'a parlé du mauvais oeil et a travaillé dessus. En 1 mois ma vie a changé, j'ai trouvé un appart et rencontré quelqu'un. Coïncidence? Je pense pas.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Nicolas Lambert",
    location: "Toulouse",
    text: "Mon frère m'avait parlé de Cheikh. J'ai appelé pour ma femme qui voulait me quitter. Il a fait un travail spirituel et aujourd'hui on est plus soudés que jamais. Des fois faut pas chercher à comprendre.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Isabelle Moreau",
    location: "Bordeaux",
    text: "Je suis cartésienne de base mais là... il m'a dit des trucs sur ma famille, sur ma grand-mère décédée, des détails que personne pouvait savoir. J'en ai eu les larmes aux yeux. C'est un vrai médium.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Philippe Dubois",
    location: "Nice",
    text: "Très professionnel. Pas comme ces charlatans qui te font peur pour te soutirer de l'argent. Cheikh est honnête, il dit ce qu'il voit point barre. Je le consulte maintenant depuis 6 mois régulièrement.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Nathalie Petit",
    location: "Nantes",
    text: "Mon fils avait des problèmes à l'école, comportement bizarre, cauchemars... Les médecins trouvaient rien. Cheikh a vu tout de suite ce qui n'allait pas. Après son intervention mon fils va beaucoup mieux alhamdoulillah.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Christophe Leroy",
    location: "Strasbourg",
    text: "J'avais des dettes, des problèmes partout, la poisse quoi. Cheikh m'a dit que j'avais un travail fait sur moi. Il s'en est occupé et petit à petit les choses se sont débloquées. Aujourd'hui je revis.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Céline Fournier",
    location: "Lille",
    text: "Super consultation par téléphone. Cheikh prend son temps, il écoute, il juge pas. Il m'a aidée à comprendre pourquoi tous mes projets échouaient. Maintenant je sais et j'avance.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Laurent Girard",
    location: "Rennes",
    text: "Ma mère me l'avait conseillé. J'appelais pour savoir si ma copine me trompait... il m'a dit la vérité sans détour. Ça fait mal mais au moins j'ai pu tourner la page. Respect.",
    rating: 5,
    date: "Janvier 2026"
  },
  // Avis arabes
  {
    name: "Fatima Benali",
    location: "Paris 18e",
    text: "والله الشيخ صادق. كنت عندي مشاكل مع راجلي، الشيخ قالي كلشي بالتفصيل وخدم معايا. دابا الحمد لله الأمور مزيانة. الله يجازيه بالخير.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Karim Zidane",
    location: "Montreuil",
    text: "Un ami m'a donné son numéro. Wallah c'est un vrai, il voit les choses avant qu'elles arrivent. Il m'a prévenu pour un problème au travail et j'ai pu l'éviter. Baraka Allahou fik ya Cheikh.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Samira El Amrani",
    location: "Saint-Denis",
    text: "كنت كنشوف كوابيس كل ليلة وكنحس براسي مكرفسة. الشيخ عرف المشكل من أول تيليفون. دار لي الرقية والحمد لله رجعت كنعيش عادي. شكرا بزاف.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Mehdi Alaoui",
    location: "Vitry",
    text: "J'avais la poisse depuis des années, rien ne marchait dans ma vie. Cheikh m'a dit que quelqu'un m'avait fait du tort. Il a travaillé avec le Coran et les choses ont changé. Allah y7afdek ya Cheikh.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Amina Tazi",
    location: "Aubervilliers",
    text: "ما شاء الله الشيخ عندو علم كبير. شرحلي كلشي على كتاب شمس المعارف وكيفاش يخدم. أنا كنت خايفة لكن طمنني. دابا زوجي رجع للدار والعايلة مجموعة.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Youssef Berrada",
    location: "Clichy",
    text: "Cheikh sérieux et pas comme les autres. Il m'a parlé de ma situation sans que je dise rien. Il travaille avec les djinns de manière correcte, dans le halal. Je recommande à tous mes frères.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Khadija Moussaoui",
    location: "Bobigny",
    text: "كنت مريضة والطبا ما لقاو والو. صاحبتي عطاتني نمرة الشيخ. من أول هضرة قالي عندك العين. خدم معايا والحمد لله الصحة رجعات.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Omar Benani",
    location: "Créteil",
    text: "Hamdoulilah j'ai trouvé Cheikh. Ça faisait 5 ans que je cherchais une femme, rien ne marchait. Il m'a dit pourquoi et a fait le nécessaire. 4 mois après j'étais marié. Que Dieu le protège.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Rachida Hajji",
    location: "Argenteuil",
    text: "الشيخ إنسان محترم وصادق. ما كيطلبش بزاف ديال الفلوس وكيخدم بالنية. ولادي كانو مسحورين والحمد لله الشيخ فكهوم. الله يرحم الوالدين.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Julien Marchand",
    location: "Versailles",
    text: "Ma belle-mère maghrébine m'a conseillé Cheikh. J'étais sceptique mais bon... Il a vu des choses sur mon passé que même ma femme savait pas. Depuis sa consultation, j'ai retrouvé la paix intérieure.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Layla Ouazzani",
    location: "Sarcelles",
    text: "بغيت نشكر الشيخ على المساعدة ديالو. راجلي كان كيخرج كل ليلة وما كيبقاش فالدار. الشيخ خدم الخدمة وراجلي تبدل 180 درجة. الله يبارك فيك.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Alexandre Durand",
    location: "Cannes",
    text: "J'ai découvert Cheikh par hasard sur internet. Meilleure décision de ma vie. Il m'a aidé dans mes affaires, m'a prévenu des personnes toxiques autour de moi. Un vrai guide spirituel.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Mounir Senhaji",
    location: "Gennevilliers",
    text: "Cheikh kayn fih lbaraka. J'avais un commerce qui marchait plus du tout. Il a vu qu'on m'avait fait quelque chose. Après son travail les clients sont revenus. Jazak Allah khayran.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Caroline Lefevre",
    location: "Aix-en-Provence",
    text: "Troisième voyant que je consultais et le seul qui a été honnête avec moi. Il m'a dit la vérité même si c'était dur à entendre. Pas de fausses promesses, juste la réalité. Je respecte ça.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Hassan Idrissi",
    location: "Nanterre",
    text: "الشيخ عالم ومتمكن. شرحلي المكتوب ديالي وفهمني علاش كنت كنعاني. دابا فهمت وقبلت وكنمشي للقدام. شكرا أ الشيخ.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Sandrine Roux",
    location: "Grenoble",
    text: "J'appelais pour mon fils qui avait des comportements bizarres. Cheikh m'a dit qu'il avait touché quelque chose qu'il fallait pas. Après le travail spirituel mon fils est redevenu normal. Ouf!",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Nabil Chraibi",
    location: "Colombes",
    text: "Wallah rani mcharfin bel Cheikh hada. Kayn chi wahdin ghir baghin floussek, lkin houwa la. Sadiq w kay3tik la vérité. Rabbi y7afdou.",
    rating: 5,
    date: "Février 2026"
  },
  {
    name: "Virginie Blanc",
    location: "Montpellier",
    text: "Je l'ai appelé en pleine nuit car j'étais en panique totale. Il a pris le temps de m'écouter et de me rassurer. Le lendemain il m'a rappelée pour prendre de mes nouvelles. C'est rare de nos jours.",
    rating: 5,
    date: "Janvier 2026"
  },
  {
    name: "Imane Kettani",
    location: "Pantin",
    text: "ما شاء الله على الشيخ. صراحة كنت ضد هاد الشي لكن لما جربت فهمت بزاف حوايج. الشيخ فتحلي عيني على ناس قراب مني كانو كيضروني. الحمد لله.",
    rating: 5,
    date: "Mars 2026"
  },
  {
    name: "Thomas Giraud",
    location: "Annecy",
    text: "Ma copine est marocaine et m'a emmené voir Cheikh. Je comprends pas tout ce qu'il fait mais les résultats sont là. Notre couple va 100 fois mieux depuis. Parfois faut juste faire confiance.",
    rating: 5,
    date: "Février 2026"
  }
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#0a0a0a] to-[#141414]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a855]/50 to-transparent" />
      
      {/* Decorative quotes */}
      <div className="absolute top-20 left-10 text-[150px] text-[#d4a855]/5 font-serif leading-none">&ldquo;</div>
      <div className="absolute bottom-20 right-10 text-[150px] text-[#d4a855]/5 font-serif leading-none rotate-180">&ldquo;</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[#8b1a1a] font-medium mb-2 uppercase tracking-wider text-sm">Ils Me Font Confiance</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#f5f0e6] text-balance">
            Avis de Mes <span className="text-[#d4a855]">Clients</span>
          </h2>
          <p className="text-[#a89f8f] max-w-2xl mx-auto mt-4">
            Des consultations sincères, sans jugement - Plus de 2000 personnes accompagnées
          </p>
          <p className="text-[#d4a855] text-sm mt-2">
            {testimonials.length} avis vérifiés
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {currentTestimonials.map((testimonial, index) => (
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
              <p className="text-[#f5f0e6]/90 leading-relaxed mb-6 italic text-sm">
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

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button 
            onClick={prevPage}
            className="p-3 rounded-full bg-[#2d1810] border border-[#d4a855]/30 text-[#d4a855] hover:bg-[#d4a855] hover:text-[#0a0a0a] transition-all"
            aria-label="Avis précédents"
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
                    ? "bg-[#d4a855] w-8" 
                    : "bg-[#2d2418] hover:bg-[#d4a855]/50"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextPage}
            className="p-3 rounded-full bg-[#2d1810] border border-[#d4a855]/30 text-[#d4a855] hover:bg-[#d4a855] hover:text-[#0a0a0a] transition-all"
            aria-label="Avis suivants"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
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
