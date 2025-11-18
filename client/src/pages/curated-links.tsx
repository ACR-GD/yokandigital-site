import { useEffect } from "react";
import { ExternalLink, BookOpen, TrendingUp, Search, BarChart, Megaphone, Award, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";

export default function CuratedLinksPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Curated Digital Marketing Resources | Yokan Digital'
      : 'Sumber Pemasaran Digital Terpilih | Yokan Digital';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Hand-picked digital marketing resources, tools, and learning materials. Stay updated with the latest trends in SEO, social media marketing, content marketing, and analytics.'
        : 'Sumber pemasaran digital, alat, dan bahan pembelajaran yang dipilih dengan teliti. Kekal terkini dengan trend terkini dalam SEO, pemasaran media sosial, pemasaran kandungan, dan analitik.'
    );

    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  const resourceCategories = [
    {
      icon: Search,
      titleEn: "SEO & Analytics Tools",
      titleMs: "Alat SEO & Analitik",
      color: "from-blue-500 to-indigo-600",
      resources: [
        { name: "Google Search Console", url: "https://search.google.com/search-console", descEn: "Monitor your site's search performance", descMs: "Pantau prestasi carian tapak anda" },
        { name: "Google Analytics", url: "https://analytics.google.com", descEn: "Track website traffic and user behavior", descMs: "Jejak trafik laman web dan tingkah laku pengguna" },
        { name: "Google Trends", url: "https://trends.google.com", descEn: "Discover trending search topics", descMs: "Temui topik carian trending" },
        { name: "Ahrefs Blog", url: "https://ahrefs.com/blog", descEn: "SEO insights and tutorials", descMs: "Pandangan dan tutorial SEO" },
        { name: "Moz SEO Learning Center", url: "https://moz.com/learn/seo", descEn: "Comprehensive SEO education", descMs: "Pendidikan SEO komprehensif" }
      ]
    },
    {
      icon: Megaphone,
      titleEn: "Social Media Marketing",
      titleMs: "Pemasaran Media Sosial",
      color: "from-pink-500 to-rose-600",
      resources: [
        { name: "Meta Business Suite", url: "https://business.facebook.com", descEn: "Manage Facebook and Instagram", descMs: "Urus Facebook dan Instagram" },
        { name: "LinkedIn Marketing Solutions", url: "https://business.linkedin.com/marketing-solutions", descEn: "B2B marketing platform", descMs: "Platform pemasaran B2B" },
        { name: "TikTok for Business", url: "https://www.tiktok.com/business", descEn: "Advertise on TikTok", descMs: "Beriklan di TikTok" },
        { name: "Hootsuite Blog", url: "https://blog.hootsuite.com", descEn: "Social media tips and trends", descMs: "Tips dan trend media sosial" },
        { name: "Buffer Resources", url: "https://buffer.com/resources", descEn: "Social media marketing guides", descMs: "Panduan pemasaran media sosial" }
      ]
    },
    {
      icon: TrendingUp,
      titleEn: "Paid Advertising",
      titleMs: "Pengiklanan Berbayar",
      color: "from-green-500 to-emerald-600",
      resources: [
        { name: "Google Ads", url: "https://ads.google.com", descEn: "Search and display advertising", descMs: "Pengiklanan carian dan paparan" },
        { name: "Facebook Ads Manager", url: "https://www.facebook.com/business/tools/ads-manager", descEn: "Create and manage Facebook ads", descMs: "Cipta dan urus iklan Facebook" },
        { name: "Google Ads Help Center", url: "https://support.google.com/google-ads", descEn: "Official Google Ads documentation", descMs: "Dokumentasi rasmi Google Ads" },
        { name: "WordStream Blog", url: "https://www.wordstream.com/blog", descEn: "PPC and paid search insights", descMs: "Pandangan PPC dan carian berbayar" }
      ]
    },
    {
      icon: BookOpen,
      titleEn: "Content Marketing & Copywriting",
      titleMs: "Pemasaran Kandungan & Penulisan",
      color: "from-purple-500 to-violet-600",
      resources: [
        { name: "Content Marketing Institute", url: "https://contentmarketinginstitute.com", descEn: "Content strategy resources", descMs: "Sumber strategi kandungan" },
        { name: "Copyblogger", url: "https://copyblogger.com", descEn: "Content marketing and copywriting", descMs: "Pemasaran kandungan dan penulisan" },
        { name: "HubSpot Blog", url: "https://blog.hubspot.com", descEn: "Marketing and sales insights", descMs: "Pandangan pemasaran dan jualan" },
        { name: "Neil Patel Blog", url: "https://neilpatel.com/blog", descEn: "Digital marketing tips", descMs: "Tips pemasaran digital" }
      ]
    },
    {
      icon: BarChart,
      titleEn: "Email Marketing",
      titleMs: "Pemasaran E-mel",
      color: "from-orange-500 to-amber-600",
      resources: [
        { name: "Mailchimp Resources", url: "https://mailchimp.com/resources", descEn: "Email marketing guides", descMs: "Panduan pemasaran e-mel" },
        { name: "Campaign Monitor Resources", url: "https://www.campaignmonitor.com/resources", descEn: "Email best practices", descMs: "Amalan terbaik e-mel" },
        { name: "Really Good Emails", url: "https://reallygoodemails.com", descEn: "Email design inspiration", descMs: "Inspirasi reka bentuk e-mel" }
      ]
    },
    {
      icon: Lightbulb,
      titleEn: "Learning & Industry News",
      titleMs: "Pembelajaran & Berita Industri",
      color: "from-cyan-500 to-blue-600",
      resources: [
        { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage", descEn: "Free digital marketing courses", descMs: "Kursus pemasaran digital percuma" },
        { name: "HubSpot Academy", url: "https://academy.hubspot.com", descEn: "Free marketing certifications", descMs: "Pensijilan pemasaran percuma" },
        { name: "Search Engine Journal", url: "https://www.searchenginejournal.com", descEn: "SEO and search marketing news", descMs: "Berita SEO dan pemasaran carian" },
        { name: "Marketing Land", url: "https://martech.org", descEn: "Digital marketing news", descMs: "Berita pemasaran digital" },
        { name: "Think with Google", url: "https://www.thinkwithgoogle.com", descEn: "Marketing insights from Google", descMs: "Pandangan pemasaran dari Google" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-800">
            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {language === 'en' ? 'Hand-Picked Resources' : 'Sumber Terpilih'}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {language === 'en' 
              ? 'Curated Digital Marketing Resources' 
              : 'Sumber Pemasaran Digital Terpilih'}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            {language === 'en'
              ? 'A carefully selected collection of tools, blogs, and learning resources to help you stay ahead in digital marketing. All resources are free or offer free tiers.'
              : 'Koleksi alat, blog, dan sumber pembelajaran yang dipilih dengan teliti untuk membantu anda kekal unggul dalam pemasaran digital. Semua sumber adalah percuma atau menawarkan peringkat percuma.'}
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          {resourceCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {language === 'en' ? category.titleEn : category.titleMs}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <Card 
                      key={resourceIndex}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-300 dark:hover:border-blue-700"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {resource.name}
                          </CardTitle>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        </div>
                        <CardDescription className="text-sm">
                          {language === 'en' ? resource.descEn : resource.descMs}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          data-testid={`link-${resource.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {language === 'en' ? 'Visit Resource' : 'Lawati Sumber'}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'en' 
              ? 'Need Help With Your Digital Marketing?' 
              : 'Perlukan Bantuan Dengan Pemasaran Digital Anda?'}
          </h2>
          <p className="text-xl mb-8 text-white/90">
            {language === 'en'
              ? 'Our team of experts is ready to help you grow your business online. Get a free consultation today.'
              : 'Pasukan pakar kami bersedia membantu anda mengembangkan perniagaan dalam talian. Dapatkan perundingan percuma hari ini.'}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg transition-all transform hover:scale-105"
          >
            {language === 'en' ? 'Get Free Consultation' : 'Dapatkan Perundingan Percuma'}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
