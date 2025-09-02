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
