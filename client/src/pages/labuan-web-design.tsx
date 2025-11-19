import { useEffect } from "react";
import { Monitor, Code, Smartphone, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanWebDesignPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Web Design in Labuan | Website Design Labuan - Yokan Digital'
      : 'Reka Bentuk Web di Labuan | Reka Bentuk Laman Web Labuan - Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Professional web design services in Labuan. Yokan Digital creates stunning, mobile-responsive websites that convert visitors into customers. Get a custom website for your Labuan business today.'
        : 'Perkhidmatan reka bentuk web profesional di Labuan. Yokan Digital mencipta laman web menakjubkan, responsif mudah alih yang menukar pelawat kepada pelanggan. Dapatkan laman web tersuai untuk perniagaan Labuan anda hari ini.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'Web Design in Labuan' 
              : 'Reka Bentuk Web di Labuan'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Transform your online presence with a professionally designed website. Our web designers in Labuan create beautiful, fast, and conversion-optimized websites for your business.'
              : 'Ubah kehadiran dalam talian anda dengan laman web direka secara profesional. Pereka web kami di Labuan mencipta laman web cantik, pantas, dan dioptimumkan penukaran untuk perniagaan anda.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Monitor className="mr-2" />
              {language === 'en' ? 'Get Your Website' : 'Dapatkan Laman Web Anda'}
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
              <div className="text-3xl font-bold text-cyan-600 mb-2">100+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Websites Launched' : 'Laman Web Dilancarkan'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Client Satisfaction' : 'Kepuasan Klien'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">&lt;2s</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Page Load Time' : 'Masa Muatan Halaman'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Support' : 'Sokongan'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Design Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our Web Design Services' : 'Perkhidmatan Reka Bentuk Web Kami'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-cyan-200 dark:border-cyan-800">
              <Monitor className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Custom Website Design' : 'Reka Bentuk Laman Web Tersuai'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Unique, branded websites tailored to your Labuan business needs'
                  : 'Laman web unik, berjenama disesuaikan dengan keperluan perniagaan Labuan anda'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Mobile-Responsive Design' : 'Reka Bentuk Responsif Mudah Alih'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Perfect display on all devices - desktop, tablet, and mobile'
                  : 'Paparan sempurna di semua peranti - desktop, tablet, dan mudah alih'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Fast Loading Speed' : 'Kelajuan Muatan Pantas'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Optimized for speed to keep visitors engaged and improve SEO'
                  : 'Dioptimumkan untuk kelajuan untuk mengekalkan pelawat terlibat dan meningkatkan SEO'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Code className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'E-commerce Integration' : 'Integrasi E-dagang'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Sell products online with secure payment gateways and shopping carts'
                  : 'Jual produk dalam talian dengan gerbang pembayaran selamat dan troli beli-belah'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'SEO-Friendly Structure' : 'Struktur Mesra SEO'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Built with clean code and SEO best practices for better rankings'
                  : 'Dibina dengan kod bersih dan amalan terbaik SEO untuk kedudukan lebih baik'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Ongoing Support' : 'Sokongan Berterusan'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Regular updates, security patches, and technical support'
                  : 'Kemas kini berkala, tampalan keselamatan, dan sokongan teknikal'}
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
