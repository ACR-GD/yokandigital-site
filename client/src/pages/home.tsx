import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Bot, 
  Server, 
  ArrowRight,
  ChevronRight,
  BarChart3,
  Brain,
  Linkedin,
  MapPin,
  Phone
} from "lucide-react";
import { SiPython, SiOpenai, SiGooglecloud, SiN8N } from "react-icons/si";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  const techStack = [
    { name: "Python", icon: SiPython },
    { name: "OpenAI", icon: SiOpenai },
    { name: "Google Cloud", icon: SiGooglecloud },
    { name: "n8n", icon: SiN8N },
    { name: "BigQuery", icon: Database },
    { name: "Looker Studio", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" data-testid="logo">
              <img 
                src="/logo.png" 
                alt="Yokan Digital" 
                className="h-8 md:h-10"
              />
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#methodology" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-methodology">
                {t("nav.methodology")}
              </a>
              <a href="#system" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-system">
                {t("nav.system")}
              </a>
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-about">
                {t("nav.about")}
              </a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors" data-testid="nav-contact">
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
              
              <a href="#contact">
                <Button 
                  className="hidden sm:flex glitch-effect bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-semibold px-4 py-2 text-sm"
                  data-text={t("nav.auditCta")}
                  data-testid="button-audit-cta"
                >
                  {t("nav.auditCta")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative gradient-hero grid-pattern pt-20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="font-mono text-[#00ff88] text-sm mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                {language === 'en' ? 'Revenue Architecture' : 'Architecture Revenue'}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" data-testid="hero-title">
                {t("hero.title")}
              </h1>
              
              <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed" data-testid="hero-subtitle">
                {t("hero.subtitle")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact">
                  <Button 
                    size="lg" 
                    className="bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-semibold px-8 py-6 text-base glow-border"
                    data-testid="button-hero-cta"
                  >
                    {t("hero.cta.primary")}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <a href="#system">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/5 font-semibold px-8 py-6 text-base"
                    data-testid="button-hero-secondary"
                  >
                    {t("hero.cta.secondary")}
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              {/* Abstract Data Visualization */}
              <div className="relative w-full h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-4">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-3 rounded-full bg-[#00ff88]/20"
                        animate={{
                          opacity: [0.2, 1, 0.2],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 border border-white/5 rounded-2xl" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00ff88]/10 via-transparent to-[#00d4ff]/10 rounded-2xl blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section (The Chaos) */}
      <section id="methodology" className="py-24 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-[#00ff88] text-sm mb-4">
              {t("problem.title")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="problem-title">
              {t("problem.subtitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vanity vs Reality */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-4"
            >
              <div className="tech-card rounded-xl p-6 border-red-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <span className="font-mono text-sm text-red-400">{t("problem.vanity.title")}</span>
                </div>
                <p className="font-mono text-gray-500 text-sm">{t("problem.vanity.items")}</p>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#00ff88] rotate-90 md:rotate-0" />
              </div>
              
              <div className="tech-card rounded-xl p-6 glow-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
                  <span className="font-mono text-sm text-[#00ff88]">{t("problem.reality.title")}</span>
                </div>
                <p className="font-mono text-gray-400 text-sm">{t("problem.reality.items")}</p>
              </div>
            </motion.div>

            {/* Manual vs Automation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-4"
            >
              <div className="tech-card rounded-xl p-6 border-orange-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-orange-500/50" />
                  <span className="font-mono text-sm text-orange-400">{t("problem.manual.title")}</span>
                </div>
                <p className="font-mono text-gray-500 text-sm">{t("problem.manual.items")}</p>
              </div>
              
              <div className="flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-[#00ff88] rotate-90 md:rotate-0" />
              </div>
              
              <div className="tech-card rounded-xl p-6 glow-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
                  <span className="font-mono text-sm text-[#00ff88]">{t("problem.automation.title")}</span>
                </div>
                <p className="font-mono text-gray-400 text-sm">{t("problem.automation.items")}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section (The Machine) */}
      <section id="system" className="py-24 bg-[#0A0A0A] relative grid-pattern">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="font-mono text-[#00ff88] text-sm mb-4">
              {t("solution.title")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="solution-title">
              {t("solution.subtitle")}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Pillar 1: Data-First Truth */}
            <motion.div
              variants={fadeInUp}
              className="tech-card rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] data-flow" />
              <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-[#00ff88]" />
              </div>
              <h3 className="text-xl font-bold mb-4" data-testid="pillar-1-title">
                {t("solution.pillar1.title")}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t("solution.pillar1.description")}
              </p>
              <p className="font-mono text-xs text-gray-600">
                {t("solution.pillar1.features")}
              </p>
            </motion.div>

            {/* Pillar 2: AI Autonomy */}
            <motion.div
              variants={fadeInUp}
              className="tech-card rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00d4ff] to-[#00ff88] data-flow" style={{ animationDelay: '1s' }} />
              <div className="w-14 h-14 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center mb-6">
                <Bot className="w-7 h-7 text-[#00d4ff]" />
              </div>
              <h3 className="text-xl font-bold mb-4" data-testid="pillar-2-title">
                {t("solution.pillar2.title")}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t("solution.pillar2.description")}
              </p>
              <p className="font-mono text-xs text-gray-600">
                {t("solution.pillar2.features")}
              </p>
            </motion.div>

            {/* Pillar 3: Scalable Infrastructure */}
            <motion.div
              variants={fadeInUp}
              className="tech-card rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] data-flow" style={{ animationDelay: '2s' }} />
              <div className="w-14 h-14 rounded-xl bg-[#00ff88]/10 flex items-center justify-center mb-6">
                <Server className="w-7 h-7 text-[#00ff88]" />
              </div>
              <h3 className="text-xl font-bold mb-4" data-testid="pillar-3-title">
                {t("solution.pillar3.title")}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t("solution.pillar3.description")}
              </p>
              <p className="font-mono text-xs text-gray-600">
                {t("solution.pillar3.features")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="tech-title">
              {t("tech.title")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t("tech.subtitle")}
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex gap-8 overflow-hidden">
              <motion.div 
                className="flex gap-8 marquee"
                animate={{ x: [0, -1200] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 tech-card rounded-xl p-8 flex flex-col items-center justify-center gap-4 w-40"
                  >
                    <tech.icon className="w-10 h-10 text-gray-400" />
                    <span className="font-mono text-sm text-gray-500">{tech.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-24 bg-[#0A0A0A] relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="font-mono text-[#00ff88] text-sm mb-4">
              {t("founder.title")}
            </div>
            
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center mb-8 glow-border">
              <Brain className="w-16 h-16 text-[#00ff88]" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2" data-testid="founder-name">
              {t("founder.name")}
            </h3>
            <p className="font-mono text-sm text-[#00ff88] mb-6">
              {t("founder.role")}
            </p>
            
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              {t("founder.bio")}
            </p>
            
            <blockquote className="font-mono text-lg text-gray-500 italic">
              "{t("founder.quote")}"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-[#050505] relative grid-pattern">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="cta-title">
              {t("cta.title")}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              {t("cta.subtitle")}
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-12">
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="font-mono text-sm text-[#00ff88]">{t("cta.available")}</span>
            </div>

            <div className="tech-card rounded-2xl p-8 max-w-lg mx-auto glow-border">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder={t("form.name")}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t("form.email")}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={t("form.company")}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#00ff88]/50 focus:outline-none transition-colors"
                    data-testid="input-company"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={t("form.message")}
                    rows={4}
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:border-[#00ff88]/50 focus:outline-none transition-colors resize-none"
                    data-testid="input-message"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-[#00ff88] text-black hover:bg-[#00ff88]/90 font-semibold py-6 text-base pulse-glow"
                  data-testid="button-submit"
                >
                  {t("cta.button")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#050505] border-t border-white/5">
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
                <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors" data-testid="link-privacy">
                  {t("footer.privacy")}
                </a>
                <a 
                  href="https://linkedin.com/company/yokandigital" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-[#00ff88] transition-colors flex items-center gap-2"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="font-mono text-sm text-gray-600">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
