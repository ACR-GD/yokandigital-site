import { useLanguage } from "@/hooks/use-language";

export default function Portfolio() {
  const { t, language } = useLanguage();

  const projects = language === 'en' ? [
    {
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Luxury Condo Design Studio",
      result: "12 consultation requests in first month"
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Residential Interior Firm",
      result: "Page 1 for 'Interior Designer Bangsar'"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Commercial Fit-Out Company",
      result: "3x more qualified leads from website"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Boutique Design House",
      result: "Instagram following to paying clients"
    }
  ] : [
    {
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Studio Reka Bentuk Kondo Mewah",
      result: "12 permintaan konsultasi dalam bulan pertama"
    },
    {
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Firma Reka Bentuk Dalaman Kediaman",
      result: "Halaman 1 untuk 'Pereka Dalaman Bangsar'"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Syarikat Fit-Out Komersial",
      result: "3x lebih prospek berkualiti dari laman web"
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Rumah Reka Bentuk Butik",
      result: "Pengikut Instagram jadi klien berbayar"
    }
  ];

  const testimonials = language === 'en' ? [
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "Sarah Tan",
      position: "Principal Designer, Studio Aria Interiors",
      quote: "Finally, a team that understands what interior designers need. My portfolio website now actually brings in clients who appreciate my work."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "Marcus Wong", 
      position: "Founder, MW Design Studio, Damansara",
      quote: "I used to rely only on referrals. Now homeowners find me on Google and book consultations directly. Game changer."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "Amirul Hassan",
      position: "Creative Director, Casa Design KL",
      quote: "They helped me stop wasting time on clients who can't afford my services. Now I only get inquiries from serious homeowners."
    }
  ] : [
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "Sarah Tan",
      position: "Pereka Utama, Studio Aria Interiors",
      quote: "Akhirnya, pasukan yang faham keperluan pereka dalaman. Laman web portfolio saya kini benar-benar membawa masuk klien yang menghargai kerja saya."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "Marcus Wong", 
      position: "Pengasas, MW Design Studio, Damansara",
      quote: "Dulu saya hanya bergantung pada rujukan. Sekarang pemilik rumah jumpa saya di Google dan tempah konsultasi terus. Perubahan besar."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "Amirul Hassan",
      position: "Pengarah Kreatif, Casa Design KL",
      quote: "Mereka bantu saya berhenti bazir masa dengan klien yang tak mampu bayar perkhidmatan saya. Sekarang saya hanya dapat pertanyaan dari pemilik rumah serius."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title" data-testid="portfolio-title">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="portfolio-subtitle">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer" data-testid={`project-${index}`}>
              <img 
                src={project.image} 
                alt={`${project.title} - Professional web design portfolio by Yokan Digital Malaysia showing increased online sales and SEO results`}
                className="rounded-xl shadow-lg group-hover:shadow-xl transition-shadow w-full h-48 object-cover"
                data-testid={`img-project-${index}`}
              />
              <h4 className="font-semibold mt-4" data-testid={`project-title-${index}`}>
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground" data-testid={`project-result-${index}`}>
                {project.result}
              </p>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card bg-card p-6 rounded-xl shadow-lg border border-purple-200 dark:border-purple-800 hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-700 transition-all"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name}, ${testimonial.position} - Satisfied client of Yokan Digital web design and SEO services in Malaysia`}
                  className="w-12 h-12 rounded-full object-cover"
                  data-testid={`img-testimonial-${index}`}
                />
                <div className="ml-4">
                  <h4 className="font-semibold" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`testimonial-position-${index}`}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground" data-testid={`testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
