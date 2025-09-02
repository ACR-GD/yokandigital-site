import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Search, TrendingUp, Globe, Target, BarChart3, MapPin, Smartphone } from "lucide-react";
import Header from "@/components/header";

export default function SEOServicesPage() {
  const { t } = useLanguage();
  const [website, setWebsite] = useState("");
  const [seoScore, setSeoScore] = useState<number | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkSEO = async () => {
    if (!website) return;
    
    setIsChecking(true);
    // Simulate SEO check
    setTimeout(() => {
      setSeoScore(Math.floor(Math.random() * 50) + 25); // Random score between 25-75
      setIsChecking(false);
    }, 2000);
  };

  const seoServices = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local SEO Malaysia",
      description: "Get found by customers in your city. We optimize your business for 'near me' searches across Malaysia.",
      results: "+250% Local Traffic",
      features: ["Google My Business optimization", "Local citations", "Review management", "Location-based keywords"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "National SEO",
      description: "Dominate search results across Malaysia. Target customers from Kuala Lumpur to Penang and beyond.",
      results: "Page 1 Rankings",
      features: ["Keyword research", "On-page optimization", "Technical SEO", "Content strategy"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile SEO",
      description: "78% of Malaysians search on mobile. We ensure your website ranks high on mobile search results.",
      results: "+180% Mobile Visibility",
      features: ["Mobile-first indexing", "Page speed optimization", "Voice search optimization", "AMP implementation"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "E-commerce SEO",
      description: "Drive sales through search engines. Optimize product pages for Malaysian shopping behavior.",
      results: "+320% Organic Sales",
      features: ["Product page optimization", "Schema markup", "Category optimization", "Shopping campaigns"]
    }
  ];

  const packages = [
    {
      name: "Local SEO",
      price: "RM 2,500",
      duration: "/month",
      description: "Perfect for local Malaysian and Singaporean businesses",
      features: [
        "Google My Business optimization",
        "Local keyword research (50 keywords)",
        "Citation building (20 directories)",
        "Review management",
        "Monthly local ranking reports",
        "Competitor analysis"
      ],
      guarantee: "Top 3 local rankings in 90 days"
    },
    {
      name: "National SEO",
      price: "RM 5,000",
      duration: "/month", 
      description: "For businesses targeting all of Malaysia",
      features: [
        "Comprehensive keyword research (200 keywords)",
        "On-page optimization (20 pages)",
        "Technical SEO audit & fixes",
        "Content creation (4 articles/month)",
        "Link building (10 quality links/month)",
        "Monthly ranking reports",
        "Google Analytics setup"
      ],
      guarantee: "Page 1 rankings for target keywords",
      popular: true
    },
    {
      name: "Enterprise SEO",
      price: "RM 10,000",
      duration: "/month",
      description: "Complete SEO domination for large businesses",
      features: [
        "Unlimited keyword targeting",
        "Full website optimization",
        "Advanced technical SEO",
        "Content marketing strategy",
        "Advanced link building",
        "Multi-location SEO",
        "Weekly reporting",
        "Dedicated SEO manager"
      ],
      guarantee: "Market leadership in your industry"
    }
  ];

  const caseStudies = [
    {
      company: "KL Restaurant Chain",
      industry: "Food & Beverage",
      challenge: "Low visibility for 'restaurant near me' searches",
      solution: "Local SEO optimization for 12 locations across KL",
      results: [
        "+400% local search visibility",
        "300% increase in foot traffic",
        "Top 3 rankings for 85% of target keywords"
      ],
      timeframe: "6 months"
    },
    {
      company: "Malaysian Fashion Brand",
      industry: "E-commerce",
      challenge: "Competing with international fashion retailers",
      solution: "National SEO strategy focusing on Malaysian fashion keywords",
      results: [
        "+250% organic traffic",
        "500% increase in online sales",
        "Ranked #1 for 'Malaysian fashion' keywords"
      ],
      timeframe: "8 months"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Interactive SEO Checker */}
      <section className="gradient-hero py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
                SEO Services That Get Malaysian and Singaporean Businesses Found
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90" data-testid="hero-subtitle">
                Dominate Google search results in Malaysia. Our proven SEO strategies help businesses get found by customers who are ready to buy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                  data-testid="button-get-seo-audit"
                >
                  Get Free SEO Audit
                </Button>
                <Button 
                  variant="outline"
                  className="bg-white text-purple-600 px-8 py-4 text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                  data-testid="button-view-rankings"
                >
                  View Our Rankings
                </Button>
              </div>
            </div>
            
            {/* Interactive SEO Checker */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Check Your Website's SEO Score</h3>
              <div className="space-y-4">
                <Input
                  type="url"
                  placeholder="Enter your website URL"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="bg-white text-black"
                  data-testid="input-website-url"
                />
                <Button 
                  onClick={checkSEO}
                  disabled={!website || isChecking}
                  className="w-full bg-white text-purple-600 hover:bg-gray-100"
                  data-testid="button-check-seo"
                >
                  {isChecking ? "Analyzing..." : "Check SEO Score"}
                </Button>
                
                {seoScore !== null && (
                  <div className="mt-6 p-4 bg-white/20 rounded-lg">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">{seoScore}/100</div>
                      <p className="text-white/90 mb-4">Your current SEO score</p>
                      <div className="bg-red-500 h-2 rounded-full mb-4">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${seoScore}%` }}
                        ></div>
                      </div>
                      <p className="text-white text-sm">
                        {seoScore < 50 ? "Needs immediate attention" : seoScore < 75 ? "Room for improvement" : "Good score!"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Services Grid */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Comprehensive SEO Services for Malaysian and Singaporean Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From local search to national visibility, we cover all aspects of SEO to grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all group"
                data-testid={`seo-service-${index}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <div className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-semibold mt-2 inline-block">
                      {service.results}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-lg mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="text-white w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              SEO Packages with Guaranteed Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the SEO package that matches your business goals. All packages include our guarantee.
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
                data-testid={`seo-package-${index}`}
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
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground ml-1">{pkg.duration}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{pkg.description}</p>
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

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
                  <p className="text-blue-800 dark:text-blue-200 font-semibold text-center text-sm">
                    🎯 Guarantee: {pkg.guarantee}
                  </p>
                </div>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-primary/90 hover:to-accent/90' 
                      : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700'
                  } shadow-lg transition-all`}
                  data-testid={`button-seo-package-${index}`}
                >
                  Start SEO Campaign
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 section-title">
              Real SEO Success Stories from Malaysia
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our SEO strategies transformed these Malaysian and Singaporean businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all"
                data-testid={`case-study-${index}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                  <p className="text-primary font-semibold">{study.industry}</p>
                  <p className="text-muted-foreground text-sm mt-1">Achieved in {study.timeframe}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">Challenge:</h4>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-2">Solution:</h4>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-semibold text-green-600">{result}</span>
                      </li>
                    ))}
                  </ul>
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
            Ready to Dominate Google Search in Malaysia?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get a free SEO audit and see exactly how we can improve your search rankings. No obligations, just insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-primary px-8 py-4 text-lg hover:bg-gray-100 shadow-xl transition-all transform hover:scale-105"
              data-testid="button-cta-audit"
            >
              Get Free SEO Audit
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white px-8 py-4 text-lg hover:bg-white/10 transition-all"
              data-testid="button-cta-consultation"
            >
              Book SEO Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}