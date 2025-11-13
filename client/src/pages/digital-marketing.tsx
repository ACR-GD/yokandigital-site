import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Check, Facebook, Instagram, MessageCircle, Mail, TrendingUp, Target, Users, DollarSign } from "lucide-react";
import Header from "@/components/header";

export default function DigitalMarketingPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const marketingChannels = [
    {
      icon: <Facebook className="w-8 h-8" />,
      name: "Facebook Marketing",
      description: "Reach 32 million Malaysian Facebook users with targeted campaigns that convert.",
      audience: "32M+ Malaysians and Singaporeans",
      avgROI: "400%",
      features: ["Targeted advertising", "Content creation", "Community management", "Analytics & reporting"]
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      name: "Instagram Marketing", 
      description: "Engage with visual content that captures Malaysian consumers' attention.",
      audience: "13M+ Malaysians and Singaporeans",
      avgROI: "350%",
      features: ["Stories & Reels", "Influencer partnerships", "Product tagging", "Brand storytelling"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      name: "WhatsApp Business",
      description: "Connect directly with Malaysian customers through their preferred messaging platform.",
      audience: "25M+ Malaysians and Singaporeans",
      avgROI: "500%",
      features: ["Business API", "Automated responses", "Catalog integration", "Customer support"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      name: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns.",
      audience: "High Intent",
      avgROI: "3800%",
      features: ["Automated sequences", "Segmentation", "A/B testing", "Performance tracking"]
    }
  ];

  const packages = [
    {
      name: "Starter Marketing",
      description: "Perfect for small Malaysian and Singaporean businesses starting digital marketing",
      channels: ["Facebook", "Instagram"],
      features: [
        "2 social media platforms",
        "8 posts per month per platform",
        "Basic ad campaigns with ad spend included",
        "Monthly performance reports",
        "Community management",
        "Content creation"
      ],
      guarantee: "20% increase in engagement"
    },
    {
      name: "Growth Marketing",
      description: "Complete digital marketing for growing Malaysian and Singaporean businesses",
      channels: ["Facebook", "Instagram", "WhatsApp", "Email"],
      features: [
        "4 marketing channels",
        "16 posts per month",
        "Advanced ad campaigns with ad spend included",
        "Email marketing automation",
        "WhatsApp Business setup",
        "Lead generation campaigns",
        "Conversion tracking",
        "Weekly reports"
      ],
      guarantee: "50% increase in qualified leads",
      popular: true
    },
    {
      name: "Enterprise Marketing",
      description: "Full-scale digital marketing domination",
      channels: ["All Platforms", "Custom Strategy"],
      features: [
        "All marketing channels",
        "Unlimited content creation",
        "Premium ad campaigns with ad spend included",
        "Influencer partnerships",
        "Video content production",
        "Advanced analytics",
        "Dedicated account manager",
        "Daily monitoring"
      ],
      guarantee: "100% increase in ROI"
    }
  ];

  const caseStudies = [
    {
      company: "Malaysian Fashion Boutique",
      industry: "Retail Fashion",
      challenge: "Low online sales despite having quality products",
      strategy: "Instagram & Facebook marketing with influencer partnerships",
      results: {
        revenue: "+450% online revenue",
        followers: "+1,200% social media following",
        engagement: "+800% engagement rate",
        roi: "650% ROAS"
      },
      timeframe: "6 months",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      company: "KL Restaurant Chain",
      industry: "Food & Beverage", 
      challenge: "Competing with international food delivery apps",
      strategy: "WhatsApp ordering system + Facebook targeted ads",
      results: {
        orders: "+300% direct orders",
        customers: "+250% repeat customers", 
        savings: "40% less commission fees",
        roi: "520% ROAS"
      },
      timeframe: "4 months",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ];

  const malaysianInsights = [
    {
      stat: "26M+",
      label: "Malaysian Facebook Users",
      insight: "98% of internet users in Malaysia and Singapore use Facebook"
    },
    {
      stat: "25M+", 
      label: "WhatsApp Users in Malaysia and Singapore",
      insight: "Most preferred messaging platform for business"
    },
    {
      stat: "87%",
      label: "Mobile Internet Usage",
      insight: "Malaysians and Singaporeans primarily browse on mobile devices"
    },
    {
      stat: "65%",
      label: "Online Shopping Growth",
      insight: "E-commerce boom accelerated by 5 years"
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
                Digital Marketing That Drives Results for Malaysian and Singaporean Businesses
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90" data-testid="hero-subtitle">
                Reach 32 million Malaysians and Singaporeans across Facebook, Instagram, WhatsApp, and email. Our data-driven campaigns turn clicks into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                  data-testid="button-get-strategy"
                >
                  Get Marketing Strategy
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                  data-testid="button-view-results"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Digital marketing analytics dashboard showing successful Malaysian and Singaporean business campaigns with increasing ROI and engagement metrics"
                className="rounded-xl shadow-2xl" 
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Malaysian and Singaporean Market Insights */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Malaysian and Singaporean Digital Marketing Landscape
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We understand Malaysian and Singaporean consumer behavior and leverage local insights for maximum impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {malaysianInsights.map((item, index) => (
              <div 
                key={index}
                className="text-center bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all"
                data-testid={`insight-${index}`}
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <h3 className="font-semibold text-lg mb-3">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.insight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Multi-Channel Marketing for Maximum Reach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We manage your presence across all major platforms where Malaysians and Singaporeans spend their time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingChannels.map((channel, index) => (
              <div 
                key={index}
                className={`cursor-pointer transition-all ${
                  activeTab === index 
                    ? 'bg-primary text-primary-foreground shadow-xl scale-105' 
                    : 'bg-card hover:shadow-lg'
                } p-6 rounded-xl border border-border`}
                onClick={() => setActiveTab(index)}
                data-testid={`channel-${index}`}
              >
                <div className={`p-3 rounded-lg mb-4 ${
                  activeTab === index ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  {channel.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{channel.name}</h3>
                <div className="text-sm opacity-90 mb-2">{channel.audience}</div>
                <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                  activeTab === index ? 'bg-white/20' : 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                }`}>
                  {channel.avgROI} Avg ROI
                </div>
              </div>
            ))}
          </div>

          {/* Active Channel Details */}
          <div className="mt-12 bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{marketingChannels[activeTab].name}</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  {marketingChannels[activeTab].description}
                </p>
                <ul className="space-y-3">
                  {marketingChannels[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="text-white w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {marketingChannels[activeTab].audience}
                  </div>
                  <p className="text-muted-foreground mb-4">Target Audience</p>
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {marketingChannels[activeTab].avgROI}
                  </div>
                  <p className="text-muted-foreground">Average ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Packages */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Digital Marketing Packages That Deliver Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the package that fits your business goals. All packages include ad spend and guaranteed results.
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
                data-testid={`marketing-package-${index}`}
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
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <p className="text-sm font-medium text-primary">Contact us for a custom quote</p>
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

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6">
                  <p className="text-green-800 dark:text-green-200 font-semibold text-center text-sm">
                    🎯 Guarantee: {pkg.guarantee}
                  </p>
                </div>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90' 
                      : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                  } shadow-lg transition-all`}
                  data-testid={`button-marketing-package-${index}`}
                >
                  Start Campaign
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Malaysian and Singaporean Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from real Malaysian and Singaporean businesses using our digital marketing strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl shadow-lg border border-border hover:shadow-xl transition-all overflow-hidden"
                data-testid={`case-study-${index}`}
              >
                <img 
                  src={study.image}
                  alt={`${study.company} digital marketing success story - ${study.industry} business growth through Yokan Digital Malaysia`}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <p className="text-primary font-semibold">{study.industry}</p>
                    <p className="text-muted-foreground text-sm mt-1">Results achieved in {study.timeframe}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-lg mb-2">Strategy:</h4>
                    <p className="text-muted-foreground">{study.strategy}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Results:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.results).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
                          <div className="text-lg font-bold text-green-600">{value}</div>
                          <div className="text-xs text-green-800 dark:text-green-200 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
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
            Ready to Reach 32 Million Malaysians and Singaporeans?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a custom digital marketing strategy designed specifically for your Malaysian and/or Singaporean business. Free consultation included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary px-8 py-4 text-lg hover:bg-gray-100 shadow-xl transition-all transform hover:scale-105"
              data-testid="button-cta-strategy"
            >
              Get Marketing Strategy
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white px-8 py-4 text-lg hover:bg-white/10 transition-all"
              data-testid="button-cta-consultation"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}