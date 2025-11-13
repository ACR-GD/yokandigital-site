import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, TrendingUp, Shield, Clock, Users, Target } from "lucide-react";
import Header from "@/components/header";

export default function CompletePackagePage() {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const packageIncludes = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Professional Web Design",
      description: "Custom website designed specifically for your Malaysian and/or Singaporean business goals",
      details: [
        "Mobile-responsive design",
        "Fast loading optimization",
        "Professional branding",
        "User experience focus",
        "E-commerce integration",
        "Content management system"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Advanced SEO Optimization",
      description: "Dominate Google search results for your target Malaysian market",
      details: [
        "Comprehensive keyword research",
        "On-page optimization",
        "Technical SEO fixes",
        "Local SEO setup",
        "Monthly ranking reports",
        "Google My Business optimization"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-Channel Marketing",
      description: "Reach customers across Facebook, Instagram, WhatsApp, and email",
      details: [
        "Social media management",
        "Paid advertising campaigns",
        "Email marketing automation",
        "WhatsApp Business setup",
        "Content creation",
        "Performance tracking"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ongoing Support & Maintenance",
      description: "Continuous optimization and support to ensure maximum results",
      details: [
        "Monthly strategy reviews",
        "Performance optimization",
        "Technical support",
        "Content updates",
        "Security monitoring",
        "Backup management"
      ]
    }
  ];

  const businessTypes = [
    {
      type: "E-commerce Stores",
      description: "Complete online selling solution",
      features: ["Product catalog setup", "Payment gateway integration", "Inventory management", "Shopping cart optimization"],
      results: "Average 300% increase in online sales"
    },
    {
      type: "Professional Services",
      description: "Establish authority and attract clients",
      features: ["Professional portfolio", "Client testimonials", "Appointment booking", "Service descriptions"],
      results: "Average 200% increase in qualified leads"
    },
    {
      type: "Restaurants & F&B",
      description: "Drive foot traffic and online orders",
      features: ["Online menu display", "Reservation system", "Food delivery integration", "Social media presence"],
      results: "Average 150% increase in reservations"
    },
    {
      type: "Local Businesses",
      description: "Dominate local search results",
      features: ["Local SEO optimization", "Google My Business", "Customer reviews", "Location-based marketing"],
      results: "Average 250% increase in local visibility"
    }
  ];

  const packageTiers = [
    {
      name: "Startup Complete",
      description: "Perfect for new Malaysian and Singaporean businesses launching online",
      features: [
        "5-page professional website",
        "Basic SEO optimization (50 keywords)",
        "2 social media platforms",
        "Email marketing setup",
        "Google My Business optimization",
        "Monthly performance reports",
        "3 months support included"
      ],
      guarantee: "Online presence established in 30 days",
      timeline: "4-6 weeks launch"
    },
    {
      name: "Business Complete",
      description: "Comprehensive solution for growing Malaysian and Singaporean businesses",
      features: [
        "10-page custom website with CMS",
        "Advanced SEO optimization (200 keywords)",
        "4 marketing channels (Facebook, Instagram, WhatsApp, Email)",
        "E-commerce integration",
        "Advanced analytics setup",
        "Content creation (8 posts/month)",
        "Bi-weekly strategy calls",
        "6 months support included"
      ],
      guarantee: "50% increase in qualified leads within 90 days",
      timeline: "6-8 weeks launch",
      popular: true
    },
    {
      name: "Enterprise Complete",
      description: "Full-scale digital domination for established businesses",
      features: [
        "Unlimited pages with advanced functionality",
        "Enterprise SEO (500+ keywords)",
        "Full marketing automation",
        "Multi-language support",
        "API integrations",
        "Video content production",
        "Dedicated account manager",
        "12 months support included"
      ],
      guarantee: "Market leadership in your industry",
      timeline: "8-12 weeks launch"
    }
  ];

  const successMetrics = [
    {
      metric: "450%",
      label: "Average ROI",
      description: "Return on investment within 12 months"
    },
    {
      metric: "90%",
      label: "Client Retention",
      description: "Businesses continue working with us"
    },
    {
      metric: "300%",
      label: "Traffic Increase",
      description: "Average website traffic growth"
    },
    {
      metric: "200%",
      label: "Lead Generation",
      description: "Average increase in qualified leads"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Strategy",
      description: "We analyze your business, competitors, and target audience to create a custom strategy.",
      duration: "Week 1"
    },
    {
      step: "2", 
      title: "Design & Development",
      description: "Our team creates your website while simultaneously setting up your marketing foundations.",
      duration: "Weeks 2-4"
    },
    {
      step: "3",
      title: "SEO & Content",
      description: "We optimize your website for search engines and create compelling marketing content.",
      duration: "Weeks 3-5"
    },
    {
      step: "4",
      title: "Launch & Marketing",
      description: "Your complete digital presence goes live with full marketing campaigns activated.",
      duration: "Week 6"
    },
    {
      step: "5",
      title: "Optimize & Scale",
      description: "Continuous monitoring, optimization, and scaling based on performance data.",
      duration: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-primary-foreground">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
              Complete Digital Solution for Malaysian and Singaporean Businesses
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-4xl mx-auto" data-testid="hero-subtitle">
              Everything you need to dominate online: Professional website + SEO + Digital marketing + Ongoing support. 
              One package, maximum results for your Malaysian and/or Singaporean business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                data-testid="button-get-proposal"
              >
                Get Custom Proposal
              </Button>
              <Button 
                variant="outline"
                className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                data-testid="button-view-process"
              >
                See Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Proven Results for Malaysian and Singaporean Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our complete package delivers measurable results that transform businesses
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div 
                key={index}
                className="text-center bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all"
                data-testid={`metric-${index}`}
              >
                <div className="text-5xl font-bold text-primary mb-4">{item.metric}</div>
                <h3 className="font-semibold text-xl mb-3">{item.label}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included - Interactive */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Everything Included in Your Complete Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four core services working together to maximize your online success
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {packageIncludes.map((item, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border cursor-pointer transition-all ${
                    activeFeature === index 
                      ? 'bg-primary text-primary-foreground border-primary shadow-xl' 
                      : 'bg-card hover:shadow-lg border-border'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  data-testid={`package-feature-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${
                      activeFeature === index ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-xl border border-border">
              <h3 className="text-2xl font-bold mb-6">{packageIncludes[activeFeature].title}</h3>
              <p className="text-muted-foreground text-lg mb-6">
                {packageIncludes[activeFeature].description}
              </p>
              <ul className="space-y-3">
                {packageIncludes[activeFeature].details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="text-white w-3 h-3" />
                    </div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Tailored for Every Type of Malaysian and Singaporean Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our complete package adapts to your specific industry and business model
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {businessTypes.map((business, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all"
                data-testid={`business-type-${index}`}
              >
                <h3 className="text-2xl font-bold mb-4">{business.type}</h3>
                <p className="text-muted-foreground text-lg mb-6">{business.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {business.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="text-white w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 font-semibold">
                    🎯 {business.results}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Tiers */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Complete Package Options
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the level of service that matches your business ambitions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packageTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-card p-8 rounded-xl shadow-lg border transition-all hover:shadow-xl ${
                  tier.popular 
                    ? 'border-primary ring-2 ring-primary/20 scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
                data-testid={`package-tier-${index}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                  <p className="text-muted-foreground mb-4">{tier.description}</p>
                  <p className="text-sm font-medium text-primary mb-2">Contact us for a custom quote</p>
                  <div className="text-sm font-semibold text-blue-600">{tier.timeline}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="text-white w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                  <p className="text-blue-800 dark:text-blue-200 font-semibold text-center text-sm">
                    🎯 Guarantee: {tier.guarantee}
                  </p>
                </div>

                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90' 
                      : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700'
                  } shadow-lg transition-all`}
                  data-testid={`button-package-tier-${index}`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Our Proven 5-Step Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to success - here's how we transform your business in 6 weeks
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-8 bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all"
                data-testid={`process-step-${index}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg">{step.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-lg font-semibold">
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready for Complete Digital Transformation?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Stop managing multiple vendors. Get everything you need in one complete package designed for Malaysian and Singaporean businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary px-8 py-4 text-lg hover:bg-gray-100 shadow-xl transition-all transform hover:scale-105"
              data-testid="button-cta-proposal"
            >
              Get Custom Proposal
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white px-8 py-4 text-lg hover:bg-white/10 transition-all"
              data-testid="button-cta-call"
            >
              Schedule Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}