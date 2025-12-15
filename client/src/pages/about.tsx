import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { useEffect } from "react";

export default function AboutPage() {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const title = language === 'en' 
      ? 'About Yokan Digital | Revenue Architecture & AI Systems'
      : 'À Propos de Yokan Digital | Architecture Revenue & Systèmes IA';
    document.title = title;
  }, [language]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden relative">
      {/* Kanji Watermark Background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[40vw] font-serif text-gray-900/[0.03] select-none">
          予感
        </span>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" data-testid="logo">
              <img src="/logo.png" alt="Yokan Digital" className="h-8 md:h-10" />
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="/#methodology" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-methodology">
                {t("nav.methodology")}
              </a>
              <a href="/#system" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-system">
                {t("nav.system")}
              </a>
              <a href="/about" className="text-sm text-white transition-colors" data-testid="nav-about">
                {t("nav.about")}
              </a>
              <a href="/#contact" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-contact">
                {t("nav.contact")}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm font-mono border border-white/10 rounded-md overflow-hidden">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 transition-colors ${language === 'en' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
                  data-testid="lang-en"
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 transition-colors ${language === 'fr' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
                  data-testid="lang-fr"
                >
                  FR
                </button>
              </div>
              
              <a href="/#contact">
                <Button 
                  className="hidden sm:flex glitch-effect bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-semibold px-4 py-2 text-sm"
                  data-testid="button-audit-cta"
                >
                  {t("nav.auditCta")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Section A: The Definition (Hero) */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <span className="text-[120px] md:text-[180px] font-serif text-white/90 leading-none">
              予感
            </span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-mono text-[#00ff88] text-lg mb-4"
          >
            {t("about.phonetic")}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl text-gray-400 italic max-w-lg mx-auto"
          >
            {t("about.definitionShort")}
          </motion.p>
        </motion.div>
      </section>

      {/* Section B: The Pivot (The Narrative) */}
      <section className="py-24 relative z-10">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8" data-testid="about-title">
              {t("about.title").split("Prediction").map((part, i) => (
                i === 0 ? (
                  <span key={i}>
                    {part}
                    <span className="glitch-effect text-[#00ff88]" data-text={language === 'en' ? 'Prediction' : 'Prédiction'}>
                      {language === 'en' ? 'Prediction' : 'Prédiction'}
                    </span>
                  </span>
                ) : (
                  <span key={i}>{part}</span>
                )
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t("about.definition")}
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              {t("about.story")}
            </p>
            
            <div className="py-8 text-center">
              <p className="text-2xl md:text-3xl font-bold">
                <span className="text-[#00ff88] glow-text">{t("about.pivot")}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section C: The Mission */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            {/* Old Yokan */}
            <div className="tech-card rounded-2xl p-8 text-center border-red-500/20">
              <p className="font-mono text-sm text-red-400 mb-4">Old Yokan</p>
              <p className="text-3xl font-bold text-gray-500 line-through">
                {t("about.old")}
              </p>
            </div>
            
            {/* New Yokan */}
            <div className="tech-card rounded-2xl p-8 text-center glow-border">
              <p className="font-mono text-sm text-[#00ff88] mb-4">New Yokan</p>
              <p className="text-3xl font-bold text-white">
                {t("about.new")}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-bold text-white mb-12">
              "{t("about.tagline")}"
            </p>
            
            <p className="font-mono text-[#00ff88]">
              — {t("about.founder")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section - Lean by Design */}
      <section className="py-24 relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="team-headline">
              {language === 'en' ? 'Lean by Design.' : 'Légers par Conception.'}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {language === 'en' 
                ? "We practice what we preach. We use Data & AI to run a global firm with minimal headcount. We don't hire bodies; we build systems."
                : "Nous appliquons ce que nous prêchons. Nous utilisons les données et l'IA pour diriger une entreprise mondiale avec un effectif minimal. Nous n'embauchons pas des corps; nous construisons des systèmes."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
            {/* Team Member 1 - Antoine */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center group"
              data-testid="team-member-antoine"
            >
              <div className="mb-6">
                <img 
                  src="https://ui-avatars.com/api/?name=Antoine+Clerc-Renaud&background=0A0A0A&color=00ff88&size=200&font-size=0.35&bold=true"
                  alt="Antoine Clerc-Renaud"
                  className="w-32 h-32 rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Antoine Clerc-Renaud</h3>
              <p className="font-mono text-sm text-[#00ff88] mb-3">
                {language === 'en' ? 'Founder & Lead Systems Architect' : 'Fondateur & Architecte Systèmes Principal'}
              </p>
              <p className="text-sm text-gray-500">
                {language === 'en' 
                  ? 'Specialized in Revenue Architecture, n8n Logic, and Data Strategy.'
                  : "Spécialisé en Architecture Revenue, Logique n8n et Stratégie Data."}
              </p>
            </motion.div>

            {/* Team Member 2 - Tasha */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group"
              data-testid="team-member-tasha"
            >
              <div className="mb-6">
                <img 
                  src="https://ui-avatars.com/api/?name=Tasha&background=0A0A0A&color=00ff88&size=200&font-size=0.35&bold=true"
                  alt="Tasha"
                  className="w-32 h-32 rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Tasha</h3>
              <p className="font-mono text-sm text-[#00ff88] mb-3">
                {language === 'en' ? 'Head of Operations' : 'Directrice des Opérations'}
              </p>
              <p className="text-sm text-gray-500">
                {language === 'en' 
                  ? 'Ensures operational excellence, client delivery, and system integrity.'
                  : "Assure l'excellence opérationnelle, la livraison client et l'intégrité des systèmes."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <a href="/#contact">
              <Button 
                size="lg"
                className="bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-semibold px-8 py-6 text-base pulse-glow"
                data-testid="button-cta"
              >
                {t("cta.button")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#050505] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Yokan Digital" className="h-6" />
              <span className="font-mono text-sm text-gray-600">— {t("footer.tagline")}</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="/privacy-policy" className="text-sm text-gray-600 hover:text-white transition-colors" data-testid="link-privacy">
                {t("footer.privacy")}
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#00ff88] transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            
            <div className="font-mono text-sm text-gray-600">
              {t("footer.copyright")}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
