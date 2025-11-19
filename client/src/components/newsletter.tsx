import { useState } from "react";
import { Mail, CheckCircle2, Loader2, BookOpen, Gift } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

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
        title: language === 'en' ? 'Success! 🎉' : 'Berjaya! 🎉',
        description: language === 'en' 
          ? 'Check your inbox for your FREE digital marketing guide!' 
          : 'Semak peti mel anda untuk panduan pemasaran digital PERCUMA!',
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
    <section id="newsletter" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-800">
            <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {language === 'en' ? 'Newsletter' : 'Surat Berita'}
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' 
              ? 'Get Your FREE Digital Marketing Guide!' 
              : 'Dapatkan Panduan Pemasaran Digital PERCUMA!'}
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/50 dark:to-pink-900/50 px-4 py-2 rounded-full mb-6 border-2 border-orange-300 dark:border-orange-700">
            <Gift className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-bold text-orange-800 dark:text-orange-300">
              {language === 'en' ? 'FREE Ebook with Your Subscription!' : 'Ebook PERCUMA dengan Langganan Anda!'}
            </span>
          </div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            {language === 'en'
              ? 'Subscribe to our newsletter and get instant access to our comprehensive guide on digital marketing in Malaysia, plus exclusive tips and industry insights.'
              : 'Langgan surat berita kami dan dapatkan akses segera kepada panduan komprehensif kami mengenai pemasaran digital di Malaysia, serta tips eksklusif dan pandangan industri.'}
          </p>

          <div className="max-w-md mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-6 mb-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-3 flex-shrink-0">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  {language === 'en' 
                    ? '"Your Guide to Digital Marketing in Labuan"' 
                    : '"Panduan Anda untuk Pemasaran Digital di Labuan"'}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === 'en'
                    ? 'Complete guide covering SEO, social media, paid ads, email marketing & more!'
                    : 'Panduan lengkap merangkumi SEO, media sosial, iklan berbayar, pemasaran e-mel & lagi!'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          {isSubscribed ? (
            <div className="text-center py-8" data-testid="subscription-success">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4 shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Welcome to Yokan Digital! 🎉' : 'Selamat Datang ke Yokan Digital! 🎉'}
              </h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 mb-4 max-w-md mx-auto border border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {language === 'en' ? 'Check Your Email!' : 'Semak E-mel Anda!'}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {language === 'en'
                    ? 'Your FREE digital marketing guide is waiting in your inbox with actionable tips to grow your business online.'
                    : 'Panduan pemasaran digital PERCUMA anda menunggu di peti mel anda dengan tips yang boleh dilaksanakan untuk mengembangkan perniagaan anda dalam talian.'}
                </p>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {language === 'en'
                  ? "Don't see it? Check your spam folder."
                  : 'Tidak nampak? Semak folder spam anda.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" data-testid="newsletter-form">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder={language === 'en' ? 'Your Name (Optional)' : 'Nama Anda (Pilihan)'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                    data-testid="input-newsletter-name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={language === 'en' ? 'Your Email *' : 'E-mel Anda *'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                    data-testid="input-newsletter-email"
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                disabled={subscribeMutation.isPending || !email}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-6 text-lg"
                data-testid="button-newsletter-subscribe"
              >
                {subscribeMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {language === 'en' ? 'Subscribing...' : 'Melanggan...'}
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    {language === 'en' ? 'Subscribe to Newsletter' : 'Langgan Surat Berita'}
                  </>
                )}
              </Button>
            </form>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {language === 'en'
              ? '🔒 We respect your privacy. Unsubscribe anytime.'
              : '🔒 Kami menghormati privasi anda. Berhenti langgan bila-bila masa.'}
          </p>
        </div>
      </div>
    </section>
  );
}
