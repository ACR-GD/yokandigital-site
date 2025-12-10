import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function OfferBanner() {
  const { language } = useLanguage();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={scrollToContact}
      className="w-full block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white py-3 px-4 overflow-hidden relative hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="w-5 h-5 flex-shrink-0" />
          <span className="flex items-center gap-2 font-semibold text-sm sm:text-base text-center">
            <span>
              {language === 'en'
                ? '✨ Free Website Review for Interior Designers in Selangor & KL - Book Your Call Today!'
                : '✨ Semakan Laman Web Percuma untuk Pereka Dalaman di Selangor & KL - Tempah Panggilan Hari Ini!'}
            </span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </span>
        </div>
      </div>
    </button>
  );
}
