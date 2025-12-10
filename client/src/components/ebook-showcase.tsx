import { Lightbulb, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

export default function EbookShowcase() {
  const { language } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = language === 'en' ? [
    "Portfolio that showcases your best work",
    "Get found when homeowners search online", 
    "Turn website visitors into consultations",
    "Stop wasting time on tire-kickers",
    "Build credibility with quality clients",
    "Consistent leads beyond just referrals"
  ] : [
    "Portfolio yang mempamerkan kerja terbaik anda",
    "Ditemui apabila pemilik rumah mencari dalam talian", 
    "Tukar pelawat laman web kepada konsultasi",
    "Berhenti bazir masa dengan prospek tidak serius",
    "Bina kredibiliti dengan klien berkualiti",
    "Prospek konsisten selain rujukan sahaja"
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 px-4 py-2 rounded-full mb-6 border border-purple-200 dark:border-purple-800">
              <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
                {language === 'en' ? 'Why Interior Designers Choose Us' : 'Mengapa Pereka Dalaman Memilih Kami'}
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'en' 
                ? 'We Speak Your Language' 
                : 'Kami Bercakap Bahasa Anda'}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {language === 'en'
                ? "Most agencies don't understand interior design. We do. We know the difference between a mood board and a floor plan, and we know what your ideal client is looking for online."
                : "Kebanyakan agensi tidak faham reka bentuk dalaman. Kami faham. Kami tahu perbezaan antara mood board dan pelan lantai, dan kami tahu apa yang klien ideal anda cari dalam talian."}
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg"
            >
              {language === 'en' ? 'Get Your Free Website Review' : 'Dapatkan Semakan Laman Web Percuma'}
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt={language === 'en' ? 'Modern interior design showcase - websites for interior designers' : 'Pameran reka bentuk dalaman moden - laman web untuk pereka dalaman'}
                className="w-full rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
