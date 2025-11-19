import { useEffect } from "react";
import { Share2, Users, TrendingUp, CheckCircle2, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanSocialMediaMarketingPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Social Media Marketing in Labuan | SMM Labuan - Yokan Digital'
      : 'Pemasaran Media Sosial di Labuan | SMM Labuan - Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Professional social media marketing services in Labuan. Yokan Digital helps businesses grow their presence on Facebook, Instagram, TikTok, and more. Get more engagement and sales with expert SMM.'
        : 'Perkhidmatan pemasaran media sosial profesional di Labuan. Yokan Digital membantu perniagaan mengembangkan kehadiran mereka di Facebook, Instagram, TikTok, dan banyak lagi. Dapatkan lebih banyak penglibatan dan jualan dengan SMM pakar.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'Social Media Marketing in Labuan' 
              : 'Pemasaran Media Sosial di Labuan'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Build a strong social media presence and connect with your Labuan audience. Our social media experts create engaging content and campaigns that drive real business results.'
              : 'Bina kehadiran media sosial yang kuat dan berhubung dengan khalayak Labuan anda. Pakar media sosial kami mencipta kandungan dan kempen menarik yang memacu hasil perniagaan sebenar.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Share2 className="mr-2" />
              {language === 'en' ? 'Grow Your Social Media' : 'Kembangkan Media Sosial Anda'}
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
              <div className="text-3xl font-bold text-pink-600 mb-2">500%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Engagement Increase' : 'Peningkatan Penglibatan'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'New Followers' : 'Pengikut Baru'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.5</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Avg. Rating' : 'Penilaian Purata'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Campaigns Launched' : 'Kempen Dilancarkan'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our Social Media Marketing Services' : 'Perkhidmatan Pemasaran Media Sosial Kami'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Share2 className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Content Creation' : 'Penciptaan Kandungan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Engaging posts, graphics, and videos that resonate with your Labuan audience'
                  : 'Siaran, grafik, dan video menarik yang beresonansi dengan khalayak Labuan anda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Users className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Community Management' : 'Pengurusan Komuniti'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Build and nurture relationships with your followers and customers'
                  : 'Bina dan pupuk hubungan dengan pengikut dan pelanggan anda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Growth Strategy' : 'Strategi Pertumbuhan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Data-driven strategies to grow your followers and increase engagement'
                  : 'Strategi berasaskan data untuk mengembangkan pengikut dan meningkatkan penglibatan'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Heart className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Influencer Marketing' : 'Pemasaran Influencer'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Partner with local influencers to expand your reach in Labuan'
                  : 'Bekerjasama dengan influencer tempatan untuk meluaskan jangkauan anda di Labuan'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Social Media Ads' : 'Iklan Media Sosial'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Targeted advertising campaigns on Facebook, Instagram, and TikTok'
                  : 'Kempen pengiklanan tersasarkan di Facebook, Instagram, dan TikTok'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Analytics & Reporting' : 'Analitik & Pelaporan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Track performance and measure ROI from your social media efforts'
                  : 'Jejaki prestasi dan ukur ROI dari usaha media sosial anda'}
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
