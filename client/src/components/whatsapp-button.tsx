import { MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const phoneNumber = "601139765116";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp"
    >
      {/* Button with label */}
      <div className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-4 py-3 shadow-2xl transition-all hover:scale-105">
        <SiWhatsapp className="w-6 h-6" />
        <span className="hidden sm:inline font-medium text-sm">WhatsApp</span>
      </div>
    </a>
  );
}
