import { Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";

const antoinePhoto = "/attached_assets/Antoine Clerc-Renaud_1762224512434.JPG";
const edwardPhoto = "/attached_assets/1762235743680_1762240297752.png";
const amiraPhoto = "/attached_assets/45930746-BF94-401B-A25A-8367FC59B00C_1762237372525.jpg";

export default function TeamSection() {
  const { language } = useLanguage();

  const teamMembers = [
    {
      name: "Antoine Clerc-Renaud",
      role: {
        en: "Founder, CEO & Strategist",
        ms: "Pengasas, CEO & Pakar Strategi"
      },
      photo: antoinePhoto,
      bio: {
        en: "Leading Yokan Digital with strategic vision and 10+ years of digital marketing expertise. Passionate about helping Malaysian businesses thrive online.",
        ms: "Memimpin Yokan Digital dengan visi strategik dan lebih 10 tahun kepakaran pemasaran digital. Bersemangat membantu perniagaan Malaysia berkembang dalam talian."
      },
      linkedin: "https://www.linkedin.com/in/antoineclercrenaud/"
    },
    {
      name: "Edward Liang",
      role: {
        en: "Sales Master",
        ms: "Pakar Jualan"
      },
      photo: edwardPhoto,
      bio: {
        en: "Connecting Malaysian businesses with the digital solutions they need. Expert in client relations and market analysis with a consultative approach.",
        ms: "Menghubungkan perniagaan Malaysia dengan penyelesaian digital yang diperlukan. Pakar dalam hubungan klien dan analisis pasaran dengan pendekatan perundingan."
      },
      linkedin: "https://www.linkedin.com/in/edward-liang-2894b8300/"
    },
    {
      name: "Amira Natasha",
      role: {
        en: "Admin & Social Media Master",
        ms: "Pentadbir & Pakar Media Sosial"
      },
      photo: amiraPhoto,
      bio: {
        en: "Keeping operations smooth while crafting engaging social media strategies. Creative content creator with meticulous attention to detail.",
        ms: "Memastikan operasi berjalan lancar sambil mencipta strategi media sosial yang menarik. Pencipta kandungan kreatif dengan perhatian teliti terhadap perincian."
      },
      linkedin: "https://www.linkedin.com/in/amira-natasha-ahmad-sazali-369644202/"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" id="team">
      {/* Background Gradient Decorations */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'en' ? 'Meet Our Team' : 'Kenali Pasukan Kami'}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {language === 'en'
              ? 'The passionate experts driving digital success for Malaysian businesses'
              : 'Pakar bersemangat yang memacu kejayaan digital untuk perniagaan Malaysia'
            }
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-purple-100 dark:border-purple-800"
              data-testid={`card-team-member-${index}`}
            >
              {/* Photo */}
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                <img 
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  data-testid={`img-team-member-${index}`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white" data-testid={`text-member-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-semibold mb-3 text-sm" data-testid={`text-member-role-${index}`}>
                  {member.role[language]}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {member.bio[language]}
                </p>
                {member.linkedin && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    data-testid={`button-linkedin-${index}`}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Team CTA */}
        <div className="text-center">
          <Link href="/team">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
              data-testid="button-view-full-team"
            >
              {language === 'en' ? 'View Full Team' : 'Lihat Pasukan Penuh'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}