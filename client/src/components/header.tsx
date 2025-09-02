import { Rocket, ChevronDown, Monitor, Search, TrendingUp, Package } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate to home first
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicePages = [
    {
      title: "Web Design & Development",
      description: "Custom websites that convert",
      href: "/services/web-design",
      icon: <Monitor className="w-4 h-4" />
    },
    {
      title: "SEO Optimization",
      description: "Dominate Google search",
      href: "/services/seo",
      icon: <Search className="w-4 h-4" />
    },
    {
      title: "Digital Marketing",
      description: "Multi-channel campaigns",
      href: "/services/digital-marketing",
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      title: "Complete Package",
      description: "Everything you need",
      href: "/services/complete-package",
      icon: <Package className="w-4 h-4" />
    }
  ];

  return (
    <header className="bg-gradient-to-r from-white to-purple-50/50 dark:from-gray-900 dark:to-purple-950/20 shadow-sm border-b border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25 rounded-lg flex items-center justify-center">
              <Rocket className="text-white text-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Yokan Digital</h1>
              <p className="text-xs text-muted-foreground">{t('header.tagline')}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button 
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-services"
              >
                {t('nav.services')}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showServicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-border z-50">
                  <div className="p-6 space-y-4">
                    <div className="text-sm font-semibold text-muted-foreground mb-4">Our Services</div>
                    {servicePages.map((service, index) => (
                      <Link key={index} href={service.href}>
                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors cursor-pointer group">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50 transition-colors">
                            {service.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-foreground">{service.title}</div>
                            <div className="text-sm text-muted-foreground">{service.description}</div>
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="border-t border-border pt-4">
                      <button 
                        onClick={() => {
                          setShowServicesDropdown(false);
                          scrollToSection('services');
                        }}
                        className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                      >
                        View all services overview →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-pricing"
            >
              {t('nav.pricing')}
            </button>
            <button 
              onClick={() => scrollToSection('tools')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-tools"
            >
              {t('nav.tools')}
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-portfolio"
            >
              {t('nav.portfolio')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-contact"
            >
              {t('nav.contact')}
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="language-toggle flex bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-lg p-1 border border-purple-200 dark:border-purple-800">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-white'
                }`}
                data-testid="lang-en"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ms')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                  language === 'ms' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-white'
                }`}
                data-testid="lang-ms"
              >
                MS
              </button>
            </div>
            
            <button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2.5 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 transition-all"
              data-testid="button-get-started"
            >
              {t('header.getStarted')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
