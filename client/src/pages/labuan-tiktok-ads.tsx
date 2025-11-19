import { useEffect } from "react";
import { Video, Target, TrendingUp, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanTikTokAdsPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'TikTok Ads in Labuan | TikTok Advertising Labuan - Yokan Digital'
      : 'Iklan TikTok di Labuan | Pengiklanan TikTok Labuan - Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Professional TikTok Ads management in Labuan. Yokan Digital creates viral TikTok advertising campaigns that reach younger audiences and drive engagement for Labuan businesses.'
        : 'Pengurusan Iklan TikTok profesional di Labuan. Yokan Digital mencipta kempen pengiklanan TikTok viral yang mencapai khalayak muda dan memacu penglibatan untuk perniagaan Labuan.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-purple-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <SiTiktok className="w-16 h-16 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            {language === 'en' 
              ? 'TikTok Ads in Labuan' 
              : 'Iklan TikTok di Labuan'}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Reach millions of engaged users on TikTok with creative video advertising. Our TikTok Ads specialists in Labuan create viral campaigns that drive brand awareness and sales.'
              : 'Capai berjuta pengguna terlibat di TikTok dengan pengiklanan video kreatif. Pakar Iklan TikTok kami di Labuan mencipta kempen viral yang memacu kesedaran jenama dan jualan.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Video className="mr-2" />
              {language === 'en' ? 'Start TikTok Ads' : 'Mulakan Iklan TikTok'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {language === 'en' ? 'Free Consultation' : 'Perundingan Percuma'}
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">600%</div>
              <div className="text-sm text-gray-300">
                {language === 'en' ? 'Engagement Rate' : 'Kadar Penglibatan'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">5M+</div>
              <div className="text-sm text-gray-300">
                {language === 'en' ? 'Video Views' : 'Tontonan Video'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">18-35</div>
              <div className="text-sm text-gray-300">
                {language === 'en' ? 'Target Age Range' : 'Julat Umur Sasaran'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-sm text-gray-300">
                {language === 'en' ? 'Campaign Launch' : 'Pelancaran Kempen'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TikTok Ads Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our TikTok Ads Services' : 'Perkhidmatan Iklan TikTok Kami'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Video className="w-12 h-12 text-black dark:text-white mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Video Ad Creation' : 'Penciptaan Iklan Video'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Engaging short-form video content designed to go viral on TikTok'
                  : 'Kandungan video bentuk pendek menarik direka untuk menjadi viral di TikTok'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Target className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Hashtag Challenges' : 'Cabaran Hashtag'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Create branded hashtag challenges that encourage user participation'
                  : 'Cipta cabaran hashtag berjenama yang menggalakkan penyertaan pengguna'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Influencer Partnerships' : 'Perkongsian Influencer'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Collaborate with TikTok influencers to amplify your reach'
                  : 'Bekerjasama dengan influencer TikTok untuk menguatkan jangkauan anda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Trend Integration' : 'Integrasi Trend'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Leverage trending sounds, effects, and formats for maximum visibility'
                  : 'Manfaatkan bunyi, kesan, dan format trending untuk keterlihatan maksimum'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Performance Analytics' : 'Analitik Prestasi'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Track views, engagement, and conversions with detailed reporting'
                  : 'Jejaki tontonan, penglibatan, dan penukaran dengan pelaporan terperinci'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Target className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Audience Targeting' : 'Sasaran Khalayak'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Reach Gen Z and millennial audiences in Labuan with precision'
                  : 'Capai khalayak Gen Z dan milenial di Labuan dengan tepat'}
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
