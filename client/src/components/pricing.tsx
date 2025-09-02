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
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="pricing-title">
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
                    <Check className="text-accent mr-3 w-4 h-4 flex-shrink-0" />
                    <span data-testid={`pricing-feature-${index}-${featureIndex}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.buttonVariant}
                className="w-full"
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
