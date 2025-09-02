import { Palette, Search, Megaphone, Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Palette className="text-white text-xl" />,
      title: t('services.webDesign.title'),
      description: t('services.webDesign.description'),
      features: [
        t('services.webDesign.title'),
        "CMS Integration",
        "E-commerce Solutions"
      ],
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25"
    },
    {
      icon: <Search className="text-white text-xl" />,
      title: t('services.seo.title'),
      description: t('services.seo.description'),
      features: [
        "Keyword Research",
        "Local SEO",
        "Technical SEO"
      ],
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/25"
    },
    {
      icon: <Megaphone className="text-white text-xl" />,
      title: t('services.marketing.title'),
      description: t('services.marketing.description'),
      features: [
        "Social Media Marketing",
        "Google Ads Management",
        "Content Strategy"
      ],
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-card p-8 rounded-xl shadow-lg border border-border transition-all duration-300"
              data-testid={`service-card-${index}`}
            >
              <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4" data-testid={`service-title-${index}`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-accent mr-2 w-4 h-4" />
                    <span data-testid={`service-feature-${index}-${featureIndex}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
