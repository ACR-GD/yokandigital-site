import { useEffect } from "react";
import { Search, TrendingUp, Target, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanSEOAgencyPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'SEO Agency in Labuan | Top SEO Services Labuan - Yokan Digital'
      : 'Agensi SEO di Labuan | Perkhidmatan SEO Terbaik Labuan - Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Leading SEO agency in Labuan, Malaysia. Yokan Digital provides expert SEO services to rank your business higher on Google. Get more organic traffic and leads with proven SEO strategies.'
        : 'Agensi SEO terkemuka di Labuan, Malaysia. Yokan Digital menyediakan perkhidmatan SEO pakar untuk kedudukan perniagaan anda lebih tinggi di Google. Dapatkan lebih banyak trafik organik dan petunjuk dengan strategi SEO terbukti.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  const benefits = [
    {
      titleEn: "Higher Google Rankings",
      titleMs: "Kedudukan Google Lebih Tinggi",
      descEn: "Dominate search results for Labuan-specific keywords and attract more local customers",
      descMs: "Kuasai hasil carian untuk kata kunci khusus Labuan dan tarik lebih ramai pelanggan tempatan"
    },
    {
      titleEn: "Increased Organic Traffic",
      titleMs: "Trafik Organik Meningkat",
      descEn: "Drive quality traffic to your website without paying for ads",
      descMs: "Pemacu trafik berkualiti ke laman web anda tanpa membayar iklan"
    },
    {
      titleEn: "Better ROI",
      titleMs: "ROI Lebih Baik",
      descEn: "SEO delivers long-term results and better return on investment",
      descMs: "SEO memberikan hasil jangka panjang dan pulangan pelaburan lebih baik"
    },
    {
      titleEn: "Local SEO Expertise",
      titleMs: "Kepakaran SEO Tempatan",
      descEn: "Specialized strategies for Labuan businesses to dominate local search",
      descMs: "Strategi khusus untuk perniagaan Labuan menguasai carian tempatan"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'SEO Agency in Labuan' 
              : 'Agensi SEO di Labuan'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Get your Labuan business on the first page of Google. Our proven SEO strategies increase organic traffic, generate quality leads, and boost sales for companies in Labuan.'
              : 'Dapatkan perniagaan Labuan anda di halaman pertama Google. Strategi SEO terbukti kami meningkatkan trafik organik, menjana petunjuk berkualiti, dan meningkatkan jualan untuk syarikat di Labuan.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Search className="mr-2" />
              {language === 'en' ? 'Get Free SEO Audit' : 'Dapatkan Audit SEO Percuma'}
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
              <div className="text-3xl font-bold text-blue-600 mb-2">250%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Traffic Increase' : 'Peningkatan Trafik'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">#1</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Google Rankings' : 'Kedudukan Google'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Clients in Labuan' : 'Klien di Labuan'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">180%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Lead Generation' : 'Penjanaan Petunjuk'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' 
              ? 'Why Choose Our SEO Agency in Labuan?' 
              : 'Mengapa Pilih Agensi SEO Kami di Labuan?'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'en' ? benefit.titleEn : benefit.titleMs}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'en' ? benefit.descEn : benefit.descMs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our SEO Services' : 'Perkhidmatan SEO Kami'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Search className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Keyword Research' : 'Penyelidikan Kata Kunci'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Target the right keywords that your Labuan customers are searching for'
                  : 'Sasarkan kata kunci yang betul yang dicari oleh pelanggan Labuan anda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'On-Page SEO' : 'SEO Dalam Halaman'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Optimize your website content, meta tags, and structure for better rankings'
                  : 'Optimumkan kandungan laman web, tag meta, dan struktur untuk kedudukan lebih baik'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Target className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Local SEO' : 'SEO Tempatan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Dominate local search results and attract nearby customers in Labuan'
                  : 'Kuasai hasil carian tempatan dan tarik pelanggan berhampiran di Labuan'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Link Building' : 'Pembinaan Pautan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Build high-quality backlinks to boost your domain authority'
                  : 'Bina pautan balik berkualiti tinggi untuk meningkatkan autoriti domain anda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Technical SEO' : 'SEO Teknikal'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Fix technical issues that prevent search engines from crawling your site'
                  : 'Betulkan masalah teknikal yang menghalang enjin carian dari merangkak laman anda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <TrendingUp className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'SEO Analytics' : 'Analitik SEO'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Track rankings, traffic, and conversions with detailed reporting'
                  : 'Jejaki kedudukan, trafik, dan penukaran dengan laporan terperinci'}
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
