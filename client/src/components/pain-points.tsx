import { useLanguage } from "@/hooks/use-language";
import { AlertCircle, Clock, Users, TrendingDown } from "lucide-react";

export default function PainPoints() {
  const { language } = useLanguage();

  const painPoints = language === 'en' ? [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Losing clients to competitors",
      description: "Other designers with better websites are getting the projects you deserve"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Beautiful work, invisible online",
      description: "Your stunning projects aren't being seen by homeowners searching for designers"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Tire-kickers wasting your time",
      description: "Too many inquiries from people who can't afford your services"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Relying only on referrals",
      description: "When referrals slow down, so does your business. You need a consistent lead flow."
    }
  ] : [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Kehilangan klien kepada pesaing",
      description: "Pereka lain dengan laman web lebih baik mendapat projek yang anda layak"
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Kerja cantik, tidak kelihatan online",
      description: "Projek memukau anda tidak dilihat oleh pemilik rumah yang mencari pereka"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Pembaziran masa dengan prospek tidak serius",
      description: "Terlalu banyak pertanyaan dari orang yang tidak mampu bayar perkhidmatan anda"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Bergantung hanya pada rujukan",
      description: "Apabila rujukan berkurang, perniagaan juga berkurang. Anda perlu aliran prospek yang konsisten."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {language === 'en' 
              ? 'Sound Familiar?' 
              : 'Biasa Dengar?'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'en'
              ? "If you're an interior designer in Selangor or KL, you've probably faced these challenges:"
              : "Jika anda pereka dalaman di Selangor atau KL, anda mungkin pernah hadapi cabaran ini:"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 rounded-xl border border-red-100 dark:border-red-900/30"
              data-testid={`pain-point-${index}`}
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4 text-red-600 dark:text-red-400">
                {point.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-purple-600 dark:text-purple-400">
            {language === 'en'
              ? "We solve all of these. Here's how:"
              : "Kami selesaikan semua ini. Ini caranya:"}
          </p>
        </div>
      </div>
    </section>
  );
}
