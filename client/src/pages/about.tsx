import { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useLanguage } from '../hooks/use-language';
import { Sparkles, Target, TrendingUp, Heart, Zap, Globe, Award } from 'lucide-react';

export default function AboutPage() {
  const { t, language } = useLanguage();

  // Set SEO metadata
  useEffect(() => {
    const title = language === 'en' 
      ? 'About Us - Yokan Digital | European Innovation Meets Malaysian Digital Marketing'
      : 'Tentang Kami - Yokan Digital | Inovasi Eropah Bertemu Pemasaran Digital Malaysia';
    
    const description = language === 'en'
      ? 'Learn about Yokan Digital founder Antoine\'s 10+ years of experience in France and Canada, bringing Japanese business philosophy and European innovation to Malaysian digital marketing. Discover why Yokan means premonition.'
      : 'Ketahui tentang pengasas Yokan Digital, Antoine dengan lebih 10 tahun pengalaman di Perancis dan Kanada, membawa falsafah perniagaan Jepun dan inovasi Eropah ke pemasaran digital Malaysia. Temui mengapa Yokan bermaksud firasat.';

    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update Open Graph tags
    const updateOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateOgTag('og:title', title);
    updateOgTag('og:description', description);
    updateOgTag('og:type', 'website');
    updateOgTag('og:url', window.location.href);

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  const values = [
    {
      icon: Zap,
      titleEn: "Speed & Precision",
      titleMs: "Kelajuan & Ketepatan",
      descEn: "Like Japanese efficiency, we deliver results fast without compromising quality",
      descMs: "Seperti kecekapan Jepun, kami menyampaikan hasil dengan pantas tanpa mengorbankan kualiti"
    },
    {
      icon: Heart,
      titleEn: "Omotenashi Spirit",
      titleMs: "Semangat Omotenashi",
      descEn: "Anticipating your needs before you ask—this is true customer service",
      descMs: "Menjangka keperluan anda sebelum anda bertanya—inilah perkhidmatan pelanggan sebenar"
    },
    {
      icon: Target,
      titleEn: "Kaizen Mindset",
      titleMs: "Minda Kaizen",
      descEn: "Continuous improvement in every campaign, every strategy, every result",
      descMs: "Penambahbaikan berterusan dalam setiap kempen, setiap strategi, setiap hasil"
    },
    {
      icon: Award,
      titleEn: "Monozukuri Excellence",
      titleMs: "Kecemerlangan Monozukuri",
      descEn: "Craftsmanship in digital—we build campaigns with artisan-level attention to detail",
      descMs: "Ketukangan dalam digital—kami membina kempen dengan perhatian terhadap perincian peringkat artisan"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 px-4 py-2 rounded-full mb-6 border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                {language === 'en' ? 'About Yokan Digital' : 'Tentang Yokan Digital'}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              {language === 'en' 
                ? 'Bringing Global Innovation to Malaysian Digital Marketing' 
                : 'Membawa Inovasi Global ke Pemasaran Digital Malaysia'}
            </h1>
            
            <p className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              {language === 'en'
                ? '"Alone we go faster, together we go further"'
                : '"Bersendirian kita lebih pantas, bersama kita lebih jauh"'}
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === 'en'
                ? 'Where European expertise meets Japanese precision in the heart of Southeast Asia'
                : 'Di mana kepakaran Eropah bertemu dengan ketepatan Jepun di tengah-tengah Asia Tenggara'}
            </p>
          </div>
        </div>
      </section>

      {/* Why Yokan Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {language === 'en' ? 'Why "Yokan"?' : 'Mengapa "Yokan"?'}
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  {language === 'en'
                    ? 'Yokan (予感) is a Japanese word meaning "premonition" or "omen"—the ability to sense what\'s coming before it arrives.'
                    : 'Yokan (予感) adalah perkataan Jepun yang bermaksud "firasat" atau "pertanda"—keupayaan untuk merasakan apa yang akan datang sebelum ia tiba.'}
                </p>
                
                <p>
                  {language === 'en'
                    ? 'In today\'s fast-paced digital world, success belongs to those who can anticipate trends, predict consumer behavior, and position brands ahead of the curve. We don\'t just react to the market—we help you see what\'s coming next.'
                    : 'Dalam dunia digital yang pantas hari ini, kejayaan adalah milik mereka yang boleh menjangka trend, meramal tingkah laku pengguna, dan meletakkan jenama lebih awal. Kami bukan sahaja bertindak balas kepada pasaran—kami membantu anda melihat apa yang akan datang.'}
                </p>
                
                <p className="font-semibold text-purple-600 dark:text-purple-400">
                  {language === 'en'
                    ? 'Our mission is to give Malaysian businesses that same premonition—the foresight to lead, not follow.'
                    : 'Misi kami adalah untuk memberikan perniagaan Malaysia firasat yang sama—kebijaksanaan untuk memimpin, bukan mengikut.'}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'en' ? 'Global Perspective' : 'Perspektif Global'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'en'
                          ? 'Methods proven in Europe and Canada, adapted for Malaysian success'
                          : 'Kaedah yang terbukti di Eropah dan Kanada, disesuaikan untuk kejayaan Malaysia'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'en' ? 'Latest Innovations' : 'Inovasi Terkini'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'en'
                          ? 'Cutting-edge strategies from international markets, delivered locally'
                          : 'Strategi terkini dari pasaran antarabangsa, disampaikan secara tempatan'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {language === 'en' ? 'Japanese Precision' : 'Ketepatan Jepun'}
                      </h3>
                      <p className="text-muted-foreground">
                        {language === 'en'
                          ? 'Meticulous attention to detail in every campaign we craft'
                          : 'Perhatian teliti terhadap perincian dalam setiap kempen yang kami buat'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100 dark:border-purple-900">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === 'en' ? 'Meet Antoine' : 'Kenali Antoine'}
              </h2>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                {language === 'en' ? 'Founder & CEO' : 'Pengasas & Ketua Pegawai Eksekutif'}
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                {language === 'en'
                  ? 'With over 10 years of experience transforming brands in France and Canada, Antoine brings a unique blend of European creativity and North American data-driven strategy to Malaysian digital marketing.'
                  : 'Dengan lebih 10 tahun pengalaman mengubah jenama di Perancis dan Kanada, Antoine membawa gabungan unik kreativiti Eropah dan strategi berasaskan data Amerika Utara kepada pemasaran digital Malaysia.'}
              </p>
              
              <p>
                {language === 'en'
                  ? 'Having worked with Fortune 500 companies in Paris and Toronto, Antoine witnessed firsthand how the most successful brands stay ahead—not by following trends, but by predicting them. This insight became the foundation of Yokan Digital.'
                  : 'Setelah bekerja dengan syarikat Fortune 500 di Paris dan Toronto, Antoine menyaksikan sendiri bagaimana jenama paling berjaya kekal di hadapan—bukan dengan mengikut trend, tetapi dengan meramalnya. Wawasan ini menjadi asas Yokan Digital.'}
              </p>
              
              <p>
                {language === 'en'
                  ? 'Inspired by Japanese business philosophy—where precision, patience, and continuous improvement (Kaizen) drive excellence—Antoine moved to Malaysia to combine these global best practices with deep local market understanding.'
                  : 'Diilhamkan oleh falsafah perniagaan Jepun—di mana ketepatan, kesabaran, dan penambahbaikan berterusan (Kaizen) memacu kecemerlangan—Antoine berpindah ke Malaysia untuk menggabungkan amalan terbaik global ini dengan pemahaman pasaran tempatan yang mendalam.'}
              </p>
              
              <p className="font-semibold text-foreground">
                {language === 'en'
                  ? '"Malaysia is at a digital crossroads. The businesses that will dominate the next decade are being built today. Yokan Digital exists to ensure our clients are among them."'
                  : '"Malaysia berada di persimpangan digital. Perniagaan yang akan mendominasi dekad seterusnya sedang dibina hari ini. Yokan Digital wujud untuk memastikan pelanggan kami adalah antara mereka."'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Work Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              {language === 'en' 
                ? 'The Japanese Way in a Fast-Paced World' 
                : 'Cara Jepun dalam Dunia Pantas'}
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              {language === 'en'
                ? 'In an era of "move fast and break things," Japanese business wisdom offers a smarter path: move deliberately and build things that last.'
                : 'Dalam era "bergerak pantas dan pecahkan sesuatu," kebijaksanaan perniagaan Jepun menawarkan jalan yang lebih bijak: bergerak dengan sengaja dan bina sesuatu yang berkekalan.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'en' ? value.titleEn : value.titleMs}
                </h3>
                <p className="text-purple-100 text-lg">
                  {language === 'en' ? value.descEn : value.descMs}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'While others chase viral moments, we build sustainable growth. While competitors focus on quick wins, we create lasting market positions. This is the Yokan difference.'
                : 'Sementara yang lain mengejar detik viral, kami membina pertumbuhan mampan. Sementara pesaing fokus pada kemenangan pantas, kami mencipta kedudukan pasaran yang berkekalan. Inilah perbezaan Yokan.'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' 
              ? 'Ready to See What\'s Coming Next?' 
              : 'Bersedia untuk Melihat Apa yang Akan Datang?'}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {language === 'en'
              ? 'Let\'s build your brand\'s future together—with the foresight to lead your industry.'
              : 'Mari bina masa depan jenama anda bersama—dengan kebijaksanaan untuk memimpin industri anda.'}
          </p>
          <button 
            onClick={() => window.location.href = '/#contact'}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 transition-all text-lg"
            data-testid="button-contact-us"
          >
            {language === 'en' ? 'Get Started Today' : 'Mulakan Hari Ini'}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
