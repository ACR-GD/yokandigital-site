import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";

export default function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter.title'),
      price: "RM2,500",
      description: t('pricing.starter.description'),
      features: [
        "5-page professional website",
        "Basic SEO optimization", 
        "Mobile responsive design",
        "Monthly performance report",
        "Email support"
      ],
      buttonText: t('button.getStarted'),
      buttonVariant: "secondary" as const,
      featured: false
    },
    {
      name: t('pricing.professional.title'),
      price: "RM5,000",
      description: t('pricing.professional.description'),
      features: [
        "15-page custom website",
        "Advanced SEO + Local SEO",
        "Social media management", 
        "Google Ads management",
        "Weekly reporting",
        "Phone + email support"
      ],
      buttonText: t('button.chooseProfessional'),
      buttonVariant: "default" as const,
      featured: true
    },
    {
      name: t('pricing.enterprise.title'),
      price: "RM10,000",
      description: t('pricing.enterprise.description'),
      features: [
        "Unlimited pages + E-commerce",
        "Full SEO + Content marketing",
        "Multi-platform campaigns",
        "Advanced analytics & BI",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      buttonText: t('button.contactSales'),
      buttonVariant: "secondary" as const,
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title" data-testid="pricing-title">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="pricing-subtitle">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card bg-card p-8 rounded-xl shadow-lg border transition-all duration-300 ${
                plan.featured 
                  ? 'featured border-accent relative transform scale-105' 
                  : 'border-border'
              }`}
              data-testid={`pricing-card-${index}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2" data-testid={`pricing-name-${index}`}>
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-primary mb-2" data-testid={`pricing-price-${index}`}>
                  {plan.price}<span className="text-lg text-muted-foreground">/month</span>
                </div>
                <p className="text-muted-foreground" data-testid={`pricing-description-${index}`}>
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <span data-testid={`pricing-feature-${index}-${featureIndex}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.buttonVariant}
                className={`w-full ${
                  plan.featured 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 shadow-lg shadow-pink-500/25' 
                    : index === 0 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg shadow-blue-500/25'
                      : 'bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700 shadow-lg shadow-purple-500/25'
                } transition-all`}
                data-testid={`button-plan-${index}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
