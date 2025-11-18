import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import Home from "@/pages/home";
import WebDesignPage from "@/pages/web-design";
import SEOServicesPage from "@/pages/seo-services";
import DigitalMarketingPage from "@/pages/digital-marketing";
import CompletePackagePage from "@/pages/complete-package";
import CataloguePage from "@/pages/catalogue";
import LabuanDigitalMarketingPage from "@/pages/labuan-digital-marketing";
import ServiceLocationPage from "@/pages/service-location";
import BlogPage from "@/pages/blog";
import BlogPostPage from "@/pages/blog-post";
import TeamPage from "@/pages/team";
import AboutPage from "@/pages/about";
import CuratedLinksPage from "@/pages/curated-links";
import AdminDashboard from "@/pages/admin-dashboard";
import AdminLogin from "@/pages/admin-login";
import ClientPortal from "@/pages/client-portal";
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
      <Route path="/services/:service/:city" component={ServiceLocationPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/resources" component={CuratedLinksPage} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin" component={AdminDashboard} />
      <Route path="/client-portal" component={ClientPortal} />
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
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
