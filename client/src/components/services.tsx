import { Palette, Search, Megaphone, Check } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Palette className="text-white text-xl" />,
      title: t('services.webDesign.title'),
      description: t('services.webDesign.description'),
      features: [
        "Mobile-Responsive Design",
        "CMS Integration",
        "E-commerce Solutions"
      ],
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg shadow-purple-500/25",
      href: "/services/web-design"
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
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/25",
      href: "/services/seo"
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
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25",
      href: "/services/digital-marketing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title" data-testid="services-title">
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
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <span data-testid={`service-feature-${index}-${featureIndex}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={service.href}>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg transition-all"
                  data-testid={`service-button-${index}`}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Complete Package Promotion */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Need Everything? Get Our Complete Package
              </h3>
              <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Website + SEO + Digital Marketing + Ongoing Support. One solution, maximum results for your Malaysian and/or Singaporean business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services/complete-package">
                  <Button 
                    className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl transition-all transform hover:scale-105"
                    data-testid="button-complete-package"
                  >
                    View Complete Package
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  className="border-white text-white px-8 py-4 text-lg hover:bg-white/10 transition-all"
                  data-testid="button-get-proposal"
                >
                  Get Custom Proposal
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
