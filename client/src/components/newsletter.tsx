import { useState } from "react";
import { Mail, CheckCircle2, Loader2, Gift, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import ebookCover from "@assets/Generated_Image_December_10,_2025_-_2_39PM_1765349333056.jpeg";

export default function Newsletter() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const subscribeMutation = useMutation({
    mutationFn: async (data: { email: string; name?: string }) => {
      return apiRequest('POST', '/api/newsletter/subscribe', data);
    },
    onSuccess: () => {
      setIsSubscribed(true);
      setEmail("");
      setName("");
      toast({
        title: language === 'en' ? 'Your free ebook is on the way! 🎨' : 'Ebook percuma anda sedang dihantar! 🎨',
        description: language === 'en' 
          ? 'Check your email for the Interior Design Marketing Guide!' 
          : 'Semak e-mel anda untuk Panduan Pemasaran Reka Bentuk Dalaman!',
      });
    },
    onError: (error: any) => {
      toast({
        title: language === 'en' ? 'Error' : 'Ralat',
        description: language === 'en' 
          ? 'Failed to subscribe. Please try again.' 
          : 'Gagal melanggan. Sila cuba lagi.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    subscribeMutation.mutate({
      email,
      ...(name && { name }),
    });
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl blur-3xl"></div>
            <div className="relative">
              <img 
                src={ebookCover} 
                alt={language === 'en' ? 'Digital Marketing for Interior Designers in Malaysia - Free Ebook' : 'Pemasaran Digital untuk Pereka Dalaman di Malaysia - Ebook Percuma'}
                className="w-full max-w-sm rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full shadow-lg transform rotate-12">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  <span className="font-bold text-lg">
                    {language === 'en' ? 'FREE!' : 'PERCUMA!'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Mail className="w-4 h-4 text-purple-300" />
              <span className="text-sm font-medium text-purple-200">
                {language === 'en' ? 'Free Ebook + Newsletter' : 'Ebook Percuma + Surat Berita'}
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {language === 'en' 
                ? 'Get Your FREE Interior Design Marketing Guide!' 
                : 'Dapatkan Panduan Pemasaran Reka Bentuk Dalaman PERCUMA!'}
            </h2>
            
            <p className="text-lg text-purple-200 mb-6">
              {language === 'en'
                ? 'Learn SEO, social media, video marketing & paid ads strategies specifically for interior designers in Malaysia. Instant download!'
                : 'Pelajari strategi SEO, media sosial, pemasaran video & iklan berbayar khusus untuk pereka dalaman di Malaysia. Muat turun segera!'}
            </p>

            <ul className="space-y-3 mb-8">
              {[
                { en: 'Get found when clients search online', ms: 'Ditemui apabila klien mencari dalam talian' },
                { en: 'Social media strategies that work', ms: 'Strategi media sosial yang berkesan' },
                { en: 'Turn visitors into consultations', ms: 'Tukar pelawat kepada konsultasi' },
                { en: 'Attract quality clients, not tire-kickers', ms: 'Tarik klien berkualiti, bukan pembazir masa' }
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-purple-100">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{language === 'en' ? item.en : item.ms}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              {isSubscribed ? (
                <div className="text-center py-4" data-testid="subscription-success">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mb-4 shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {language === 'en' ? 'Check Your Email! 🎉' : 'Semak E-mel Anda! 🎉'}
                  </h3>
                  <p className="text-purple-200">
                    {language === 'en'
                      ? 'Your free ebook is on its way to your inbox!'
                      : 'Ebook percuma anda sedang dihantar ke peti mel anda!'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="newsletter-form">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      placeholder={language === 'en' ? 'Your Name (Optional)' : 'Nama Anda (Pilihan)'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-white/90 border-0 h-12"
                      data-testid="input-newsletter-name"
                    />
                    <Input
                      type="email"
                      placeholder={language === 'en' ? 'Your Email *' : 'E-mel Anda *'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/90 border-0 h-12"
                      data-testid="input-newsletter-email"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={subscribeMutation.isPending || !email}
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-6 text-lg shadow-lg"
                    data-testid="button-newsletter-subscribe"
                  >
                    {subscribeMutation.isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        {language === 'en' ? 'Sending...' : 'Menghantar...'}
                      </>
                    ) : (
                      <>
                        {language === 'en' ? 'Get My Free Ebook' : 'Dapatkan Ebook Percuma Saya'}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-purple-300 text-center">
                    {language === 'en'
                      ? '🔒 We respect your privacy. Unsubscribe anytime.'
                      : '🔒 Kami menghormati privasi anda. Berhenti langgan bila-bila masa.'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
