import { Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Newsletter() {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-800">
            <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
              {language === 'en' ? 'Newsletter' : 'Surat Berita'}
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'en' 
              ? 'Stay Updated with Digital Marketing Insights' 
              : 'Kekal Terkini dengan Pandangan Pemasaran Digital'}
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {language === 'en'
              ? 'Get exclusive tips, industry trends, and actionable strategies delivered to your inbox. Join our community of forward-thinking businesses.'
              : 'Dapatkan tips eksklusif, trend industri, dan strategi yang boleh dilaksanakan dihantar ke peti mel anda. Sertai komuniti perniagaan kami yang berpandangan jauh.'}
          </p>
        </div>

        {/* MailerLite Embed Form Container */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div 
            id="mailerlite-form-container" 
            className="mailerlite-embed-form"
            data-testid="newsletter-form"
          >
            {/* MailerLite embed code will go here */}
            <p className="text-center text-gray-500 dark:text-gray-400 italic">
              {language === 'en'
                ? 'Newsletter subscription form will appear here once configured.'
                : 'Borang langganan surat berita akan muncul di sini setelah dikonfigurasi.'}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {language === 'en'
              ? '🔒 We respect your privacy. Unsubscribe anytime.'
              : '🔒 Kami menghormati privasi anda. Berhenti langgan bila-bila masa.'}
          </p>
        </div>
      </div>
    </section>
  );
}
