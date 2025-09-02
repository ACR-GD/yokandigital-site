import { Rocket } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-card shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Rocket className="text-primary-foreground text-lg" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Yokan Digital</h1>
              <p className="text-xs text-muted-foreground">{t('header.tagline')}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-services"
            >
              {t('nav.services')}
            </button>
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
            <div className="language-toggle flex bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'en' 
                    ? 'bg-card text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid="lang-en"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ms')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                  language === 'ms' 
                    ? 'bg-card text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                data-testid="lang-ms"
              >
                MS
              </button>
            </div>
            
            <button 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
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
