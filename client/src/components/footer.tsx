import { Rocket, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";

export default function Footer() {
  const { t } = useLanguage();

  const footerSections = [
    {
      title: t('footer.services'),
      links: [
        { name: "Web Design", href: "#services" },
        { name: "SEO Optimization", href: "#services" }, 
        { name: "Digital Marketing", href: "#services" },
        { name: "E-commerce Solutions", href: "#services" }
      ]
    },
    {
      title: t('footer.company'),
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Case Studies", href: "#portfolio" },
        { name: "Blog", href: "#" }
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        { name: "Free SEO Audit", href: "#tools" },
        { name: "Speed Test", href: "#tools" },
        { name: "Industry Reports", href: "#" },
        { name: "Support", href: "#contact" }
      ]
    },
    {
      title: t('footer.serviceLocations'),
      links: [
        { name: t('footer.webDesignKL'), href: "/services/web-design/kuala-lumpur", isInternal: true },
        { name: t('footer.seoPenang'), href: "/services/seo/penang", isInternal: true },
        { name: t('footer.digitalMarketingJB'), href: "/services/digital-marketing/johor-bahru", isInternal: true },
        { name: t('footer.digitalMarketingLabuan'), href: "/labuan-digital-marketing", isInternal: true },
        { name: t('footer.webDesignSingapore'), href: "/services/web-design/singapore", isInternal: true },
        { name: t('footer.seoSelangor'), href: "/services/seo/selangor", isInternal: true },
        { name: t('footer.marketingIpoh'), href: "/services/digital-marketing/ipoh", isInternal: true }
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
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors" data-testid="link-privacy">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors" data-testid="link-terms">
              {t('footer.terms')}
            </a>
            <a href="https://www.b2blistings.org/" className="text-slate-400 hover:text-white text-sm transition-colors" target="_blank" rel="noopener noreferrer" data-testid="link-b2b">
              B2B Listings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
