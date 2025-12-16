import { useEffect } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Linkedin } from "lucide-react";

export default function PrivacyPolicyPage() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = language === 'en' 
      ? 'Privacy Policy | Yokan Digital' 
      : 'Dasar Privasi | Yokan Digital';
  }, [language]);

  const content = language === 'en' ? {
    title: "Privacy Policy",
    lastUpdated: "Last updated: December 2024",
    intro: "At Yokan Digital, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.",
    sections: [
      {
        title: "Information We Collect",
        content: [
          "Contact information (name, email address, phone number) when you fill out our contact forms or book a consultation",
          "Business information about your interior design studio when you inquire about our services",
          "Website usage data through cookies and analytics tools",
          "Communication records when you interact with us via email, phone, or chat"
        ]
      },
      {
        title: "How We Use Your Information",
        content: [
          "To respond to your inquiries and provide customer support",
          "To deliver the services you have requested",
          "To send you relevant information about our services (with your consent)",
          "To improve our website and services",
          "To comply with legal obligations"
        ]
      },
      {
        title: "Information Sharing",
        content: [
          "We do not sell, trade, or rent your personal information to third parties",
          "We may share information with trusted service providers who assist us in operating our website and conducting our business",
          "We may disclose information when required by law or to protect our rights"
        ]
      },
      {
        title: "Data Security",
        content: [
          "We implement appropriate security measures to protect your personal information",
          "All data transmission is encrypted using SSL technology",
          "Access to personal data is restricted to authorized personnel only"
        ]
      },
      {
        title: "Cookies",
        content: [
          "We use cookies to enhance your browsing experience",
          "Cookies help us understand how you use our website",
          "You can control cookie settings through your browser preferences"
        ]
      },
      {
        title: "Your Rights",
        content: [
          "You have the right to access, correct, or delete your personal data",
          "You can opt out of marketing communications at any time",
          "You can request a copy of your data by contacting us"
        ]
      },
      {
        title: "Contact Us",
        content: [
          "If you have any questions about this privacy policy, please contact us:",
          "Email: hello@yokandigital.com",
          "Phone: +60 11-1302 0107"
        ]
      }
    ]
  } : {
    title: "Dasar Privasi",
    lastUpdated: "Kemas kini terakhir: Disember 2024",
    intro: "Di Yokan Digital, kami menghormati privasi anda dan komited untuk melindungi data peribadi anda. Dasar privasi ini menerangkan bagaimana kami mengumpul, menggunakan, dan melindungi maklumat anda apabila anda melawat laman web kami atau menggunakan perkhidmatan kami.",
    sections: [
      {
        title: "Maklumat Yang Kami Kumpul",
        content: [
          "Maklumat hubungan (nama, alamat e-mel, nombor telefon) apabila anda mengisi borang hubungan atau menempah konsultasi",
          "Maklumat perniagaan tentang studio reka bentuk dalaman anda apabila anda bertanya tentang perkhidmatan kami",
          "Data penggunaan laman web melalui kuki dan alat analitik",
          "Rekod komunikasi apabila anda berinteraksi dengan kami melalui e-mel, telefon, atau sembang"
        ]
      },
      {
        title: "Bagaimana Kami Menggunakan Maklumat Anda",
        content: [
          "Untuk menjawab pertanyaan anda dan menyediakan sokongan pelanggan",
          "Untuk menyampaikan perkhidmatan yang anda minta",
          "Untuk menghantar maklumat berkaitan tentang perkhidmatan kami (dengan persetujuan anda)",
          "Untuk menambah baik laman web dan perkhidmatan kami",
          "Untuk mematuhi kewajipan undang-undang"
        ]
      },
      {
        title: "Perkongsian Maklumat",
        content: [
          "Kami tidak menjual, memperdagangkan, atau menyewakan maklumat peribadi anda kepada pihak ketiga",
          "Kami mungkin berkongsi maklumat dengan penyedia perkhidmatan yang dipercayai yang membantu kami mengendalikan laman web dan perniagaan kami",
          "Kami mungkin mendedahkan maklumat apabila dikehendaki oleh undang-undang atau untuk melindungi hak kami"
        ]
      },
      {
        title: "Keselamatan Data",
        content: [
          "Kami melaksanakan langkah keselamatan yang sesuai untuk melindungi maklumat peribadi anda",
          "Semua penghantaran data disulitkan menggunakan teknologi SSL",
          "Akses kepada data peribadi terhad kepada kakitangan yang diberi kuasa sahaja"
        ]
      },
      {
        title: "Kuki",
        content: [
          "Kami menggunakan kuki untuk meningkatkan pengalaman melayari anda",
          "Kuki membantu kami memahami bagaimana anda menggunakan laman web kami",
          "Anda boleh mengawal tetapan kuki melalui pilihan pelayar anda"
        ]
      },
      {
        title: "Hak Anda",
        content: [
          "Anda berhak untuk mengakses, membetulkan, atau memadam data peribadi anda",
          "Anda boleh memilih keluar daripada komunikasi pemasaran pada bila-bila masa",
          "Anda boleh meminta salinan data anda dengan menghubungi kami"
        ]
      },
      {
        title: "Hubungi Kami",
        content: [
          "Jika anda mempunyai sebarang soalan tentang dasar privasi ini, sila hubungi kami:",
          "E-mel: hello@yokandigital.com",
          "Telefon: +60 11-1302 0107"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Simple Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white hover:text-[#00ff88] transition-colors">
            YOKAN<span className="text-[#00ff88]">.</span>
          </Link>
          <Link href="/">
            <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </nav>
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4" data-testid="privacy-title">
            {content.title}
          </h1>
          <p className="text-gray-500 mb-8">
            {content.lastUpdated}
          </p>
          
          <p className="text-lg text-gray-400 mb-12">
            {content.intro}
          </p>

          <div className="space-y-10">
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-gray-400">
                      <span className="w-2 h-2 bg-[#00ff88] rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Yokan Digital" className="h-6" />
              </div>
              <p className="text-sm text-gray-500 font-mono">
                {language === 'en' ? 'A brand by ACR Digital Ventures' : 'Une marque de ACR Digital Ventures'}
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">{language === 'en' ? 'Contact' : 'Contact'}</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#00ff88] flex-shrink-0" />
                  <span>68 Circular Road, 049422 Singapore</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00ff88] flex-shrink-0" />
                  <a href="tel:+6531637757" className="hover:text-white transition-colors">+65 3163 7757</a>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">{language === 'en' ? 'Links' : 'Liens'}</h4>
              <div className="flex flex-col gap-2">
                <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
                  {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
                </a>
                <a 
                  href="https://linkedin.com/company/yokandigital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-[#00ff88] transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="font-mono text-sm text-gray-600">
              © {new Date().getFullYear()} Yokan Digital. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
