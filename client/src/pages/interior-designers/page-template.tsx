import { useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { PageConfig } from "./config";
import { 
  Target, Layers, TrendingUp, Search, Settings, Image, MapPin, CheckCircle, 
  Map, Layout, Zap, DollarSign, FileText, BookOpen, Instagram, Gift, Mail, 
  AlertTriangle, Building, Globe, Languages, Home, Award, Wrench, Users, 
  Star, Maximize, Briefcase, ArrowRight, Phone, CheckCircle2
} from "lucide-react";

const iconMap: { [key: string]: any } = {
  Target, Layers, TrendingUp, Search, Settings, Image, MapPin, CheckCircle,
  Map, Layout, Zap, DollarSign, FileText, BookOpen, Instagram, Gift, Mail,
  AlertTriangle, Building, Globe, Languages, Home, Award, Wrench, Users,
  Star, Maximize, Briefcase
};

interface PageTemplateProps {
  config: PageConfig;
}

export default function PageTemplate({ config }: PageTemplateProps) {
  const { language } = useLanguage();
  
  useEffect(() => {
    document.title = config.title[language];
    const url = `https://yokandigital.com/${config.slug}`;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', config.metaDescription[language]);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = config.metaDescription[language];
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', config.title[language]);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', config.metaDescription[language]);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }

    const existingHreflangEn = document.querySelector('link[hreflang="en"]');
    const existingHreflangMs = document.querySelector('link[hreflang="ms"]');
    
    if (existingHreflangEn) {
      existingHreflangEn.setAttribute('href', url);
    } else {
      const hreflangEn = document.createElement('link');
      hreflangEn.rel = 'alternate';
      hreflangEn.setAttribute('hreflang', 'en');
      hreflangEn.href = url;
      document.head.appendChild(hreflangEn);
    }
    
    if (existingHreflangMs) {
      existingHreflangMs.setAttribute('href', url);
    } else {
      const hreflangMs = document.createElement('link');
      hreflangMs.rel = 'alternate';
      hreflangMs.setAttribute('hreflang', 'ms');
      hreflangMs.href = url;
      document.head.appendChild(hreflangMs);
    }

    return () => {
      const hreflangEnCleanup = document.querySelector('link[hreflang="en"]');
      const hreflangMsCleanup = document.querySelector('link[hreflang="ms"]');
      if (hreflangEnCleanup) hreflangEnCleanup.remove();
      if (hreflangMsCleanup) hreflangMsCleanup.remove();
    };
  }, [language, config]);

  const getCategoryLabel = () => {
    const labels = {
      pillar: { en: 'Complete Guide', ms: 'Panduan Lengkap' },
      service: { en: 'Our Service', ms: 'Perkhidmatan Kami' },
      location: { en: 'Service Area', ms: 'Kawasan Perkhidmatan' },
      industry: { en: 'Industry Solution', ms: 'Penyelesaian Industri' }
    };
    return labels[config.category][language];
  };

  const getCategoryColor = () => {
    const colors = {
      pillar: 'from-purple-500 to-pink-500',
      service: 'from-blue-500 to-cyan-500',
      location: 'from-green-500 to-emerald-500',
      industry: 'from-orange-500 to-amber-500'
    };
    return colors[config.category];
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${getCategoryColor()} px-4 py-2 rounded-full mb-6`}>
            <span className="text-sm font-medium text-white">
              {getCategoryLabel()}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {config.heroTitle[language]}
          </h1>
          
          <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-10">
            {config.heroSubtitle[language]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100 font-semibold px-8 py-6 text-lg" data-testid="button-hero-consultation">
                {config.ctaText[language]}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+60123456789" data-testid="link-hero-call">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                {language === 'en' ? 'Call Us Now' : 'Hubungi Kami Sekarang'}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.sections.map((section, index) => {
              const IconComponent = (section.icon && iconMap[section.icon]) ? iconMap[section.icon] : Target;
              return (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${getCategoryColor()} mb-6`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title[language]}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.content[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {language === 'en' ? 'What We Offer' : 'Apa Yang Kami Tawarkan'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {language === 'en' 
                ? 'Everything you need to attract quality clients and grow your interior design business'
                : 'Semua yang anda perlukan untuk menarik klien berkualiti dan mengembangkan perniagaan reka bentuk dalaman anda'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {config.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${getCategoryColor()} flex items-center justify-center`}>
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {feature[language]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'en' 
              ? 'Ready to Attract More Quality Clients?'
              : 'Bersedia untuk Menarik Lebih Banyak Klien Berkualiti?'}
          </h2>
          <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Book a free consultation and discover how we can help your interior design business grow.'
              : 'Tempah konsultasi percuma dan temui bagaimana kami boleh membantu perniagaan reka bentuk dalaman anda berkembang.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100 font-semibold px-8 py-6 text-lg" data-testid="button-cta-consultation">
                {language === 'en' ? 'Book Free Consultation' : 'Tempah Konsultasi Percuma'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" data-testid="link-cta-whatsapp">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg">
                {language === 'en' ? 'WhatsApp Us' : 'WhatsApp Kami'}
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
