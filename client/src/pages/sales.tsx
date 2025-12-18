import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crosshair, Brain, Wifi, RefreshCw, ArrowRight, TrendingDown, CheckCircle } from "lucide-react";
import n8nWorkflow from "@assets/1765693919816_1766017219696.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function SalesPage() {
  useEffect(() => {
    document.title = "Build Your Revenue Infrastructure | Yokan Digital";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', 'We build and install your own Autonomous Client Acquisition System in 21 days. For Staffing Agencies & Wealth Management Firms.');
    }
    
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToCalendly = () => {
    const element = document.getElementById('calendly-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutionCards = [
    {
      icon: Crosshair,
      title: "The Market Sniper",
      description: "AI-Driven scraping identifies your Total Addressable Market instantly."
    },
    {
      icon: Brain,
      title: "The Neural Outreach",
      description: "n8n + OpenAI workflows that contact decision makers with human relevance at scale."
    },
    {
      icon: Wifi,
      title: "The Invisible Net",
      description: "Retargeting protocols that recapture the 98% who leave your site."
    },
    {
      icon: RefreshCw,
      title: "The Resurrection Protocol",
      description: "We reactivate your dead CRM data and turn it into pipeline."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white overflow-x-hidden font-sans">
      {/* Logo Only Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a href="/" data-testid="logo-sales">
            <img src="/logo.png" alt="Yokan Digital" className="h-8" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22c55e]/5 rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 mb-8" data-testid="badge-target">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-sm font-mono text-[#22c55e]">For Staffing Agencies & Wealth Management Firms Only</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-mono" data-testid="hero-headline">
            Stop Renting Your Growth.
            <br />
            <span className="text-[#22c55e]">Own The Infrastructure.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build and install your own Autonomous Client Acquisition System in 21 days. No retainers. Just sovereignty.
          </p>

          <Button
            onClick={scrollToCalendly}
            size="lg"
            className="bg-[#22c55e] text-black hover:bg-[#22c55e]/90 font-bold px-10 py-7 text-lg rounded-lg shadow-lg shadow-[#22c55e]/20 hover:shadow-[#22c55e]/40 transition-all duration-300"
            data-testid="button-hero-cta"
          >
            Audit Your Infrastructure
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* Problem Section: The Leaking Bucket */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4" data-testid="problem-headline">
              The <span className="text-red-500">Leaking Bucket</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Most agencies sell you leads. But your problem isn't traffic.
              </p>
              <p className="text-2xl font-semibold text-white mb-6">
                It's <span className="text-red-500">System Failure</span>.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                You are losing <span className="text-[#22c55e] font-mono font-bold">98%</span> of your opportunities because you rely on manual labor and unconnected tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#1e293b] border border-gray-700 rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingDown className="w-8 h-8 text-red-500" />
                <span className="font-mono text-lg text-gray-300">Lost Opportunity Funnel</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-[#22c55e] h-4 rounded-full" style={{ width: '100%' }} />
                  </div>
                  <span className="font-mono text-sm text-gray-400 w-24">100% In</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '40%' }} />
                  </div>
                  <span className="font-mono text-sm text-gray-400 w-24">40% Seen</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-orange-500 h-4 rounded-full" style={{ width: '10%' }} />
                  </div>
                  <span className="font-mono text-sm text-gray-400 w-24">10% Engaged</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-red-500 h-4 rounded-full" style={{ width: '2%' }} />
                  </div>
                  <span className="font-mono text-sm text-gray-400 w-24">2% Converted</span>
                </div>
              </div>
              <p className="mt-6 text-center text-red-400 font-mono text-sm">98% Revenue Left on the Table</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section: The Sovereign Growth OS */}
      <section className="py-24 px-6 bg-[#0f172a] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22c55e]/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4" data-testid="solution-headline">
              The <span className="text-[#22c55e]">Sovereign Growth OS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your complete autonomous acquisition infrastructure
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {solutionCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-[#1e293b] border border-gray-700 rounded-xl p-8 hover:border-[#22c55e]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#22c55e]/10 cursor-default"
                data-testid={`card-solution-${index}`}
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-[#22c55e]/10 rounded-lg group-hover:bg-[#22c55e]/20 transition-colors">
                    <card.icon className="w-8 h-8 text-[#22c55e]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono text-white mb-2">{card.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Engineering Proof Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4" data-testid="engineering-headline">
              We don't do Magic.
              <br />
              <span className="text-[#22c55e]">We do Engineering.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#22c55e]/30 rounded-xl p-4 md:p-8 bg-[#1e293b]/50 shadow-lg shadow-[#22c55e]/5"
          >
            <div className="rounded-lg overflow-hidden border border-gray-700 mb-4">
              <img 
                src={n8nWorkflow} 
                alt="n8n Workflow Automation - AI-powered lead scoring and nurturing system" 
                className="w-full h-auto"
                data-testid="img-n8n-workflow"
              />
            </div>
            <p className="text-gray-400 font-mono text-sm text-center">
              Complex automations running 24/7, installed directly into your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offer & Guarantee Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0f172a] border-2 border-[#22c55e] rounded-2xl p-10 md:p-14 text-center shadow-2xl shadow-[#22c55e]/10"
            data-testid="offer-box"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
              One-Time Investment. <span className="text-[#22c55e]">Lifetime Asset.</span>
            </h2>

            <div className="mb-8">
              <span className="text-6xl md:text-7xl font-bold font-mono text-white">$25,000</span>
              <p className="text-gray-400 mt-2">Implementation Fee</p>
            </div>

            <div className="bg-[#22c55e]/10 border border-[#22c55e]/30 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-[#22c55e]" />
                <span className="text-xl font-bold font-mono text-[#22c55e]">The 90-Day ROI Guarantee</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                If the system doesn't generate $25k in pipeline value within 90 days, we work for free until it does.
              </p>
            </div>

            <Button
              onClick={scrollToCalendly}
              size="lg"
              className="bg-[#22c55e] text-black hover:bg-[#22c55e]/90 font-bold px-10 py-7 text-lg rounded-lg shadow-lg shadow-[#22c55e]/20 hover:shadow-[#22c55e]/40 transition-all duration-300"
              data-testid="button-offer-cta"
            >
              Claim Your Infrastructure
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Calendly Section */}
      <section id="calendly-section" className="py-24 px-6 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4" data-testid="calendly-headline">
              Are you ready to <span className="text-[#22c55e]">build</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Book your Systems Audit. Serious inquiries only.
            </p>

            <div 
              className="calendly-inline-widget bg-[#0f172a] border border-gray-700 rounded-xl overflow-hidden"
              data-url="https://calendly.com/tony-yokandigital/30min"
              style={{ minWidth: '320px', height: '700px' }}
              data-testid="calendly-embed"
            />
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 bg-[#0f172a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-mono text-sm text-gray-600">
            © {new Date().getFullYear()} Yokan Digital. A brand by ACR Digital Ventures.
          </p>
        </div>
      </footer>
    </div>
  );
}
