import { useEffect } from "react";
import { Code, Database, Smartphone, CheckCircle2, ArrowRight, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { useLanguage } from "@/hooks/use-language";

export default function LabuanWebDevelopmentPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Web Development in Labuan | Website Development Labuan - Yokan Digital'
      : 'Pembangunan Web di Labuan | Pembangunan Laman Web Labuan - Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Expert web development services in Labuan. Yokan Digital builds powerful, scalable web applications and custom solutions for Labuan businesses. Get advanced functionality and seamless performance.'
        : 'Perkhidmatan pembangunan web pakar di Labuan. Yokan Digital membina aplikasi web berkuasa, boleh skala dan penyelesaian tersuai untuk perniagaan Labuan. Dapatkan fungsi lanjutan dan prestasi lancar.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-teal-900 dark:to-cyan-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'Web Development in Labuan' 
              : 'Pembangunan Web di Labuan'}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Build powerful web applications with cutting-edge technology. Our web developers in Labuan create scalable, secure, and high-performance solutions for your business.'
              : 'Bina aplikasi web berkuasa dengan teknologi terkini. Pembangun web kami di Labuan mencipta penyelesaian boleh skala, selamat, dan berprestasi tinggi untuk perniagaan anda.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="mr-2" />
              {language === 'en' ? 'Start Your Project' : 'Mulakan Projek Anda'}
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
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Apps Developed' : 'Aplikasi Dibangunkan'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Uptime' : 'Masa Aktif'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-cyan-600 mb-2">10+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Years Experience' : 'Tahun Pengalaman'}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Technical Support' : 'Sokongan Teknikal'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {language === 'en' ? 'Our Web Development Services' : 'Perkhidmatan Pembangunan Web Kami'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-green-200 dark:border-green-800">
              <Code className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Custom Web Applications' : 'Aplikasi Web Tersuai'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Tailored web solutions built with modern frameworks like React, Node.js, and more'
                  : 'Penyelesaian web tersuai dibina dengan rangka kerja moden seperti React, Node.js, dan lagi'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Database className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Database Development' : 'Pembangunan Pangkalan Data'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Robust database architecture with PostgreSQL, MongoDB, and MySQL'
                  : 'Seni bina pangkalan data kukuh dengan PostgreSQL, MongoDB, dan MySQL'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Globe className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'API Development' : 'Pembangunan API'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'RESTful APIs and integrations with third-party services'
                  : 'API RESTful dan integrasi dengan perkhidmatan pihak ketiga'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Smartphone className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Progressive Web Apps (PWA)' : 'Aplikasi Web Progresif (PWA)'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'App-like experiences that work offline and load instantly'
                  : 'Pengalaman seperti aplikasi yang berfungsi luar talian dan dimuatkan serta-merta'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <CheckCircle2 className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'E-commerce Platforms' : 'Platform E-dagang'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Full-featured online stores with payment processing and inventory management'
                  : 'Kedai dalam talian berfitur penuh dengan pemprosesan pembayaran dan pengurusan inventori'}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Zap className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Performance Optimization' : 'Pengoptimuman Prestasi'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'en'
                  ? 'Fast loading times, caching strategies, and server optimization'
                  : 'Masa muatan pantas, strategi caching, dan pengoptimuman pelayan'}
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
