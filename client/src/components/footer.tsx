import { Rocket, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";

export default function Footer() {
  const { t, language } = useLanguage();
  
  const footerSections = language === 'en' ? [
    {
      title: "Our Services",
      links: [
        { name: "Portfolio Websites", href: "/services/web-design", isInternal: true },
        { name: "Get Found Locally", href: "/services/seo", isInternal: true }, 
        { name: "Social Media & Ads", href: "/services/digital-marketing", isInternal: true },
        { name: "Complete Growth Package", href: "/services/complete-package", isInternal: true }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about", isInternal: true },
        { name: "Our Team", href: "/team", isInternal: true },
        { name: "Designer Success Stories", href: "#portfolio" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Free Resources",
      links: [
        { name: "Free Website Review", href: "#contact" },
        { name: "Designer Marketing Tips", href: "/blog", isInternal: true },
        { name: "Book a Call", href: "#contact" }
      ]
    },
    {
      title: "Areas We Serve",
      links: [
        { name: "Interior Designers Selangor", href: "#contact" },
        { name: "Interior Designers KL", href: "#contact" },
        { name: "Bangsar & Mont Kiara", href: "#contact" },
        { name: "Damansara & Petaling Jaya", href: "#contact" }
      ]
    }
  ] : [
    {
      title: "Perkhidmatan Kami",
      links: [
        { name: "Laman Web Portfolio", href: "/services/web-design", isInternal: true },
        { name: "Ditemui Secara Tempatan", href: "/services/seo", isInternal: true }, 
        { name: "Media Sosial & Iklan", href: "/services/digital-marketing", isInternal: true },
        { name: "Pakej Pertumbuhan Lengkap", href: "/services/complete-package", isInternal: true }
      ]
    },
    {
      title: "Syarikat",
      links: [
        { name: "Tentang Kami", href: "/about", isInternal: true },
        { name: "Pasukan Kami", href: "/team", isInternal: true },
        { name: "Kisah Kejayaan Pereka", href: "#portfolio" },
        { name: "Hubungi", href: "#contact" }
      ]
    },
    {
      title: "Sumber Percuma",
      links: [
        { name: "Semakan Laman Web Percuma", href: "#contact" },
        { name: "Tips Pemasaran Pereka", href: "/blog", isInternal: true },
        { name: "Tempah Panggilan", href: "#contact" }
      ]
    },
    {
      title: "Kawasan Kami Berkhidmat",
      links: [
        { name: "Pereka Dalaman Selangor", href: "#contact" },
        { name: "Pereka Dalaman KL", href: "#contact" },
        { name: "Bangsar & Mont Kiara", href: "#contact" },
        { name: "Damansara & Petaling Jaya", href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Rocket className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Yokan Digital</h3>
                <p className="text-sm" data-testid="footer-tagline">{t('footer.tagline')}</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6" data-testid="footer-description">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="link-twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-6" data-testid={`footer-section-title-${index}`}>
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {(link as any).isInternal ? (
                      <Link 
                        href={link.href} 
                        className="text-slate-400 hover:text-white transition-colors"
                        data-testid={`footer-link-${index}-${linkIndex}`}
                      >
                        {link.name}
                      </Link>
                    ) : (link as any).isExternal ? (
                      <a 
                        href={link.href} 
                        className="text-slate-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`footer-link-${index}-${linkIndex}`}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a 
                        href={link.href} 
                        className="text-slate-400 hover:text-white transition-colors"
                        data-testid={`footer-link-${index}-${linkIndex}`}
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm" data-testid="footer-copyright">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors" data-testid="link-privacy">
              {t('footer.privacy')}
            </Link>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors" data-testid="link-terms">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
