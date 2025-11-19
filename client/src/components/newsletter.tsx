import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
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
        title: language === 'en' ? 'Success!' : 'Berjaya!',
        description: language === 'en' 
          ? 'You have successfully subscribed to our newsletter.' 
          : 'Anda telah berjaya melanggan surat berita kami.',
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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
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
              ? 'Stay Updated with Digital Marketing Insights' 
              : 'Kekal Terkini dengan Pandangan Pemasaran Digital'}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {language === 'en'
              ? 'Get exclusive tips, industry trends, and actionable strategies delivered to your inbox. Join our community of forward-thinking businesses.'
              : 'Dapatkan tips eksklusif, trend industri, dan strategi yang boleh dilaksanakan dihantar ke peti mel anda. Sertai komuniti perniagaan kami yang berpandangan jauh.'}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          {isSubscribed ? (
            <div className="text-center py-8" data-testid="subscription-success">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {language === 'en' ? 'Thank You!' : 'Terima Kasih!'}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {language === 'en'
                  ? 'Check your inbox for a confirmation email.'
                  : 'Semak peti mel anda untuk e-mel pengesahan.'}
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
