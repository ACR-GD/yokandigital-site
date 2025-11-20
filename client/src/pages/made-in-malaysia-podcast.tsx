import { useEffect } from "react";
import { Mic, Users, TrendingUp, BookOpen, ArrowRight, Play, Podcast, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function MadeInMalaysiaPodcastPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Made In Malaysia Podcast - Inspiring Malaysian Business Stories | Yokan Digital'
      : 'Podcast Made In Malaysia - Kisah Perniagaan Malaysia Yang Memberi Inspirasi | Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Listen to inspiring stories from Malaysian business owners. Made In Malaysia Podcast features entrepreneurs sharing their journeys, challenges, and successes. Learn from real experiences and grow your business.'
        : 'Dengar kisah inspirasi daripada pemilik perniagaan Malaysia. Podcast Made In Malaysia memaparkan usahawan berkongsi perjalanan, cabaran, dan kejayaan mereka. Belajar daripada pengalaman sebenar dan kembangkan perniagaan anda.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-red-900 dark:to-orange-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-full">
              <Podcast className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'Made In Malaysia Podcast' 
              : 'Podcast Made In Malaysia'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Discover the untold stories of Malaysian entrepreneurs. Real journeys, real challenges, real success. Join us as business owners share their inspiring paths to building successful enterprises in Malaysia.'
              : 'Temui kisah-kisah yang tidak diceritakan tentang usahawan Malaysia. Perjalanan sebenar, cabaran sebenar, kejayaan sebenar. Sertai kami ketika pemilik perniagaan berkongsi laluan inspirasi mereka untuk membina perusahaan berjaya di Malaysia.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-lg px-8"
              data-testid="button-listen-now"
            >
              <Play className="mr-2" />
              {language === 'en' ? 'Listen Now' : 'Dengar Sekarang'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-be-guest"
            >
              {language === 'en' ? 'Be a Guest' : 'Jadi Tetamu'}
              <ArrowRight className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Episodes' : 'Episod'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Business Stories' : 'Kisah Perniagaan'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Listeners' : 'Pendengar'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">5★</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Rating' : 'Penarafan'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {language === 'en' ? 'About the Podcast' : 'Tentang Podcast'}
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                {language === 'en'
                  ? 'Made In Malaysia is more than just a podcast—it\'s a celebration of Malaysian entrepreneurship. We sit down with business owners from across the country to hear their authentic stories: the late nights, the breakthrough moments, the failures that led to success.'
                  : 'Made In Malaysia lebih daripada sekadar podcast—ia adalah perayaan keusahawanan Malaysia. Kami berbual dengan pemilik perniagaan dari seluruh negara untuk mendengar kisah tulen mereka: malam-malam yang lewat, detik kejayaan, kegagalan yang membawa kepada kejayaan.'}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {language === 'en'
                  ? 'Whether you\'re an aspiring entrepreneur, a seasoned business owner, or simply curious about what it takes to build something great in Malaysia, this podcast offers invaluable insights, practical advice, and the inspiration you need to pursue your dreams.'
                  : 'Sama ada anda seorang usahawan bercita-cita tinggi, pemilik perniagaan berpengalaman, atau hanya ingin tahu apa yang diperlukan untuk membina sesuatu yang hebat di Malaysia, podcast ini menawarkan wawasan berharga, nasihat praktikal, dan inspirasi yang anda perlukan untuk mengejar impian anda.'}
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                data-testid="button-subscribe"
              >
                <Mic className="mr-2" />
                {language === 'en' ? 'Subscribe Now' : 'Langgan Sekarang'}
              </Button>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-900 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'en' ? 'Real Entrepreneurs' : 'Usahawan Sebenar'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en'
                        ? 'Hear from successful business owners across all industries'
                        : 'Dengar daripada pemilik perniagaan berjaya merentasi semua industri'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'en' ? 'Actionable Knowledge' : 'Pengetahuan Boleh Dilaksanakan'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en'
                        ? 'Learn strategies you can apply to your own business today'
                        : 'Pelajari strategi yang boleh anda gunakan untuk perniagaan anda hari ini'}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      {language === 'en' ? 'Growth Mindset' : 'Minda Pertumbuhan'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en'
                        ? 'Get inspired to overcome challenges and scale your business'
                        : 'Dapatkan inspirasi untuk mengatasi cabaran dan mengembangkan perniagaan anda'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episodes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Featured Episodes' : 'Episod Pilihan'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Episode 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 h-48 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {language === 'en' ? 'Episode 1' : 'Episod 1'}
                </span>
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' 
                  ? 'From RM5,000 to RM5 Million' 
                  : 'Dari RM5,000 ke RM5 Juta'}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {language === 'en'
                  ? 'How a Penang restaurant owner built a food empire from humble beginnings'
                  : 'Bagaimana pemilik restoran Penang membina empayar makanan dari permulaan yang sederhana'}
              </p>
              <Button variant="outline" size="sm" className="w-full" data-testid="button-listen-episode-1">
                <Play className="mr-2 w-4 h-4" />
                {language === 'en' ? 'Listen' : 'Dengar'}
              </Button>
            </div>

            {/* Episode 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 h-48 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {language === 'en' ? 'Episode 2' : 'Episod 2'}
                </span>
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' 
                  ? 'Tech Startup in Kuching' 
                  : 'Startup Teknologi di Kuching'}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {language === 'en'
                  ? 'A software engineer\'s journey from corporate job to successful SaaS founder'
                  : 'Perjalanan jurutera perisian dari kerja korporat kepada pengasas SaaS yang berjaya'}
              </p>
              <Button variant="outline" size="sm" className="w-full" data-testid="button-listen-episode-2">
                <Play className="mr-2 w-4 h-4" />
                {language === 'en' ? 'Listen' : 'Dengar'}
              </Button>
            </div>

            {/* Episode 3 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-pink-500 to-red-500 h-48 rounded-lg mb-4 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {language === 'en' ? 'Episode 3' : 'Episod 3'}
                </span>
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' 
                  ? 'E-commerce Success in Labuan' 
                  : 'Kejayaan E-dagang di Labuan'}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {language === 'en'
                  ? 'Building a million-ringgit online store selling Malaysian products worldwide'
                  : 'Membina kedai dalam talian berjuta ringgit menjual produk Malaysia ke seluruh dunia'}
              </p>
              <Button variant="outline" size="sm" className="w-full" data-testid="button-listen-episode-3">
                <Play className="mr-2 w-4 h-4" />
                {language === 'en' ? 'Listen' : 'Dengar'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Listen */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Why Listen to Made In Malaysia?' : 'Mengapa Dengar Made In Malaysia?'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 dark:bg-red-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600 dark:text-red-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Learn from Experience' : 'Belajar dari Pengalaman'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Gain insights from entrepreneurs who have been where you are and succeeded'
                  : 'Dapatkan wawasan daripada usahawan yang pernah berada di tempat anda dan berjaya'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Practical Strategies' : 'Strategi Praktikal'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Get actionable tips and proven strategies you can implement immediately'
                  : 'Dapatkan petua boleh dilaksanakan dan strategi terbukti yang boleh anda laksanakan segera'}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-yellow-600 dark:text-yellow-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Stay Inspired' : 'Kekal Terinspirasi'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Fuel your entrepreneurial journey with motivating stories from fellow Malaysians'
                  : 'Semarakkan perjalanan keusahawanan anda dengan kisah memotivasikan daripada rakan Malaysia'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Want to Share Your Story?' : 'Ingin Berkongsi Kisah Anda?'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'en'
              ? 'Are you a Malaysian business owner with an inspiring story? We\'d love to feature you on Made In Malaysia Podcast!'
              : 'Adakah anda pemilik perniagaan Malaysia dengan kisah yang memberi inspirasi? Kami ingin memaparkan anda di Podcast Made In Malaysia!'}
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-apply-guest"
          >
            {language === 'en' ? 'Apply to be a Guest' : 'Mohon untuk Jadi Tetamu'}
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
}
