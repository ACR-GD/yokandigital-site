import { Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";
import { useEffect } from "react";

const antoinePhoto = "/attached_assets/Antoine Clerc-Renaud_1762224512434.JPG";
const amiraPhoto = "/attached_assets/45930746-BF94-401B-A25A-8367FC59B00C_1762237372525.jpg";

interface TeamMember {
  name: string;
  role: {
    en: string;
    ms: string;
  };
  photo: string;
  bio: {
    en: string;
    ms: string;
  };
  skills: string[];
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Antoine Clerc-Renaud",
    role: {
      en: "Founder, CEO & Strategist",
      ms: "Pengasas, CEO & Pakar Strategi"
    },
    photo: antoinePhoto,
    bio: {
      en: "Antoine brings over 10 years of digital marketing expertise to Yokan Digital. As our founder and CEO, he leads our strategic vision and ensures every client receives cutting-edge solutions tailored to the Malaysian market. His passion for innovation drives our team to deliver exceptional results.",
      ms: "Antoine membawa lebih 10 tahun kepakaran pemasaran digital ke Yokan Digital. Sebagai pengasas dan CEO kami, beliau memimpin visi strategik kami dan memastikan setiap klien menerima penyelesaian terkini yang disesuaikan untuk pasaran Malaysia. Semangatnya untuk inovasi mendorong pasukan kami untuk memberikan hasil yang luar biasa."
    },
    skills: ["Digital Strategy", "SEO", "Business Development", "Team Leadership"],
    linkedin: "https://www.linkedin.com/in/antoineclercrenaud/",
    email: "tony@yokandigital.com"
  },
  {
    name: "Amira Natasha",
    role: {
      en: "Admin & Social Media Master",
      ms: "Pentadbir & Pakar Media Sosial"
    },
    photo: amiraPhoto,
    bio: {
      en: "Amira is the organizational force behind Yokan Digital, keeping our operations running smoothly while crafting engaging social media strategies for our clients. Her creative approach to content and meticulous attention to detail ensure both our team and our clients stay on track for success.",
      ms: "Amira adalah kekuatan organisasi di sebalik Yokan Digital, memastikan operasi kami berjalan lancar sambil mencipta strategi media sosial yang menarik untuk klien kami. Pendekatan kreatifnya terhadap kandungan dan perhatian teliti terhadap perincian memastikan kedua-dua pasukan kami dan klien kami kekal di landasan kejayaan."
    },
    skills: ["Social Media Marketing", "Content Creation", "Operations Management", "Community Engagement"],
    linkedin: "https://www.linkedin.com/in/amira-natasha-ahmad-sazali-369644202/",
    email: "social@yokandigital.com"
  }
];

const companyValues = [
  {
    title: { en: "Innovation", ms: "Inovasi" },
    description: { en: "We stay ahead of digital trends to deliver cutting-edge solutions", ms: "Kami sentiasa mendahului trend digital untuk memberikan penyelesaian terkini" },
    icon: "💡"
  },
  {
    title: { en: "Transparency", ms: "Ketelusan" },
    description: { en: "Open communication and honest partnerships with every client", ms: "Komunikasi terbuka dan perkongsian jujur dengan setiap klien" },
    icon: "🤝"
  },
  {
    title: { en: "Results", ms: "Hasil" },
    description: { en: "Data-driven strategies that deliver measurable business growth", ms: "Strategi berasaskan data yang memberikan pertumbuhan perniagaan yang boleh diukur" },
    icon: "📈"
  },
  {
    title: { en: "Partnership", ms: "Perkongsian" },
    description: { en: "Your success is our success - we grow together", ms: "Kejayaan anda adalah kejayaan kami - kami berkembang bersama" },
    icon: "🌟"
  }
];

export default function TeamPage() {
  const { language, t } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Our Team | Yokan Digital - Malaysian Digital Marketing Experts'
      : 'Pasukan Kami | Yokan Digital - Pakar Pemasaran Digital Malaysia';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 
      language === 'en'
        ? 'Meet the Yokan Digital team - expert digital marketers, strategists, and creators dedicated to growing Malaysian businesses online.'
        : 'Kenali pasukan Yokan Digital - pakar pemasaran digital, ahli strategi, dan pencipta yang dedikasi untuk mengembangkan perniagaan Malaysia secara dalam talian.'
    );
    
    return () => {
      document.title = 'Yokan Digital - Malaysian Web Design & SEO Agency';
    };
  }, [language]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Gradient decoration */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' ? 'Meet Our Team' : 'Kenali Pasukan Kami'}
            </h1>
            <p className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
              {language === 'en'
                ? '"Alone we go faster, together we go further"'
                : '"Bersendirian kita lebih pantas, bersama kita lebih jauh"'}
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'The passionate experts behind Yokan Digital, dedicated to transforming Malaysian businesses through innovative digital solutions'
                : 'Pakar bersemangat di sebalik Yokan Digital, dedikasi untuk mengubah perniagaan Malaysia melalui penyelesaian digital yang inovatif'
              }
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border border-purple-100 dark:border-purple-800"
                data-testid={`card-team-member-${index}`}
              >
                {/* Photo */}
                <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-team-member-${index}`}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white" data-testid={`text-member-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4" data-testid={`text-member-role-${index}`}>
                    {member.role[language]}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {member.bio[language]}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-700"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Contact Links */}
                  <div className="flex gap-3">
                    {member.linkedin && (
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          data-testid={`button-linkedin-${index}`}
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`}>
                        <Button 
                          variant="outline" 
                          size="sm"
                          data-testid={`button-email-${index}`}
                        >
                          <Mail className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {language === 'en' ? 'Our Values' : 'Nilai Kami'}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {language === 'en'
                ? 'The principles that guide everything we do'
                : 'Prinsip yang membimbing segala yang kami lakukan'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700"
                data-testid={`card-value-${index}`}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {value.title[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {language === 'en' ? 'Ready to Work With Us?' : 'Bersedia untuk Bekerjasama dengan Kami?'}
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            {language === 'en'
              ? "Let's discuss how we can help your business thrive in the digital world"
              : 'Mari bincang bagaimana kami boleh membantu perniagaan anda berkembang dalam dunia digital'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100"
              data-testid="button-team-get-started"
            >
              <Globe className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Get Started' : 'Mulakan'}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              data-testid="button-team-contact"
            >
              <Mail className="w-5 h-5 mr-2" />
              {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}