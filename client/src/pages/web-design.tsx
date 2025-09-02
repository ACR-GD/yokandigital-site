import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Check, Monitor, Smartphone, Zap, Users, TrendingUp, Star } from "lucide-react";
import Header from "@/components/header";

export default function WebDesignPage() {
  const { t } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Your website will look perfect on all devices - desktop, tablet, and mobile. Every Malaysian customer can access your business seamlessly.",
      benefit: "78% of Malaysians and Singaporeans browse on mobile devices"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Loading Speed",
      description: "Optimized for lightning-fast performance. Malaysian and Singaporean internet users expect quick loading times, and we deliver.",
      benefit: "3x faster than average Malaysian and Singaporean websites"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Experience Focus",
      description: "Designed with Malaysian and Singaporean user behavior in mind. Easy navigation that converts visitors into customers.",
      benefit: "2.5x higher conversion rates"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Built with search engines in mind. Your website will rank higher on Google Malaysia and/or Singapore from day one.",
      benefit: "Page 1 Google rankings guaranteed"
    }
  ];

  const packages = [
    {
      name: "Starter Website",
      price: "RM 2,500",
      description: "Perfect for small Malaysian and Singaporean businesses getting started online",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO setup",
        "Contact form integration",
        "1 month support",
        "Google Analytics setup"
      ],
      popular: false
    },
    {
      name: "Business Website",
      price: "RM 5,000",
      description: "Ideal for established Malaysian and Singaporean businesses wanting to grow online",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "E-commerce integration",
        "Blog setup",
        "3 months support",
        "Social media integration",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise Website", 
      price: "RM 10,000",
      description: "Complete solution for large Malaysian and/or Singaporean companies",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced e-commerce",
        "Multi-language support",
        "API integrations",
        "6 months support",
        "Training sessions",
        "Priority maintenance"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Ahmad Rahman",
      company: "Rahman Electronics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our online sales increased by 300% within 3 months of launching our new website. Yokan Digital truly understands Malaysian and Singaporean customers.",
      result: "+300% Online Sales"
    },
    {
      name: "Sarah Lim",
      company: "Lim Fashion Boutique", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The mobile-responsive design was crucial for our business. 80% of our customers now shop directly from their phones.",
      result: "+80% Mobile Traffic"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="gradient-hero py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
                Professional Web Design That Converts Malaysian and Singaporean Visitors
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90" data-testid="hero-subtitle">
                Custom websites designed specifically for Malaysian and Singaporean businesses. Mobile-responsive, fast-loading, and optimized to turn visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                  data-testid="button-get-quote"
                >
                  Get Free Quote
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                  data-testid="button-view-portfolio"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional web design mockups showing responsive Malaysian and/or Singaporean business websites on multiple devices"
                className="rounded-xl shadow-2xl" 
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Why Malaysian and Singaporean Businesses Choose Our Web Design
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every website is crafted with Malaysian and/or Singaporean market insights and proven conversion strategies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-xl border cursor-pointer transition-all ${ 
                    activeFeature === index 
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg' 
                      : 'bg-card hover:shadow-md border-border'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  data-testid={`feature-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${
                      activeFeature === index ? 'bg-white/20' : 'bg-primary/10'
                    }`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-sm opacity-90">{feature.benefit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold">{features[activeFeature].title}</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                {features[activeFeature].description}
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 font-semibold">
                  ✅ {features[activeFeature].benefit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Web Design Packages for Every Malaysian and Singaporean Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transparent pricing with no hidden costs. Choose the package that fits your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-card p-8 rounded-xl shadow-lg border transition-all hover:shadow-xl ${
                  pkg.popular 
                    ? 'border-primary ring-2 ring-primary/20 scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
                data-testid={`package-${index}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="text-white w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90' 
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
                  } shadow-lg transition-all`}
                  data-testid={`button-package-${index}`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Real Results from Malaysian and Singaporean Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our web design transformed these Malaysian and Singaporean businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="testimonial-card bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name}, ${testimonial.company} - Success story of web design services by Yokan Digital Malaysia`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.company}</p>
                    <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
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
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of successful Malaysian and Singaporean businesses. Get a custom quote for your web design project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary px-8 py-4 text-lg hover:bg-gray-100 shadow-xl transition-all transform hover:scale-105"
              data-testid="button-cta-quote"
            >
              Get Free Consultation
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white px-8 py-4 text-lg hover:bg-white/10 transition-all"
              data-testid="button-cta-call"
            >
              Call +60 3-1234 5678
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}