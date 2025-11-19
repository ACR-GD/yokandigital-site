import { useEffect } from "react";
import { 
  Globe, Search, TrendingUp, Target, Award, BarChart3, 
  Zap, CheckCircle2, ArrowRight, Users, Star, Clock, Gift, Sparkles, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import CountdownTimer from "@/components/countdown-timer";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanDigitalMarketingPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Digital Marketing Agency in Labuan | Yokan Digital Malaysia - Grow Your Business'
      : 'Agensi Pemasaran Digital di Labuan | Yokan Digital Malaysia - Kembangkan Perniagaan Anda';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Trusted digital marketing agency in Labuan, Malaysia. Yokan Digital offers SEO, PPC, digital marketing services to companies in Labuan. Grow your online presence with proven digital marketing solutions.'
        : 'Agensi pemasaran digital dipercayai di Labuan, Malaysia. Yokan Digital menawarkan SEO, PPC, perkhidmatan pemasaran digital kepada syarikat di Labuan. Kembangkan kehadiran dalam talian anda dengan penyelesaian pemasaran digital terbukti.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  const services = [
    {
      icon: Search,
      titleEn: "SEO Optimization",
      titleMs: "Pengoptimuman SEO",
      descEn: "Rank higher on Google with our proven SEO strategies tailored for Labuan businesses. Increase visibility and attract the right audience.",
      descMs: "Kedudukan lebih tinggi di Google dengan strategi SEO terbukti kami yang disesuaikan untuk perniagaan Labuan. Tingkatkan keterlihatan dan tarik khalayak yang tepat."
    },
    {
      icon: TrendingUp,
      titleEn: "PPC & Google Ads",
      titleMs: "PPC & Google Ads",
      descEn: "Create targeted campaigns that drive measurable results. Our PPC expertise delivers higher sales and conversion rates for companies in Labuan.",
      descMs: "Cipta kempen tersasar yang memberikan hasil boleh diukur. Kepakaran PPC kami memberikan jualan dan kadar penukaran lebih tinggi untuk syarikat di Labuan."
    },
    {
      icon: Globe,
      titleEn: "Custom Websites & E-commerce",
      titleMs: "Laman Web Tersuai & E-dagang",
      descEn: "Build a strong online presence with custom websites designed to convert visitors into customers. Optimize your digital presence.",
      descMs: "Bina kehadiran dalam talian yang kuat dengan laman web tersuai direka untuk menukar pelawat kepada pelanggan. Optimumkan kehadiran digital anda."
    },
    {
      icon: Target,
      titleEn: "SEM & Digital Advertising",
      titleMs: "SEM & Pengiklanan Digital",
      descEn: "Advanced strategies for search engine marketing including TikTok and other platforms. Elevate your brand with comprehensive digital solutions.",
      descMs: "Strategi lanjutan untuk pemasaran enjin carian termasuk TikTok dan platform lain. Tingkatkan jenama anda dengan penyelesaian digital komprehensif."
    },
    {
      icon: BarChart3,
      titleEn: "Content Marketing & Analytics",
      titleMs: "Pemasaran Kandungan & Analitik",
      descEn: "Data-driven content marketing strategies that improve online visibility. Trust our team of experts to transform your business.",
      descMs: "Strategi pemasaran kandungan berasaskan data yang meningkatkan keterlihatan dalam talian. Percayakan pasukan pakar kami untuk mengubah perniagaan anda."
    },
    {
      icon: Zap,
      titleEn: "Digital Transformation",
      titleMs: "Transformasi Digital",
      descEn: "Embrace digital transformation with results-driven digital marketing strategies. Our expertise in digital marketing drives business growth.",
      descMs: "Terima transformasi digital dengan strategi pemasaran digital berorientasikan hasil. Kepakaran kami dalam pemasaran digital memacu pertumbuhan perniagaan."
    }
  ];

  const successMetrics = [
    { 
      number: "250%", 
      labelEn: "Traffic Increased", 
      labelMs: "Trafik Meningkat",
      iconColor: "text-purple-600"
    },
    { 
      number: "180%", 
      labelEn: "Higher Sales", 
      labelMs: "Jualan Lebih Tinggi",
      iconColor: "text-pink-600"
    },
    { 
      number: "95%", 
      labelEn: "Client Success Rate", 
      labelMs: "Kadar Kejayaan Klien",
      iconColor: "text-blue-600"
    },
    { 
      number: "50+", 
      labelEn: "Companies in Labuan Served", 
      labelMs: "Syarikat di Labuan Dilayan",
      iconColor: "text-green-600"
    }
  ];

  const whyChooseUs = [
    {
      titleEn: "Trusted Digital Marketing Agency",
      titleMs: "Agensi Pemasaran Digital Dipercayai",
      descEn: "As a leading digital marketing agency in Malaysia, we have proven digital marketing expertise serving companies in Labuan and across Malaysia and Singapore.",
      descMs: "Sebagai agensi pemasaran digital terkemuka di Malaysia, kami mempunyai kepakaran pemasaran digital terbukti melayani syarikat di Labuan dan seluruh Malaysia dan Singapura."
    },
    {
      titleEn: "Best Digital Marketing Company",
      titleMs: "Syarikat Pemasaran Digital Terbaik",
      descEn: "Yokan Digital is recognized as one of the best digital marketing companies in Malaysia, delivering comprehensive digital marketing services tailored to Labuan businesses.",
      descMs: "Yokan Digital diiktiraf sebagai salah satu syarikat pemasaran digital terbaik di Malaysia, menyampaikan perkhidmatan pemasaran digital komprehensif yang disesuaikan untuk perniagaan Labuan."
    },
    {
      titleEn: "Results-Driven Digital Marketing",
      titleMs: "Pemasaran Digital Berorientasikan Hasil",
      descEn: "Our data-driven approach focuses on ROI and measurable results. We don't just increase online visibility—we drive conversion rates and e-commerce sales.",
      descMs: "Pendekatan berasaskan data kami fokus pada ROI dan hasil boleh diukur. Kami bukan sahaja meningkatkan keterlihatan dalam talian—kami memacu kadar penukaran dan jualan e-dagang."
    },
    {
      titleEn: "Digital Marketing Experts",
      titleMs: "Pakar Pemasaran Digital",
      descEn: "Our team of experts brings deep expertise in digital marketing, combining Malaysian market knowledge with proven digital marketing strategies for marketing success.",
      descMs: "Pasukan pakar kami membawa kepakaran mendalam dalam pemasaran digital, menggabungkan pengetahuan pasaran Malaysia dengan strategi pemasaran digital terbukti untuk kejayaan pemasaran."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />

      {/* LIMITED TIME OFFER - Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-pink-600">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Flashing LIMITED OFFER Badge */}
            <div className="mb-6 inline-flex items-center gap-2 bg-yellow-400 text-black font-black px-6 py-3 rounded-full text-lg animate-bounce shadow-2xl">
              <Sparkles className="w-6 h-6 animate-spin" />
              <span className="uppercase tracking-wider">
                {language === 'en' ? '🔥 LIMITED TIME OFFER 🔥' : '🔥 TAWARAN TERHAD 🔥'}
              </span>
              <Sparkles className="w-6 h-6 animate-spin" />
            </div>
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight" data-testid="page-title">
              {language === 'en' 
                ? <>FREE CUSTOM<br/>WEBSITE + AI CHATBOT!</>
                : <>LAMAN WEB PERCUMA<br/>+ CHATBOT AI!</>}
            </h1>
            
            {/* Sub-headline with pulsing gift icon */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Gift className="w-6 h-6 sm:w-10 sm:h-10 text-yellow-300 animate-bounce" />
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-300">
                {language === 'en'
                  ? 'Exclusively for Labuan Businesses!'
                  : 'Eksklusif untuk Perniagaan Labuan!'}
              </p>
              <Gift className="w-6 h-6 sm:w-10 sm:h-10 text-yellow-300 animate-bounce" />
            </div>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border-2 sm:border-4 border-yellow-400 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex flex-col items-center">
                  <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-300 mb-2" />
                  <p className="text-white font-bold text-base sm:text-lg">
                    {language === 'en' ? 'Delivered in Hours!' : 'Siap Dalam Jam!'}
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {language === 'en' ? 'Same-day delivery' : 'Penghantaran hari yang sama'}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-green-300 mb-2" />
                  <p className="text-white font-bold text-base sm:text-lg">
                    {language === 'en' ? 'No Strings Attached' : 'Tiada Syarat'}
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {language === 'en' ? '100% Free, Forever' : '100% Percuma, Selamanya'}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-pink-300 mb-2" />
                  <p className="text-white font-bold text-base sm:text-lg">
                    {language === 'en' ? 'AI-Powered Chatbot' : 'Chatbot Berkuasa AI'}
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm">
                    {language === 'en' ? '24/7 customer support' : 'Sokongan 24/7'}
                  </p>
                </div>
              </div>

              <div className="bg-red-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 text-sm sm:text-lg md:text-xl">
                {language === 'en' 
                  ? '⚡ ONE REQUIREMENT: Your business must NOT have a website yet!'
                  : '⚡ SATU SYARAT: Perniagaan anda BELUM ada laman web!'}
              </div>

              <p className="text-white/90 text-base sm:text-lg">
                {language === 'en'
                  ? 'Worth RM5,000+ • Only for the first 50 Labuan businesses'
                  : 'Bernilai RM5,000+ • Hanya untuk 50 perniagaan Labuan pertama'}
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="mb-6 sm:mb-8">
              <p className="text-yellow-300 font-bold text-lg sm:text-2xl mb-3 sm:mb-4 uppercase tracking-wide">
                {language === 'en' ? '⏰ Offer Ends In:' : '⏰ Tawaran Tamat Dalam:'}
              </p>
              <CountdownTimer />
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-black text-base sm:text-xl md:text-2xl px-6 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-110 transition-all border-2 sm:border-4 border-white w-full sm:w-auto"
                asChild
                data-testid="button-claim-offer"
              >
                <a href="#contact">
                  {language === 'en' ? '🎁 CLAIM YOUR FREE WEBSITE NOW!' : '🎁 TUNTUT LAMAN WEB PERCUMA ANDA!'}
                </a>
              </Button>
            </div>

            <p className="text-white/80 text-xs sm:text-sm mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              {language === 'en'
                ? '* Limited to Labuan businesses without an existing website. First come, first served. Offer expires December 31, 2025.'
                : '* Terhad kepada perniagaan Labuan tanpa laman web sedia ada. Siapa cepat, dia dapat. Tawaran tamat 31 Disember 2025.'}
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Success Stories: Measurable Results' : 'Kisah Kejayaan: Hasil Boleh Diukur'}
            </h2>
            <p className="text-xl text-muted-foreground">
              {language === 'en' 
                ? 'Proven digital marketing strategies that drive ROI for companies in Labuan'
                : 'Strategi pemasaran digital terbukti yang memacu ROI untuk syarikat di Labuan'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-2">
                <CardContent className="pt-6">
                  <BarChart3 className={`w-12 h-12 mx-auto mb-4 ${metric.iconColor}`} />
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    {metric.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {language === 'en' ? metric.labelEn : metric.labelMs}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' 
                ? 'Comprehensive Digital Marketing Solutions for Labuan' 
                : 'Penyelesaian Pemasaran Digital Komprehensif untuk Labuan'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {language === 'en'
                ? 'Digital marketing services tailored for companies in Labuan. Build a strong online presence and optimize your marketing efforts.'
                : 'Perkhidmatan pemasaran digital disesuaikan untuk syarikat di Labuan. Bina kehadiran dalam talian yang kuat dan optimumkan usaha pemasaran anda.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-2xl transition-all hover:-translate-y-2 border-2" data-testid={`card-service-${index}`}>
                  <CardHeader>
                    <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl w-fit mb-4">
                      <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-2xl">
                      {language === 'en' ? service.titleEn : service.titleMs}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {language === 'en' ? service.descEn : service.descMs}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {language === 'en' 
                ? 'Why Yokan Digital is the Best Digital Marketing Company in Labuan' 
                : 'Mengapa Yokan Digital adalah Syarikat Pemasaran Digital Terbaik di Labuan'}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Trust the leading digital marketing agency in Malaysia for digital transformation and growth'
                : 'Percayakan agensi pemasaran digital terkemuka di Malaysia untuk transformasi dan pertumbuhan digital'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">
                        {language === 'en' ? item.titleEn : item.titleMs}
                      </CardTitle>
                      <CardDescription className="text-white/90 text-base">
                        {language === 'en' ? item.descEn : item.descMs}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Landscape Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {language === 'en' 
                  ? 'Navigate the Digital Landscape with Confidence' 
                  : 'Navigasi Landskap Digital dengan Yakin'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Search className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {language === 'en' ? 'Search Engine Optimization' : 'Pengoptimuman Enjin Carian'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Keyword research and optimization to increase visibility. Rank higher on Google with advanced SEO strategies for search engine success.'
                        : 'Penyelidikan dan pengoptimuman kata kunci untuk meningkatkan keterlihatan. Kedudukan lebih tinggi di Google dengan strategi SEO lanjutan untuk kejayaan enjin carian.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                    <Target className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {language === 'en' ? 'Targeted Campaign Management' : 'Pengurusan Kempen Tersasar'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Create targeted PPC campaigns with data-driven insights. Our digital marketing strategies optimize conversion rates and presence and sales.'
                        : 'Cipta kempen PPC tersasar dengan pandangan berasaskan data. Strategi pemasaran digital kami mengoptimumkan kadar penukaran serta kehadiran dan jualan.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {language === 'en' ? 'Marketing Success & ROI' : 'Kejayaan Pemasaran & ROI'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'en'
                        ? 'Focus on business growth with measurable results. Our team of experts delivers marketing success through proven digital solutions.'
                        : 'Fokus pada pertumbuhan perniagaan dengan hasil boleh diukur. Pasukan pakar kami menyampaikan kejayaan pemasaran melalui penyelesaian digital terbukti.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {language === 'en' ? 'Digital Marketing Company in Labuan' : 'Syarikat Pemasaran Digital di Labuan'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{language === 'en' ? 'Expertise in digital marketing for Malaysian businesses' : 'Kepakaran dalam pemasaran digital untuk perniagaan Malaysia'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{language === 'en' ? 'Results-driven digital marketing agency' : 'Agensi pemasaran digital berorientasikan hasil'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{language === 'en' ? 'Comprehensive digital presence optimization' : 'Pengoptimuman kehadiran digital komprehensif'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{language === 'en' ? 'Trusted digital transformation partner' : 'Rakan transformasi digital dipercayai'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{language === 'en' ? 'Digital marketing experts for e-commerce sales' : 'Pakar pemasaran digital untuk jualan e-dagang'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span>{language === 'en' ? 'Advanced strategies for online visibility' : 'Strategi lanjutan untuk keterlihatan dalam talian'}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Users className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' 
              ? 'Ready to Transform Your Business in Labuan?' 
              : 'Bersedia untuk Mengubah Perniagaan Anda di Labuan?'}
          </h2>
          <p className="text-xl mb-4 text-white/90">
            {language === 'en'
              ? 'Partner with Yokan Digital, the best digital marketing company in Malaysia. Grow your online presence with proven digital marketing solutions.'
              : 'Bermitra dengan Yokan Digital, syarikat pemasaran digital terbaik di Malaysia. Kembangkan kehadiran dalam talian anda dengan penyelesaian pemasaran digital terbukti.'}
          </p>
          <p className="text-lg mb-8 text-white/80">
            {language === 'en'
              ? 'Our digital marketing experts are ready to elevate your brand and drive business growth. Embrace digital transformation today.'
              : 'Pakar pemasaran digital kami bersedia untuk meningkatkan jenama anda dan memacu pertumbuhan perniagaan. Terima transformasi digital hari ini.'}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
            asChild
            data-testid="button-contact-cta"
          >
            <a href="/#consultation">
              {language === 'en' ? 'Get Your Free Digital Marketing Consultation' : 'Dapatkan Perundingan Pemasaran Digital Percuma Anda'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Contact />

      <Footer />
    </div>
  );
}
