import { useEffect } from "react";
import { Instagram, Heart, Camera, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanInstagramAdsPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Instagram Ads in Labuan | Instagram Advertising Labuan - Yokan Digital'
      : 'Iklan Instagram di Labuan | Pengiklanan Instagram Labuan - Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Professional Instagram Ads services in Labuan. Yokan Digital creates visually stunning Instagram advertising campaigns that drive engagement, followers, and sales for Labuan businesses.'
        : 'Perkhidmatan Iklan Instagram profesional di Labuan. Yokan Digital mencipta kempen pengiklanan Instagram visual menakjubkan yang memacu penglibatan, pengikut, dan jualan untuk perniagaan Labuan.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <SiInstagram className="w-16 h-16 text-pink-600" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'Instagram Ads in Labuan' 
              : 'Iklan Instagram di Labuan'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Captivate your audience with stunning Instagram advertising. Our Instagram Ads experts in Labuan create visually compelling campaigns that build brand awareness and drive conversions.'
              : 'Pukau khalayak anda dengan pengiklanan Instagram menakjubkan. Pakar Iklan Instagram kami di Labuan mencipta kempen visual menarik yang membina kesedaran jenama dan memacu penukaran.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Instagram className="mr-2" />
              {language === 'en' ? 'Start Instagram Ads' : 'Mulakan Iklan Instagram'}
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
              <div className="text-3xl font-bold text-purple-600 mb-2">450%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Engagement Boost' : 'Peningkatan Penglibatan'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">20K+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'New Followers' : 'Pengikut Baru'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">12%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Conversion Rate' : 'Kadar Penukaran'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">3M+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Impressions' : 'Tera'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Ads Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our Instagram Ads Services' : 'Perkhidmatan Iklan Instagram Kami'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-pink-200 dark:border-pink-800">
              <Camera className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Feed & Stories Ads' : 'Iklan Feed & Stories'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Eye-catching ads for Instagram feed and stories that stop users mid-scroll'
                  : 'Iklan menarik untuk feed dan stories Instagram yang menghentikan pengguna semasa skrol'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Instagram className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Reels Advertising' : 'Pengiklanan Reels'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Create engaging short video ads for Instagram Reels to reach younger audiences'
                  : 'Cipta iklan video pendek menarik untuk Instagram Reels untuk mencapai khalayak muda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Heart className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Carousel Ads' : 'Iklan Karusel'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Showcase multiple products or features in a single swipeable ad'
                  : 'Paparkan berbilang produk atau ciri dalam satu iklan boleh leret'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Shopping Ads' : 'Iklan Beli-belah'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Tag products directly in posts for seamless shopping experience'
                  : 'Tag produk terus dalam siaran untuk pengalaman beli-belah lancar'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Influencer Collaborations' : 'Kerjasama Influencer'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Partner with Labuan influencers for authentic brand promotion'
                  : 'Bekerjasama dengan influencer Labuan untuk promosi jenama tulen'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Performance Tracking' : 'Penjejakan Prestasi'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Monitor likes, comments, shares, and conversions with detailed analytics'
                  : 'Pantau suka, komen, perkongsian, dan penukaran dengan analitik terperinci'}
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
