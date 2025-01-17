import { Mail, Instagram, Linkedin, Twitter } from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="footer-gradient py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Psykick</h2>
          <p className="text-gray-600 max-w-2xl">
            We are a Singapore company passionate about self-awareness. We created this platform to help people maintain journaling consistency and develop a deeper understanding of themselves through innovative, mood-based journaling techniques.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-6 mb-12">
          <a href="https://www.tiktok.com/@psykickyou/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
            <TikTokIcon />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/_psy.kick_/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/company/psykick-lambda/" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="psykick.hello@gmail.com" className="hover:text-green-600 transition-colors">
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