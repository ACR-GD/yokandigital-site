import { useLanguage } from "@/hooks/use-language";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
              {t('hero.title')}
            </h1>
            <p className="text-xl mb-8 text-primary-foreground/90" data-testid="hero-subtitle">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                data-testid="button-start-project"
              >
                {t('hero.startProject')}
              </button>
              <button 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-xl shadow-white/20 transition-all transform hover:scale-105"
                data-testid="button-view-work"
              >
                {t('hero.viewWork')}
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://i.postimg.cc/WtRG9F1Q/Generated-Image-December-03-2025-6-50AM.jpg" 
              alt="Successful Malaysian business team collaboration - professional web design and digital marketing services by Yokan Digital in Kuala Lumpur" 
              className="rounded-xl shadow-2xl" 
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
