import { useState } from "react";
import { X, Send, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/hooks/use-language";

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickContactModal({ isOpen, onClose }: QuickContactModalProps) {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/quick-contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: language === 'en' ? "Message Sent!" : "Mesej Dihantar!",
        description: language === 'en' 
          ? "We'll get back to you shortly." 
          : "Kami akan menghubungi anda tidak lama lagi.",
        className: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
      });
      setFormData({ name: "", contact: "", message: "" });
      onClose();
    },
    onError: () => {
      toast({
        title: language === 'en' ? "Error" : "Ralat",
        description: language === 'en' 
          ? "Failed to send message. Please try again." 
          : "Gagal menghantar mesej. Sila cuba lagi.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    contactMutation.mutate(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          data-testid="button-close-modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'en' ? 'Quick Contact' : 'Hubungi Cepat'}
          </h2>
          <p className="text-muted-foreground mt-2">
            {language === 'en' 
              ? "We'll respond within a few hours!" 
              : "Kami akan membalas dalam beberapa jam!"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder={language === 'en' ? "Your Name" : "Nama Anda"}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="text-base"
              data-testid="input-quick-name"
            />
          </div>

          <div>
            <Input
              placeholder={language === 'en' ? "Phone or Email" : "Telefon atau E-mel"}
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
              className="text-base"
              data-testid="input-quick-contact"
            />
          </div>

          <div>
            <Textarea
              placeholder={language === 'en' ? "Your Message (Optional)" : "Mesej Anda (Pilihan)"}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="text-base resize-none"
              data-testid="textarea-quick-message"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg py-6"
            disabled={contactMutation.isPending}
            data-testid="button-submit-quick-contact"
          >
            {contactMutation.isPending ? (
              language === 'en' ? 'Sending...' : 'Menghantar...'
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {language === 'en' ? 'Send Message' : 'Hantar Mesej'}
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-muted-foreground mb-3">
            {language === 'en' ? 'Or contact us directly:' : 'Atau hubungi kami secara langsung:'}
          </p>
          <div className="flex gap-3">
            <a
              href="tel:+60113976511"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium"
              data-testid="link-call-now"
            >
              <Phone className="w-4 h-4" />
              {language === 'en' ? 'Call Now' : 'Panggil'}
            </a>
            <a
              href="mailto:hello@yokandigital.com"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-sm font-medium"
              data-testid="link-email-now"
            >
              <Mail className="w-4 h-4" />
              {language === 'en' ? 'Email' : 'E-mel'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
