import { Mail, Instagram, Linkedin, Twitter, TiktokIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-green-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Psykick</h2>
          <p className="text-gray-600 max-w-2xl">
            We are a Singapore company passionate about self-awareness. We created this platform to help people maintain journaling consistency and develop a deeper understanding of themselves through innovative, mood-based journaling techniques.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6 mb-12">
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
            <TiktokIcon className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:contact@psykick.com" className="hover:text-green-600 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="border-t border-green-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 sm:mb-0">© 2024 Psykick. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};