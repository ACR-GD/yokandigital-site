import { useState, useEffect } from "react";
import { 
  Globe, Search, Megaphone, TrendingUp, Mail, FileText, 
  Zap, Target, Sparkles, Check, X, ArrowRight, Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

interface ServiceItem {
  id: string;
  category: "package" | "web-design" | "seo" | "marketing" | "ads" | "content";
  icon: any;
  titleEn: string;
  titleMs: string;
  descriptionEn: string;
  descriptionMs: string;
  features: {
    en: string[];
    ms: string[];
  };
  addOns?: {
    en: string[];
    ms: string[];
  };
  recommended?: boolean;
  popular?: boolean;
  ctaLink: string;
}

const servicesCatalogue: ServiceItem[] = [
  // PACKAGES
  {
    id: "starter-package",
    category: "package",
    icon: Zap,
    titleEn: "Starter Package",
    titleMs: "Pakej Permulaan",
    descriptionEn: "Perfect starting point for small businesses ready to establish their digital presence",
    descriptionMs: "Titik permulaan sempurna untuk perniagaan kecil yang bersedia untuk mewujudkan kehadiran digital mereka",
    features: {
      en: [
        "5-page professional website (monthly subscription)",
        "Basic SEO optimization",
        "2 blog posts per month",
        "Monthly performance reporting",
        "Email & phone support"
      ],
      ms: [
        "Laman web profesional 5-halaman (langganan bulanan)",
        "Pengoptimuman SEO asas",
        "2 artikel blog setiap bulan",
        "Laporan prestasi bulanan",
        "Sokongan e-mel & telefon"
      ]
    },
    ctaLink: "/services/complete-package#starter"
  },
  {
    id: "professional-package",
    category: "package",
    icon: Target,
    titleEn: "Professional Package",
    titleMs: "Pakej Profesional",
    descriptionEn: "Our most popular package - complete digital presence for growing businesses",
    descriptionMs: "Pakej paling popular kami - kehadiran digital lengkap untuk perniagaan yang berkembang",
    features: {
      en: [
        "15-page custom website with advanced features",
        "Advanced SEO optimization",
        "Social Media Management - 2 platforms",
        "Google Ads management",
        "Weekly performance reporting",
        "Priority support with dedicated account manager"
      ],
      ms: [
        "Laman web tersuai 15-halaman dengan ciri lanjutan",
        "Pengoptimuman SEO lanjutan",
        "Pengurusan Media Sosial - 2 platform",
        "Pengurusan Google Ads",
        "Laporan prestasi mingguan",
        "Sokongan keutamaan dengan pengurus akaun khusus"
      ]
    },
    popular: true,
    ctaLink: "/services/complete-package#professional"
  },
  {
    id: "enterprise-package",
    category: "package",
    icon: Sparkles,
    titleEn: "Enterprise Package",
    titleMs: "Pakej Perusahaan",
    descriptionEn: "For established businesses ready to dominate their market with comprehensive digital solutions",
    descriptionMs: "Untuk perniagaan mantap yang bersedia untuk menguasai pasaran mereka dengan penyelesaian digital komprehensif",
    features: {
      en: [
        "E-commerce website with unlimited pages",
        "Enterprise SEO optimization",
        "Social Media Management - 4 platforms",
        "Google Ads management",
        "Email marketing campaigns",
        "Content marketing - 8 blog posts/month",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      ms: [
        "Laman web e-dagang dengan halaman tanpa had",
        "Pengoptimuman SEO perusahaan",
        "Pengurusan Media Sosial - 4 platform",
        "Pengurusan Google Ads",
        "Kempen pemasaran e-mel",
        "Pemasaran kandungan - 8 artikel blog/bulan",
        "Pengurus akaun khusus",
        "Sokongan keutamaan 24/7"
      ]
    },
    recommended: true,
    ctaLink: "/services/complete-package#enterprise"
  },

  // STANDALONE SERVICES
  {
    id: "web-design-basic",
    category: "web-design",
    icon: Globe,
    titleEn: "5-Page Basic Website",
    titleMs: "Laman Web Asas 5-Halaman",
    descriptionEn: "Professional website perfect for small businesses and startups",
    descriptionMs: "Laman web profesional sempurna untuk perniagaan kecil dan permulaan",
    features: {
      en: [
        "Custom design (no templates)",
        "Mobile-responsive design",
        "Basic SEO setup",
        "Contact forms and integrations",
        "CMS for easy content editing",
        "SSL certificate & security",
        "Hosting included",
        "Regular updates & backups"
      ],
      ms: [
        "Reka bentuk tersuai (tanpa templat)",
        "Reka bentuk responsif mudah alih",
        "Persediaan SEO asas",
        "Borang hubungan dan integrasi",
        "CMS untuk pengeditan kandungan mudah",
        "Sijil SSL & keselamatan",
        "Pengehosan disertakan",
        "Kemas kini & sandaran berkala"
      ]
    },
    addOns: {
      en: [
        "Blog section (additional cost applies)",
        "Multiple languages (additional cost applies)",
        "Booking system (additional cost applies)"
      ],
      ms: [
        "Bahagian blog (kos tambahan dikenakan)",
        "Pelbagai bahasa (kos tambahan dikenakan)",
        "Sistem tempahan (kos tambahan dikenakan)"
      ]
    },
    ctaLink: "/services/web-design"
  },
  {
    id: "web-design-custom",
    category: "web-design",
    icon: Globe,
    titleEn: "10-15 Page Custom Website",
    titleMs: "Laman Web Tersuai 10-15 Halaman",
    descriptionEn: "Advanced custom website with multiple pages and enhanced functionality",
    descriptionMs: "Laman web tersuai lanjutan dengan pelbagai halaman dan fungsi dipertingkat",
    features: {
      en: [
        "All Basic Website features",
        "10-15 custom pages",
        "Advanced integrations",
        "Custom animations & effects",
        "Enhanced performance optimization",
        "Advanced analytics setup",
        "Priority support"
      ],
      ms: [
        "Semua ciri Laman Web Asas",
        "10-15 halaman tersuai",
        "Integrasi lanjutan",
        "Animasi & kesan tersuai",
        "Pengoptimuman prestasi dipertingkat",
        "Persediaan analitik lanjutan",
        "Sokongan keutamaan"
      ]
    },
    addOns: {
      en: [
        "E-commerce functionality (additional cost applies)",
        "Custom animations (additional cost applies)"
      ],
      ms: [
        "Fungsi e-dagang (kos tambahan dikenakan)",
        "Animasi tersuai (kos tambahan dikenakan)"
      ]
    },
    ctaLink: "/services/web-design"
  },
  {
    id: "web-design-ecommerce",
    category: "web-design",
    icon: Globe,
    titleEn: "E-commerce Website",
    titleMs: "Laman Web E-Dagang",
    descriptionEn: "Full-featured online store with payment processing and inventory management",
    descriptionMs: "Kedai dalam talian berpenampilan lengkap dengan pemprosesan pembayaran dan pengurusan inventori",
    features: {
      en: [
        "All Custom Website features",
        "Product catalog management",
        "Shopping cart & checkout",
        "Payment gateway integration",
        "Inventory management system",
        "Order tracking & management",
        "Customer account system",
        "Email notifications",
        "Sales analytics & reporting"
      ],
      ms: [
        "Semua ciri Laman Web Tersuai",
        "Pengurusan katalog produk",
        "Troli beli-belah & pembayaran",
        "Integrasi gerbang pembayaran",
        "Sistem pengurusan inventori",
        "Pengesanan & pengurusan pesanan",
        "Sistem akaun pelanggan",
        "Pemberitahuan e-mel",
        "Analitik jualan & pelaporan"
      ]
    },
    ctaLink: "/services/web-design"
  },

  // SEO SERVICES
  {
    id: "seo-basic",
    category: "seo",
    icon: Search,
    titleEn: "Basic SEO",
    titleMs: "SEO Asas",
    descriptionEn: "Essential SEO optimization for local businesses with one location",
    descriptionMs: "Pengoptimuman SEO penting untuk perniagaan tempatan dengan satu lokasi",
    features: {
      en: [
        "Keyword research & optimization",
        "On-page SEO (meta tags, headers, content)",
        "Local SEO (Google Business Profile)",
        "Monthly ranking reports",
        "Basic link building",
        "Technical SEO audit & fixes"
      ],
      ms: [
        "Penyelidikan & pengoptimuman kata kunci",
        "SEO pada halaman (tag meta, pengepala, kandungan)",
        "SEO tempatan (Profil Perniagaan Google)",
        "Laporan kedudukan bulanan",
        "Pembinaan pautan asas",
        "Audit & pembaikan SEO teknikal"
      ]
    },
    ctaLink: "/services/seo"
  },
  {
    id: "seo-advanced",
    category: "seo",
    icon: Search,
    titleEn: "Advanced SEO",
    titleMs: "SEO Lanjutan",
    descriptionEn: "Comprehensive SEO strategy for competitive markets and multiple locations",
    descriptionMs: "Strategi SEO komprehensif untuk pasaran kompetitif dan pelbagai lokasi",
    features: {
      en: [
        "All Basic SEO features",
        "Competitive analysis",
        "Content strategy & creation",
        "Advanced link building campaign",
        "Multi-location optimization",
        "Conversion rate optimization",
        "Bi-weekly performance calls"
      ],
      ms: [
        "Semua ciri SEO Asas",
        "Analisis persaingan",
        "Strategi & penciptaan kandungan",
        "Kempen pembinaan pautan lanjutan",
        "Pengoptimuman pelbagai lokasi",
        "Pengoptimuman kadar penukaran",
        "Panggilan prestasi dua minggu sekali"
      ]
    },
    popular: true,
    ctaLink: "/services/seo"
  },
  {
    id: "seo-enterprise",
    category: "seo",
    icon: Search,
    titleEn: "Enterprise SEO",
    titleMs: "SEO Perusahaan",
    descriptionEn: "Enterprise-level SEO for large businesses and e-commerce platforms",
    descriptionMs: "SEO peringkat perusahaan untuk perniagaan besar dan platform e-dagang",
    features: {
      en: [
        "All Advanced SEO features",
        "Large-scale content production",
        "International SEO strategy",
        "E-commerce SEO optimization",
        "Advanced technical SEO",
        "Dedicated SEO specialist",
        "Weekly strategy sessions",
        "Custom reporting dashboard"
      ],
      ms: [
        "Semua ciri SEO Lanjutan",
        "Pengeluaran kandungan berskala besar",
        "Strategi SEO antarabangsa",
        "Pengoptimuman SEO e-dagang",
        "SEO teknikal lanjutan",
        "Pakar SEO khusus",
        "Sesi strategi mingguan",
        "Papan pemuka pelaporan tersuai"
      ]
    },
    ctaLink: "/services/seo"
  },

  // SOCIAL MEDIA MANAGEMENT
  {
    id: "social-1-platform",
    category: "marketing",
    icon: Megaphone,
    titleEn: "Social Media - 1 Platform",
    titleMs: "Media Sosial - 1 Platform",
    descriptionEn: "Professional social media management for one platform",
    descriptionMs: "Pengurusan media sosial profesional untuk satu platform",
    features: {
      en: [
        "3-4 posts per week",
        "Content creation & scheduling",
        "Community management",
        "Basic graphics design",
        "Monthly performance report",
        "Hashtag research & strategy"
      ],
      ms: [
        "3-4 siaran seminggu",
        "Penciptaan & penjadualan kandungan",
        "Pengurusan komuniti",
        "Reka bentuk grafik asas",
        "Laporan prestasi bulanan",
        "Penyelidikan & strategi hashtag"
      ]
    },
    addOns: {
      en: [
        "Professional photography (per session, additional cost applies)",
        "Video content (additional cost applies)",
        "Stories/Reels daily (additional cost applies)",
        "Social media ads management (additional cost applies)"
      ],
      ms: [
        "Fotografi profesional (setiap sesi, kos tambahan dikenakan)",
        "Kandungan video (kos tambahan dikenakan)",
        "Stories/Reels harian (kos tambahan dikenakan)",
        "Pengurusan iklan media sosial (kos tambahan dikenakan)"
      ]
    },
    ctaLink: "/services/digital-marketing"
  },
  {
    id: "social-2-platforms",
    category: "marketing",
    icon: Megaphone,
    titleEn: "Social Media - 2 Platforms",
    titleMs: "Media Sosial - 2 Platform",
    descriptionEn: "Manage your presence across two major social platforms",
    descriptionMs: "Uruskan kehadiran anda merentas dua platform sosial utama",
    features: {
      en: [
        "All 1 Platform features × 2",
        "Cross-platform content strategy",
        "Platform-specific optimization",
        "Coordinated posting schedule",
        "Comparative analytics"
      ],
      ms: [
        "Semua ciri 1 Platform × 2",
        "Strategi kandungan merentas platform",
        "Pengoptimuman khusus platform",
        "Jadual siaran diselaraskan",
        "Analitik perbandingan"
      ]
    },
    popular: true,
    ctaLink: "/services/digital-marketing"
  },
  {
    id: "social-3-platforms",
    category: "marketing",
    icon: Megaphone,
    titleEn: "Social Media - 3 Platforms",
    titleMs: "Media Sosial - 3 Platform",
    descriptionEn: "Comprehensive social media presence across three platforms",
    descriptionMs: "Kehadiran media sosial komprehensif merentas tiga platform",
    features: {
      en: [
        "All 2 Platforms features × 3",
        "Multi-platform campaigns",
        "Enhanced content variety",
        "Broader audience reach",
        "Unified brand messaging"
      ],
      ms: [
        "Semua ciri 2 Platform × 3",
        "Kempen pelbagai platform",
        "Kepelbagaian kandungan dipertingkat",
        "Capaian khalayak lebih luas",
        "Mesej jenama bersatu"
      ]
    },
    ctaLink: "/services/digital-marketing"
  },
  {
    id: "social-4-platforms",
    category: "marketing",
    icon: Megaphone,
    titleEn: "Social Media - 4+ Platforms",
    titleMs: "Media Sosial - 4+ Platform",
    descriptionEn: "Maximum social media coverage with daily content across all major platforms",
    descriptionMs: "Liputan media sosial maksimum dengan kandungan harian merentas semua platform utama",
    features: {
      en: [
        "Daily content across all platforms",
        "Advanced community management",
        "Influencer collaboration coordination",
        "Crisis management support",
        "Premium analytics & insights",
        "Quarterly strategy reviews"
      ],
      ms: [
        "Kandungan harian merentas semua platform",
        "Pengurusan komuniti lanjutan",
        "Penyelarasan kerjasama influencer",
        "Sokongan pengurusan krisis",
        "Analitik & pandangan premium",
        "Semakan strategi suku tahunan"
      ]
    },
    ctaLink: "/services/digital-marketing"
  },

  // GOOGLE ADS
  {
    id: "google-ads",
    category: "ads",
    icon: TrendingUp,
    titleEn: "Google Ads Management",
    titleMs: "Pengurusan Google Ads",
    descriptionEn: "Professional Google Ads campaign management to drive qualified traffic and conversions",
    descriptionMs: "Pengurusan kempen Google Ads profesional untuk memacu trafik dan penukaran yang layak",
    features: {
      en: [
        "Campaign strategy & setup",
        "Keyword research & selection",
        "Ad copywriting & A/B testing",
        "Landing page optimization recommendations",
        "Bid management & optimization",
        "Conversion tracking setup",
        "Monthly performance reports",
        "Note: Client pays ad budget separately (minimum ad budget recommended)"
      ],
      ms: [
        "Strategi & persediaan kempen",
        "Penyelidikan & pemilihan kata kunci",
        "Penulisan iklan & ujian A/B",
        "Cadangan pengoptimuman halaman pendaratan",
        "Pengurusan & pengoptimuman bidaan",
        "Persediaan pengesanan penukaran",
        "Laporan prestasi bulanan",
        "Nota: Klien membayar belanjawan iklan secara berasingan (belanjawan iklan minimum disyorkan)"
      ]
    },
    ctaLink: "/services/digital-marketing"
  },

  // EMAIL MARKETING
  {
    id: "email-marketing",
    category: "marketing",
    icon: Mail,
    titleEn: "Email Marketing",
    titleMs: "Pemasaran E-mel",
    descriptionEn: "Strategic email campaigns to nurture leads and drive customer engagement",
    descriptionMs: "Kempen e-mel strategik untuk memupuk petunjuk dan memacu penglibatan pelanggan",
    features: {
      en: [
        "Email campaign strategy",
        "Template design & development",
        "List segmentation",
        "Copywriting & content creation",
        "A/B testing",
        "Automation workflows",
        "Performance analytics",
        "Deliverability optimization"
      ],
      ms: [
        "Strategi kempen e-mel",
        "Reka bentuk & pembangunan templat",
        "Segmentasi senarai",
        "Penulisan & penciptaan kandungan",
        "Ujian A/B",
        "Aliran kerja automasi",
        "Analitik prestasi",
        "Pengoptimuman penghantaran"
      ]
    },
    ctaLink: "/services/digital-marketing"
  },

  // CONTENT MARKETING
  {
    id: "content-2-posts",
    category: "content",
    icon: FileText,
    titleEn: "Content Marketing - 2 Posts/Month",
    titleMs: "Pemasaran Kandungan - 2 Siaran/Bulan",
    descriptionEn: "Regular blog content to boost SEO and establish thought leadership",
    descriptionMs: "Kandungan blog berkala untuk meningkatkan SEO dan mewujudkan kepimpinan pemikiran",
    features: {
      en: [
        "2 SEO-optimized blog posts",
        "Keyword research",
        "Original content (800-1,200 words each)",
        "Images & formatting",
        "Social media promotion snippets"
      ],
      ms: [
        "2 artikel blog dioptimumkan SEO",
        "Penyelidikan kata kunci",
        "Kandungan asal (800-1,200 perkataan setiap satu)",
        "Imej & pemformatan",
        "Coretan promosi media sosial"
      ]
    },
    ctaLink: "/services/digital-marketing"
  },
  {
    id: "content-4-posts",
    category: "content",
    icon: FileText,
    titleEn: "Content Marketing - 4 Posts/Month",
    titleMs: "Pemasaran Kandungan - 4 Siaran/Bulan",
    descriptionEn: "Weekly blog content for consistent audience engagement",
    descriptionMs: "Kandungan blog mingguan untuk penglibatan khalayak yang konsisten",
    features: {
      en: [
        "All 2 Posts features",
        "4 blog posts per month",
        "More comprehensive topics",
        "Better SEO momentum",
        "Quarterly content strategy review"
      ],
      ms: [
        "Semua ciri 2 Siaran",
        "4 artikel blog setiap bulan",
        "Topik lebih komprehensif",
        "Momentum SEO lebih baik",
        "Semakan strategi kandungan suku tahunan"
      ]
    },
    popular: true,
    ctaLink: "/services/digital-marketing"
  },
  {
    id: "content-8-posts",
    category: "content",
    icon: FileText,
    titleEn: "Content Marketing - 8 Posts/Month",
    titleMs: "Pemasaran Kandungan - 8 Siaran/Bulan",
    descriptionEn: "Aggressive content strategy for maximum SEO impact and audience growth",
    descriptionMs: "Strategi kandungan agresif untuk kesan SEO maksimum dan pertumbuhan khalayak",
    features: {
      en: [
        "All 4 Posts features",
        "8 blog posts per month",
        "Diverse content formats (guides, listicles, case studies)",
        "Maximum SEO impact",
        "Content calendar planning",
        "Monthly strategy calls"
      ],
      ms: [
        "Semua ciri 4 Siaran",
        "8 artikel blog setiap bulan",
        "Format kandungan pelbagai (panduan, senarai, kajian kes)",
        "Kesan SEO maksimum",
        "Perancangan kalendar kandungan",
        "Panggilan strategi bulanan"
      ]
    },
    ctaLink: "/services/digital-marketing"
  }
];

export default function CataloguePage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Service Catalogue | Yokan Digital - Digital Marketing Services & Pricing'
      : 'Katalog Perkhidmatan | Yokan Digital - Perkhidmatan Pemasaran Digital & Harga';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Explore Yokan Digital\'s complete service catalogue with transparent pricing. Web design from RM1,200/month, SEO from RM1,500/month, and comprehensive packages from RM2,500/month.'
        : 'Terokai katalog perkhidmatan lengkap Yokan Digital dengan harga telus. Reka bentuk web dari RM1,200/bulan, SEO dari RM1,500/bulan, dan pakej komprehensif dari RM2,500/bulan.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  const filteredServices = activeCategory === "all" 
    ? servicesCatalogue 
    : servicesCatalogue.filter(service => service.category === activeCategory);

  const categories = [
    { id: "all", labelEn: "All Services", labelMs: "Semua Perkhidmatan" },
    { id: "package", labelEn: "Packages", labelMs: "Pakej" },
    { id: "web-design", labelEn: "Web Design", labelMs: "Reka Bentuk Web" },
    { id: "seo", labelEn: "SEO", labelMs: "SEO" },
    { id: "marketing", labelEn: "Marketing", labelMs: "Pemasaran" },
    { id: "ads", labelEn: "Advertising", labelMs: "Pengiklanan" },
    { id: "content", labelEn: "Content", labelMs: "Kandungan" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 px-4 py-2 rounded-full mb-6 border border-purple-200 dark:border-purple-800">
            <Package className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              {language === 'en' ? 'Service Catalogue' : 'Katalog Perkhidmatan'}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {language === 'en' 
              ? 'Complete Digital Solutions for Your Business' 
              : 'Penyelesaian Digital Lengkap untuk Perniagaan Anda'}
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {language === 'en'
              ? 'Discover our comprehensive range of services and packages. Every solution is customized to your unique business needs and goals.'
              : 'Temui rangkaian lengkap perkhidmatan dan pakej kami. Setiap penyelesaian disesuaikan dengan keperluan dan matlamat unik perniagaan anda.'}
          </p>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-4xl">
              <TabsList className="grid grid-cols-3 lg:grid-cols-7 gap-2 bg-white/50 dark:bg-gray-800/50 p-2">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white"
                    data-testid={`filter-${category.id}`}
                  >
                    {language === 'en' ? category.labelEn : category.labelMs}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                    service.recommended 
                      ? 'border-2 border-purple-500 dark:border-purple-400' 
                      : 'border border-gray-200 dark:border-gray-700'
                  }`}
                  data-testid={`card-service-${service.id}`}
                >
                  {service.recommended && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                      {language === 'en' ? 'RECOMMENDED' : 'DISYORKAN'}
                    </div>
                  )}
                  {service.popular && !service.recommended && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                      {language === 'en' ? 'POPULAR' : 'POPULAR'}
                    </div>
                  )}

                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
                        <Icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2" data-testid={`text-service-title-${service.id}`}>
                      {language === 'en' ? service.titleEn : service.titleMs}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {language === 'en' ? service.descriptionEn : service.descriptionMs}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Pricing */}
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                      <p className="text-sm text-muted-foreground mb-1">
                        {language === 'en' ? 'Pricing' : 'Harga'}
                      </p>
                      <p className="text-xl font-bold text-purple-600 dark:text-purple-400" data-testid={`text-pricing-${service.id}`}>
                        {language === 'en' ? 'Contact us for a custom quote' : 'Hubungi kami untuk sebut harga tersuai'}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground">
                        {language === 'en' ? 'What\'s Included:' : 'Apa Yang Disertakan:'}
                      </p>
                      <ul className="space-y-2">
                        {(language === 'en' ? service.features.en : service.features.ms).slice(0, 5).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {(() => {
                        const features = language === 'en' ? service.features.en : service.features.ms;
                        const remaining = features.length - 5;
                        return features.length > 5 && (
                          <p className="text-xs text-muted-foreground italic">
                            {language === 'en' 
                              ? `+${remaining} more features` 
                              : `+${remaining} ciri lagi`}
                          </p>
                        );
                      })()}
                    </div>

                    {/* Add-Ons */}
                    {service.addOns && (
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm font-semibold text-muted-foreground mb-2">
                          {language === 'en' ? 'Optional Add-Ons:' : 'Tambahan Pilihan:'}
                        </p>
                        <ul className="space-y-1">
                          {(language === 'en' ? service.addOns.en : service.addOns.ms).slice(0, 2).map((addon, index) => (
                            <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              <span>{addon}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="pt-0">
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      asChild
                      data-testid={`button-learn-more-${service.id}`}
                    >
                      <a href={service.ctaLink}>
                        {language === 'en' ? 'Learn More' : 'Ketahui Lebih Lanjut'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
                <X className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-xl text-muted-foreground">
                {language === 'en' ? 'No services found in this category' : 'Tiada perkhidmatan dijumpai dalam kategori ini'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' 
              ? 'Not Sure Which Service is Right for You?' 
              : 'Tidak Pasti Perkhidmatan Mana Yang Sesuai untuk Anda?'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'en'
              ? 'Book a free consultation and we\'ll create a custom strategy tailored to your business goals and budget.'
              : 'Tempah perundingan percuma dan kami akan mencipta strategi tersuai yang disesuaikan dengan matlamat dan belanjawan perniagaan anda.'}
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6"
            asChild
            data-testid="button-book-consultation"
          >
            <a href="/#consultation">
              {language === 'en' ? 'Book Free Consultation' : 'Tempah Perundingan Percuma'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
