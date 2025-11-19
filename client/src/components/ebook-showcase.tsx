import { BookOpen, Download, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import ebookCover from "@assets/ebook-cover.png";

export default function EbookShowcase() {
  const { language } = useLanguage();

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      en: "Complete SEO strategies for Malaysia",
      ms: "Strategi SEO lengkap untuk Malaysia"
    },
    {
      en: "Social media marketing tactics",
      ms: "Taktik pemasaran media sosial"
    },
    {
      en: "Paid advertising best practices",
      ms: "Amalan terbaik iklan berbayar"
    },
    {
      en: "Email marketing fundamentals",
      ms: "Asas pemasaran e-mel"
    },
    {
      en: "Web design principles",
      ms: "Prinsip reka bentuk web"
    },
    {
      en: "Real-world case studies",
      ms: "Kajian kes dunia sebenar"
    }
  ];

  return (
    <section id="ebook" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-800">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {language === 'en' ? 'Free Digital Marketing Guide' : 'Panduan Pemasaran Digital Percuma'}
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' 
              ? 'Get Your FREE Ebook Today!' 
              : 'Dapatkan Ebook PERCUMA Hari Ini!'}
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'en'
              ? 'A comprehensive guide to digital marketing in Malaysia, written specifically for Labuan businesses'
              : 'Panduan komprehensif untuk pemasaran digital di Malaysia, ditulis khusus untuk perniagaan Labuan'}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Ebook Cover */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <img 
                src={ebookCover} 
                alt={language === 'en' ? 'Digital Marketing in Malaysia for Labuan Businesses - Free Ebook' : 'Pemasaran Digital di Malaysia untuk Perniagaan Labuan - Ebook Percuma'}
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
                <p className="font-bold text-lg">
                  {language === 'en' ? '100% FREE' : '100% PERCUMA'}
                </p>
              </div>
            </div>
          </div>

          {/* Ebook Details */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' 
                ? 'What You\'ll Learn:' 
                : 'Apa Yang Anda Akan Pelajari:'}
            </h3>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {language === 'en' ? feature.en : feature.ms}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {language === 'en' 
                    ? 'Instant Download' 
                    : 'Muat Turun Segera'}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {language === 'en'
                  ? 'Subscribe to our newsletter and receive your free digital marketing guide instantly in your inbox!'
                  : 'Langgan surat berita kami dan terima panduan pemasaran digital percuma anda serta-merta di peti mel anda!'}
              </p>
              <Button 
                onClick={scrollToNewsletter}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-6 text-lg"
                data-testid="button-get-free-ebook"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                {language === 'en' ? 'Get Your Free Ebook' : 'Dapatkan Ebook Percuma Anda'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              {language === 'en'
                ? '🔒 No credit card required. Unsubscribe anytime.'
                : '🔒 Tiada kad kredit diperlukan. Berhenti langgan bila-bila masa.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
