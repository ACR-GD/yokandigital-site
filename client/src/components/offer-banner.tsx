import { Gift, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";

export default function OfferBanner() {
  const { language } = useLanguage();

  return (
    <Link href="/labuan-digital-marketing">
      <a className="block bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-3 px-4 overflow-hidden relative hover:from-orange-700 hover:via-red-700 hover:to-pink-700 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 animate-pulse">
            <Gift className="w-5 h-5 flex-shrink-0" />
            <span className="flex items-center gap-2 font-semibold text-sm sm:text-base text-center">
              <span>
                {language === 'en'
                  ? '🎁 FREE Website + AI Chatbot for Labuan Businesses (No Website Yet) - Limited Time!'
                  : '🎁 Laman Web PERCUMA + Chatbot AI untuk Perniagaan Labuan (Belum Ada Website) - Tawaran Terhad!'}
              </span>
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}
