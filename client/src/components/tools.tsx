import { useState } from "react";
import { SearchCode, Gauge, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/hooks/use-language";

export default function Tools() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [seoUrl, setSeoUrl] = useState("");
  const [speedUrl, setSpeedUrl] = useState("");
  const [consultation, setConsultation] = useState({ name: "", email: "" });

  const seoAuditMutation = useMutation({
    mutationFn: async (url: string) => {
      const response = await apiRequest("POST", "/api/seo-audit", { url });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "SEO Audit Complete",
        description: `Website score: ${data.audit.score}/100. Check your email for detailed results.`,
      });
      setSeoUrl("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to analyze website. Please check the URL and try again.",
        variant: "destructive",
      });
    },
  });

  const speedTestMutation = useMutation({
    mutationFn: async (url: string) => {
      const response = await apiRequest("POST", "/api/speed-test", { url });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Speed Test Complete",
        description: `Load time: ${data.test.loadTime}, Performance score: ${data.test.performanceScore}/100`,
      });
      setSpeedUrl("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to test website speed. Please check the URL and try again.",
        variant: "destructive",
      });
    },
  });

  const consultationMutation = useMutation({
    mutationFn: async (data: { name: string; email: string }) => {
      const response = await apiRequest("POST", "/api/consultation", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Booked",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
      setConsultation({ name: "", email: "" });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to book consultation. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSeoAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (seoUrl.trim()) {
      seoAuditMutation.mutate(seoUrl.trim());
    }
  };

  const handleSpeedTest = (e: React.FormEvent) => {
    e.preventDefault();
    if (speedUrl.trim()) {
      speedTestMutation.mutate(speedUrl.trim());
    }
  };

  const handleConsultation = (e: React.FormEvent) => {
    e.preventDefault();
    if (consultation.name.trim() && consultation.email.trim()) {
      consultationMutation.mutate(consultation);
    }
  };

  return (
    <section id="tools" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="tools-title">
            {t('tools.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="tools-subtitle">
            {t('tools.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* SEO Audit Tool */}
          <div className="tool-interactive bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25 rounded-lg flex items-center justify-center mb-6">
              <SearchCode className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="tool-seo-title">
              {t('tools.seoAudit.title')}
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="tool-seo-description">
              {t('tools.seoAudit.description')}
            </p>
            
            <form onSubmit={handleSeoAudit} className="space-y-4">
              <Input
                type="url"
                placeholder={t('form.url')}
                value={seoUrl}
                onChange={(e) => setSeoUrl(e.target.value)}
                className="w-full"
                required
                data-testid="input-seo-url"
              />
              <Button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={seoAuditMutation.isPending}
                data-testid="button-analyze-website"
              >
                {seoAuditMutation.isPending ? "Analyzing..." : t('button.analyze')}
              </Button>
            </form>
          </div>

          {/* Website Speed Checker */}
          <div className="tool-interactive bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/25 rounded-lg flex items-center justify-center mb-6">
              <Gauge className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="tool-speed-title">
              {t('tools.speedTest.title')}
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="tool-speed-description">
              {t('tools.speedTest.description')}
            </p>
            
            <form onSubmit={handleSpeedTest} className="space-y-4">
              <Input
                type="url"
                placeholder={t('form.websiteUrl')}
                value={speedUrl}
                onChange={(e) => setSpeedUrl(e.target.value)}
                className="w-full"
                required
                data-testid="input-speed-url"
              />
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={speedTestMutation.isPending}
                data-testid="button-test-speed"
              >
                {speedTestMutation.isPending ? "Testing..." : t('button.testSpeed')}
              </Button>
            </form>
          </div>

          {/* Business Consultation Booking */}
          <div className="tool-interactive bg-card p-8 rounded-xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 shadow-lg shadow-amber-500/25 rounded-lg flex items-center justify-center mb-6">
              <CalendarCheck className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4" data-testid="tool-consultation-title">
              {t('tools.consultation.title')}
            </h3>
            <p className="text-muted-foreground mb-6" data-testid="tool-consultation-description">
              {t('tools.consultation.description')}
            </p>
            
            <form onSubmit={handleConsultation} className="space-y-4">
              <Input
                type="text"
                placeholder={t('form.name')}
                value={consultation.name}
                onChange={(e) => setConsultation(prev => ({ ...prev, name: e.target.value }))}
                className="w-full"
                required
                data-testid="input-consultation-name"
              />
              <Input
                type="email"
                placeholder={t('form.email')}
                value={consultation.email}
                onChange={(e) => setConsultation(prev => ({ ...prev, email: e.target.value }))}
                className="w-full"
                required
                data-testid="input-consultation-email"
              />
              <Button 
                type="submit" 
                className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                disabled={consultationMutation.isPending}
                data-testid="button-book-session"
              >
                {consultationMutation.isPending ? "Booking..." : t('button.bookSession')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
