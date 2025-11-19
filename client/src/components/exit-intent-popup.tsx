import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, BookOpen, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/hooks/use-language";
import ebookCover from "@assets/ebook-cover.png";

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
        title: language === 'en' ? "Success! 🎉" : "Berjaya! 🎉",
        description: language === 'en' 
          ? "Check your email for your free digital marketing guide!"
          : "Semak e-mel anda untuk panduan pemasaran digital percuma anda!",
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
    // Check if popup has already been shown this session
    const alreadyShown = sessionStorage.getItem('exitIntentShown');
    if (alreadyShown) {
      setHasShown(true);
      return;
    }

    let exitIntentTriggered = false;
    let scrollThreshold = 0;
    let lastScrollTime = Date.now();

    // Desktop: Mouse leave detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (exitIntentTriggered || hasShown) return;
      
      // Detect when mouse moves to top of viewport (leaving page)
      if (e.clientY <= 0) {
        exitIntentTriggered = true;
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Mobile: Scroll behavior detection
    const handleScroll = () => {
      if (exitIntentTriggered || hasShown) return;

      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const currentTime = Date.now();
      
      // Trigger if user has scrolled at least 50% and shows intent to leave (scroll up quickly)
      if (scrollPercentage > 50) {
        if (scrollThreshold > window.scrollY + 100) {
          // User scrolled up significantly (potential exit)
          const timeSinceLastScroll = currentTime - lastScrollTime;
          if (timeSinceLastScroll < 500) { // Quick scroll up
            exitIntentTriggered = true;
            setIsVisible(true);
            setHasShown(true);
          }
        }
      }
      
      scrollThreshold = window.scrollY;
      lastScrollTime = currentTime;
    };

    // Mobile: Back button detection (beforeunload)
    const handleBeforeUnload = () => {
      if (exitIntentTriggered || hasShown) return;
      
      // Only show on mobile
      if (window.innerWidth <= 768) {
        exitIntentTriggered = true;
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add delay before activating (don't show immediately)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('beforeunload', handleBeforeUnload);
    }, 5000); // Wait 5 seconds before activating

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
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          data-testid="button-close-exit-popup"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Left side - Ebook visual */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-2xl"></div>
              <img 
                src={ebookCover} 
                alt="Free Ebook Cover"
                className="relative w-full max-w-sm rounded-xl shadow-2xl"
              />
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-orange-500 to-red-500 text-white px-5 py-2 rounded-full shadow-lg transform rotate-12">
                <div className="flex items-center gap-2">
                  <Gift className="w-4 h-4" />
                  <span className="font-bold">
                    {language === 'en' ? 'FREE!' : 'PERCUMA!'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form and CTA */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-4">
                <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
                  {language === 'en' ? 'Wait! Don\'t Leave Empty-Handed' : 'Tunggu! Jangan Pergi Dengan Tangan Kosong'}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {language === 'en' 
                  ? 'Get Your FREE Digital Marketing Guide!' 
                  : 'Dapatkan Panduan Pemasaran Digital PERCUMA!'}
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                {language === 'en'
                  ? 'Before you go, grab our comprehensive guide written specifically for Malaysian businesses. Learn SEO, social media marketing, paid ads, and more!'
                  : 'Sebelum anda pergi, dapatkan panduan komprehensif kami yang ditulis khusus untuk perniagaan Malaysia. Belajar SEO, pemasaran media sosial, iklan berbayar, dan banyak lagi!'}
              </p>

              <ul className="space-y-2 mb-8">
                {[
                  { en: '50+ pages of actionable insights', ms: '50+ halaman strategi praktikal' },
                  { en: 'Malaysia-specific strategies', ms: 'Strategi khusus Malaysia' },
                  { en: 'Real case studies & examples', ms: 'Kajian kes & contoh sebenar' },
                  { en: 'Instant download to your email', ms: 'Muat turun terus ke e-mel anda' }
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
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
                disabled={newsletterMutation.isPending}
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-lg"
                data-testid="button-submit-exit-popup"
              >
                {newsletterMutation.isPending ? (
                  language === 'en' ? 'Sending...' : 'Menghantar...'
                ) : (
                  <>
                    <BookOpen className="w-5 h-5 mr-2" />
                    {language === 'en' ? 'Send Me The Free Guide' : 'Hantar Panduan Percuma'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              {language === 'en'
                ? '🔒 We respect your privacy. No spam, unsubscribe anytime.'
                : '🔒 Kami menghormati privasi anda. Tiada spam, berhenti langgan bila-bila masa.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
