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
      <div className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-pink-500/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of Malaysian and Singaporean businesses that trust Yokan Digital for their online growth. Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 shadow-lg transition-all transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
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
