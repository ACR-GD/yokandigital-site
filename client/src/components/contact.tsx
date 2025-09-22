import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/hooks/use-language";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    noWebsite: false,
    service: "",
    projectDetails: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your inquiry. We'll contact you within 24 hours.",
        className: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        website: "",
        noWebsite: false,
        service: "",
        projectDetails: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-10 section-title" data-testid="contact-title">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8" data-testid="contact-subtitle">
              {t('contact.subtitle')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/25 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold" data-testid="contact-office-label">
                    {t('contact.office')}
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-office-location">
                    39A, Jalan Meru impian B3, Casa Kayanga Bandar Meru Raya, 30020 Ipoh, Malaysia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/25 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold" data-testid="contact-phone-label">
                    {t('contact.phone')}
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-phone-number">
                    +60 11-3976 5116
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 shadow-lg shadow-rose-500/25 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold" data-testid="contact-email-label">
                    {t('contact.email')}
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-email-address">
                    hello@yokandigital.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form.firstName')}
                  </label>
                  <Input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    required
                    data-testid="input-first-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('form.lastName')}
                  </label>
                  <Input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    required
                    data-testid="input-last-name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.email')}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Website
                </label>
                <Input
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://your-website.com"
                  disabled={formData.noWebsite}
                  data-testid="input-website"
                />
                <div className="flex items-center space-x-2 mt-3">
                  <Checkbox
                    id="no-website"
                    checked={formData.noWebsite}
                    onCheckedChange={(checked) => {
                      handleInputChange('noWebsite', checked as boolean);
                      if (checked) {
                        handleInputChange('website', '');
                      }
                    }}
                    data-testid="checkbox-no-website"
                  />
                  <label htmlFor="no-website" className="text-sm text-muted-foreground cursor-pointer">
                    I don't have a website yet
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.service')}
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger data-testid="select-service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-xl z-50" position="popper" sideOffset={5}>
                    <SelectItem value="web-design">Web Design</SelectItem>
                    <SelectItem value="seo">SEO Services</SelectItem>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                    <SelectItem value="complete-package">Complete Package</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('form.projectDetails')}
                </label>
                <Textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => handleInputChange('projectDetails', e.target.value)}
                  placeholder="Tell us about your project requirements..."
                  data-testid="textarea-project-details"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-lg shadow-rose-500/25 transition-all"
                disabled={contactMutation.isPending}
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : t('button.sendMessage')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
