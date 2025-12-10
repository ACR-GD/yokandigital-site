import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, BookOpen, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/hooks/use-language";

export default function ExitIntentPopup() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const newsletterMutation = useMutation({
    mutationFn: async (data: { email: string; name?: string }) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: language === 'en' ? "Your guide is on the way! 🎨" : "Panduan anda sedang dalam perjalanan! 🎨",
        description: language === 'en' 
          ? "Check your email for the Interior Design Marketing Guide!"
          : "Semak e-mel anda untuk Panduan Pemasaran Reka Bentuk Dalaman!",
      });
      setFormData({ name: "", email: "" });
      setIsVisible(false);
      sessionStorage.setItem('exitIntentShown', 'true');
    },
    onError: () => {
      toast({
        title: language === 'en' ? "Error" : "Ralat",
        description: language === 'en'
          ? "Failed to subscribe. Please try again."
          : "Gagal melanggan. Sila cuba lagi.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email.trim()) {
      newsletterMutation.mutate({
        email: formData.email,
        ...(formData.name && { name: formData.name }),
      });
    }
  };

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    let exitIntentTriggered = false;
    let scrollThreshold = 0;
    let lastScrollTime = Date.now();

    const handleMouseLeave = (e: MouseEvent) => {
      if (exitIntentTriggered || hasShown) return;
      if (e.clientY <= 0) {
        exitIntentTriggered = true;
        setIsVisible(true);
        setHasShown(true);
      }
    };

    const handleScroll = () => {
      if (exitIntentTriggered || hasShown) return;
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const currentTime = Date.now();
      
      if (scrollPercentage > 50) {
        if (scrollThreshold > window.scrollY + 100) {
          const timeSinceLastScroll = currentTime - lastScrollTime;
          if (timeSinceLastScroll < 500) {
            exitIntentTriggered = true;
            setIsVisible(true);
            setHasShown(true);
          }
        }
      }
      
      scrollThreshold = window.scrollY;
      lastScrollTime = currentTime;
    };

    const handleBeforeUnload = () => {
      if (exitIntentTriggered || hasShown) return;
      if (window.innerWidth <= 768) {
        exitIntentTriggered = true;
        setIsVisible(true);
        setHasShown(true);
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('beforeunload', handleBeforeUnload);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitIntentShown', 'true');
  };

  if (!isVisible) return null;

  const content = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          data-testid="button-close-exit-popup"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Interior Design Marketing Guide"
                className="relative w-full max-w-sm rounded-xl shadow-2xl"
              />
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-purple-500 to-pink-500 text-white px-5 py-2 rounded-full shadow-lg transform rotate-12">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  <span className="font-bold">
                    {language === 'en' ? 'FREE!' : 'PERCUMA!'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full mb-4">
                <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm font-medium text-purple-800 dark:text-purple-300">
                  {language === 'en' ? 'Wait! Free Guide for Interior Designers' : 'Tunggu! Panduan Percuma untuk Pereka Dalaman'}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'en' 
                  ? 'Get More Quality Clients Online' 
                  : 'Dapatkan Lebih Banyak Klien Berkualiti Dalam Talian'}
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {language === 'en'
                  ? 'Before you go, grab our comprehensive guide written specifically for interior designers in Malaysia. Learn how to attract quality clients and grow your design studio!'
                  : 'Sebelum anda pergi, dapatkan panduan komprehensif kami yang ditulis khusus untuk pereka dalaman di Malaysia. Belajar cara menarik klien berkualiti dan mengembangkan studio reka bentuk anda!'}
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  { en: 'SEO strategies for interior designers', ms: 'Strategi SEO untuk pereka dalaman' },
                  { en: 'Social media that attracts clients', ms: 'Media sosial yang menarik klien' },
                  { en: 'Video marketing for your portfolio', ms: 'Pemasaran video untuk portfolio anda' },
                  { en: 'Paid ads that deliver real leads', ms: 'Iklan berbayar yang menghasilkan prospek sebenar' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span>{language === 'en' ? item.en : item.ms}</span>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder={language === 'en' ? 'Your Name (Optional)' : 'Nama Anda (Pilihan)'}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
                data-testid="input-exit-popup-name"
              />
              
              <Input
                type="email"
                placeholder={language === 'en' ? 'Your Email Address *' : 'Alamat E-mel Anda *'}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
                data-testid="input-exit-popup-email"
              />
              
              <Button
                type="submit"
                disabled={newsletterMutation.isPending || !formData.email.trim()}
                className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg font-semibold"
                data-testid="button-exit-popup-submit"
              >
                {newsletterMutation.isPending ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    {language === 'en' ? 'Sending...' : 'Menghantar...'}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {language === 'en' ? 'Get My Free Guide' : 'Dapatkan Panduan Percuma Saya'}
                    <ArrowRight className="w-5 h-5" />
                  </span>
                )}
              </Button>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
              {language === 'en'
                ? '🔒 We respect your privacy. Unsubscribe anytime.'
                : '🔒 Kami menghormati privasi anda. Berhenti langgan bila-bila masa.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
