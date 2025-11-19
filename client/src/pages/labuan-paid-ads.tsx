import { useEffect } from "react";
import { Target, TrendingUp, DollarSign, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanPaidAdsPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Paid Ads in Labuan | PPC Advertising Labuan - Yokan Digital'
      : 'Iklan Berbayar di Labuan | Pengiklanan PPC Labuan - Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Expert paid advertising services in Labuan. Yokan Digital manages Google Ads, Facebook Ads, and PPC campaigns that drive results. Get more leads and sales with targeted paid ads.'
        : 'Perkhidmatan pengiklanan berbayar pakar di Labuan. Yokan Digital menguruskan Google Ads, Facebook Ads, dan kempen PPC yang memberikan hasil. Dapatkan lebih banyak petunjuk dan jualan dengan iklan berbayar tersasarkan.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900 dark:to-pink-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'Paid Ads in Labuan' 
              : 'Iklan Berbayar di Labuan'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Drive immediate results with targeted paid advertising campaigns. Our PPC experts in Labuan create high-converting Google Ads, Facebook Ads, and more to boost your ROI.'
              : 'Pemacu hasil segera dengan kempen pengiklanan berbayar tersasarkan. Pakar PPC kami di Labuan mencipta Google Ads, Facebook Ads berkualiti tinggi, dan banyak lagi untuk meningkatkan ROI anda.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Target className="mr-2" />
              {language === 'en' ? 'Start Your Campaign' : 'Mulakan Kempen Anda'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === 'en' ? 'Free Consultation' : 'Perundingan Percuma'}
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">300%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'ROI Average' : 'Purata ROI'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">50%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Lower CPC' : 'CPC Lebih Rendah'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Campaign Monitoring' : 'Pemantauan Kempen'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Client Satisfaction' : 'Kepuasan Klien'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Ads Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our Paid Advertising Services' : 'Perkhidmatan Pengiklanan Berbayar Kami'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-orange-200 dark:border-orange-800">
              <Target className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Google Ads (PPC)' : 'Google Ads (PPC)'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Reach customers actively searching for your products or services in Labuan'
                  : 'Capai pelanggan yang secara aktif mencari produk atau perkhidmatan anda di Labuan'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-red-200 dark:border-red-800">
              <DollarSign className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Display Advertising' : 'Pengiklanan Paparan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Build brand awareness with visually compelling ads across the web'
                  : 'Bina kesedaran jenama dengan iklan visual menarik di seluruh web'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-pink-200 dark:border-pink-800">
              <TrendingUp className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Remarketing Campaigns' : 'Kempen Pemasaran Semula'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Re-engage visitors who didn\'t convert on their first visit'
                  : 'Libatkan semula pelawat yang tidak menukar pada lawatan pertama mereka'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Shopping Ads' : 'Iklan Beli-belah'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Showcase your products directly in Google search results'
                  : 'Paparkan produk anda terus dalam hasil carian Google'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Campaign Optimization' : 'Pengoptimuman Kempen'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Continuous testing and optimization to maximize your ad performance'
                  : 'Ujian berterusan dan pengoptimuman untuk memaksimumkan prestasi iklan anda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Analytics & Reporting' : 'Analitik & Pelaporan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Transparent reporting on campaign performance and ROI'
                  : 'Pelaporan telus tentang prestasi kempen dan ROI'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
