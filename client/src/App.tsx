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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/web-design" component={WebDesignPage} />
      <Route path="/services/seo" component={SEOServicesPage} />
      <Route path="/services/digital-marketing" component={DigitalMarketingPage} />
      <Route path="/services/complete-package" component={CompletePackagePage} />
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
