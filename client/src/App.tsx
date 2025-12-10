import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import ChatWidget from "@/components/chat-widget";
import WhatsAppButton from "@/components/whatsapp-button";
import ExitIntentPopup from "@/components/exit-intent-popup";
import Home from "@/pages/home";
import WebDesignPage from "@/pages/web-design";
import SEOServicesPage from "@/pages/seo-services";
import DigitalMarketingPage from "@/pages/digital-marketing";
import CompletePackagePage from "@/pages/complete-package";
import CataloguePage from "@/pages/catalogue";
import LabuanDigitalMarketingPage from "@/pages/labuan-digital-marketing";
import LabuanSEOAgencyPage from "@/pages/labuan-seo-agency";
import LabuanPaidAdsPage from "@/pages/labuan-paid-ads";
import LabuanSocialMediaMarketingPage from "@/pages/labuan-social-media-marketing";
import LabuanFacebookAdsPage from "@/pages/labuan-facebook-ads";
import LabuanTikTokAdsPage from "@/pages/labuan-tiktok-ads";
import LabuanInstagramAdsPage from "@/pages/labuan-instagram-ads";
import LabuanWebDesignPage from "@/pages/labuan-web-design";
import LabuanWebDevelopmentPage from "@/pages/labuan-web-development";
import ToolsPage from "@/pages/tools";
import ServiceLocationPage from "@/pages/service-location";
import BlogPage from "@/pages/blog";
import BlogPostPage from "@/pages/blog-post";
import TeamPage from "@/pages/team";
import AboutPage from "@/pages/about";
import CuratedLinksPage from "@/pages/curated-links";
import MadeInMalaysiaPodcastPage from "@/pages/made-in-malaysia-podcast";
import AdminDashboard from "@/pages/admin-dashboard";
import AdminLogin from "@/pages/admin-login";
import ClientPortal from "@/pages/client-portal";
import PrivacyPolicyPage from "@/pages/privacy-policy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/web-design" component={WebDesignPage} />
      <Route path="/services/seo" component={SEOServicesPage} />
      <Route path="/services/digital-marketing" component={DigitalMarketingPage} />
      <Route path="/services/complete-package" component={CompletePackagePage} />
      <Route path="/catalogue" component={CataloguePage} />
      <Route path="/labuan-digital-marketing" component={LabuanDigitalMarketingPage} />
      <Route path="/labuan-seo-agency" component={LabuanSEOAgencyPage} />
      <Route path="/labuan-paid-ads" component={LabuanPaidAdsPage} />
      <Route path="/labuan-social-media-marketing" component={LabuanSocialMediaMarketingPage} />
      <Route path="/labuan-facebook-ads" component={LabuanFacebookAdsPage} />
      <Route path="/labuan-tiktok-ads" component={LabuanTikTokAdsPage} />
      <Route path="/labuan-instagram-ads" component={LabuanInstagramAdsPage} />
      <Route path="/labuan-web-design" component={LabuanWebDesignPage} />
      <Route path="/labuan-web-development" component={LabuanWebDevelopmentPage} />
      <Route path="/tools" component={ToolsPage} />
      <Route path="/services/:service/:city" component={ServiceLocationPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/resources" component={CuratedLinksPage} />
      <Route path="/podcast" component={MadeInMalaysiaPodcastPage} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/client-portal" component={ClientPortal} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
          <WhatsAppButton />
          <ChatWidget />
          <ExitIntentPopup />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
