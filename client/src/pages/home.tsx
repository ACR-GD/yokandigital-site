import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Tools from "@/components/tools";
import Pricing from "@/components/pricing";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Tools />
      <Pricing />
      <Portfolio />
      <div className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join hundreds of Malaysian businesses that trust Yokan Digital for their online growth. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-colors">
              Start Your Project
            </button>
            <button className="border border-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
