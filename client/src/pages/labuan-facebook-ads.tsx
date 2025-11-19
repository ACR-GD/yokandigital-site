import { useEffect } from "react";
import { Facebook, Target, TrendingUp, CheckCircle2, ArrowRight, Users } from "lucide-react";
import { SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanFacebookAdsPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Facebook Ads in Labuan | Facebook Advertising Labuan - Yokan Digital'
      : 'Iklan Facebook di Labuan | Pengiklanan Facebook Labuan - Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Expert Facebook Ads management in Labuan. Yokan Digital creates high-converting Facebook advertising campaigns that reach your target audience and drive sales for Labuan businesses.'
        : 'Pengurusan Iklan Facebook pakar di Labuan. Yokan Digital mencipta kempen pengiklanan Facebook berkualiti tinggi yang mencapai khalayak sasaran anda dan memacu jualan untuk perniagaan Labuan.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <SiFacebook className="w-16 h-16 text-blue-600" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'Facebook Ads in Labuan' 
              : 'Iklan Facebook di Labuan'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Reach your ideal customers on Facebook with precision-targeted advertising. Our Facebook Ads experts in Labuan create campaigns that generate leads, sales, and brand awareness.'
              : 'Capai pelanggan ideal anda di Facebook dengan pengiklanan tersasarkan tepat. Pakar Iklan Facebook kami di Labuan mencipta kempen yang menjana petunjuk, jualan, dan kesedaran jenama.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Facebook className="mr-2" />
              {language === 'en' ? 'Start Facebook Ads Campaign' : 'Mulakan Kempen Iklan Facebook'}
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
              <div className="text-3xl font-bold text-blue-600 mb-2">400%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'ROI Increase' : 'Peningkatan ROI'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">RM0.50</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Avg. Cost Per Click' : 'Kos Purata Per Klik'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">15%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Conversion Rate' : 'Kadar Penukaran'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">2M+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'People Reached' : 'Orang Dicapai'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Ads Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our Facebook Ads Services' : 'Perkhidmatan Iklan Facebook Kami'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-blue-200 dark:border-blue-800">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Audience Targeting' : 'Sasaran Khalayak'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Reach the right people in Labuan based on demographics, interests, and behaviors'
                  : 'Capai orang yang tepat di Labuan berdasarkan demografi, minat, dan tingkah laku'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Ad Creative Design' : 'Reka Bentuk Kreatif Iklan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Eye-catching ad designs that stop the scroll and drive clicks'
                  : 'Reka bentuk iklan menarik yang menghentikan skrol dan memacu klik'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Campaign Optimization' : 'Pengoptimuman Kempen'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Continuous A/B testing and optimization for maximum ROI'
                  : 'Ujian A/B berterusan dan pengoptimuman untuk ROI maksimum'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Lead Generation Campaigns' : 'Kempen Penjanaan Petunjuk'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Capture qualified leads directly from Facebook with optimized forms'
                  : 'Tangkap petunjuk berkelayakan terus dari Facebook dengan borang dioptimumkan'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Target className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Retargeting Campaigns' : 'Kempen Sasaran Semula'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Re-engage website visitors and convert them into customers'
                  : 'Libatkan semula pelawat laman web dan tukarkan mereka kepada pelanggan'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Performance Tracking' : 'Penjejakan Prestasi'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Detailed analytics and reports on campaign performance and conversions'
                  : 'Analitik terperinci dan laporan tentang prestasi kempen dan penukaran'}
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
