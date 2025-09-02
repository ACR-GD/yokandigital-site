import { useLanguage } from "@/hooks/use-language";

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "E-commerce Platform",
      result: "300% increase in online sales"
    },
    {
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Corporate Website",
      result: "50% more qualified leads"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "SEO Campaign",
      result: "Page 1 Google rankings"
    },
    {
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      title: "Mobile App Design",
      result: "10K+ downloads in first month"
    }
  ];

  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "Ahmad Rahman",
      position: "CEO, Tech Solutions Sdn Bhd",
      quote: "Yokan Digital transformed our online presence completely. Our website traffic increased by 400% and we're getting quality leads daily."
    },
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "Siti Nurhaliza", 
      position: "Founder, Haliza Beauty",
      quote: "Professional team, excellent results. Our e-commerce sales doubled within 6 months of working with Yokan Digital."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      name: "David Lim",
      position: "Director, KL Logistics",
      quote: "Their SEO expertise got us to page 1 of Google for our main keywords. Highly recommend for Malaysian businesses."
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
                alt={project.title}
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
                  alt={testimonial.name}
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
