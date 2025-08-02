import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Instagram,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Heart,
  Menu,
  X,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const navigation = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.impact"), path: "/impact" },
    { name: t("nav.donate"), path: "/donate" },
    { name: t("nav.help"), path: "/help" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-charity-brown-50 to-charity-brown-100"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="bg-charity-warm-50/95 backdrop-blur-sm border-b border-charity-cream-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation Group */}
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="دينار الجمعة"
                  className="h-20 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>

              {/* Navigation */}
              <nav
                className={`hidden md:flex gap-6 ${isRTL ? "space-x-reverse" : ""}`}
              >
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-charity-brown-100 text-charity-brown-600"
                        : "text-gray-700 hover:text-charity-brown-600 hover:bg-charity-cream-100"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Language Switcher (Desktop) */}
            <div className="hidden md:flex">
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button and language switcher */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-charity-brown-600 hover:bg-charity-cream-100 transition-colors"
                aria-label={isRTL ? "فتح القائمة" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-charity-cream-200 bg-charity-warm-50/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? "bg-charity-brown-100 text-charity-brown-600"
                      : "text-gray-700 hover:text-charity-brown-600 hover:bg-charity-cream-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-charity-brown-600 to-charity-brown-700 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Mission Section */}
            <div className="md:col-span-2 text-center md:text-right">
              <div className="mb-6">
                <img
                  src="/logo.png"
                  alt="دينار الجمعة"
                  className="h-18 w-auto mx-auto md:mx-0"
                />
              </div>
              <h3
                className={`text-2xl font-bold text-charity-cream-100 mb-4 ${isRTL ? "arabic-calligraphy" : ""}`}
              >
                {t("footer.title")}
              </h3>
              <p className="text-charity-cream-200 text-lg leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                {t("footer.description")}
              </p>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center bg-charity-brown-500 hover:bg-charity-brown-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <Heart className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                  {t("common.donateNow")}
                </Link>
                <Link
                  to="/help"
                  className="inline-flex items-center justify-center bg-charity-brown-500 hover:bg-charity-brown-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t("common.requestHelp")}
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-right">
              <h4 className="font-bold text-charity-cream-100 text-lg mb-6 border-b border-charity-cream-300 pb-2">
                {t("footer.quickLinks")}
              </h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-charity-cream-200 hover:text-charity-cream-100 transition-colors block py-1 hover:translate-x-1 duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="text-center md:text-right">
              <h4 className="font-bold text-charity-cream-100 text-lg mb-6 border-b border-charity-cream-300 pb-2">
                {t("footer.contactInfo")}
              </h4>
              <div className="space-y-4 text-charity-cream-200">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="h-5 w-5 text-charity-brown-300" />
                  <a
                    href="mailto:admin@dinaraljumaa.com"
                    className="hover:text-charity-cream-100 transition-colors"
                  >
                    admin@dinaraljumaa.com
                  </a>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <p className="text-sm font-medium text-charity-cream-100 mb-3">
                    {t("common.followUs")}
                  </p>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a
                      href="https://www.instagram.com/dinar.aljumaa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-charity-brown-500 hover:bg-charity-brown-600 p-3 rounded-full transition-colors group"
                      title={t("home.instagram")}
                    >
                      <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a
                      href="https://heylink.me/Dinar.Aljumaa/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-charity-brown-500 hover:bg-charity-brown-600 p-3 rounded-full transition-colors group"
                      title={t("home.linkCenter")}
                    >
                      <ExternalLink className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-charity-cream-300/30 mt-12 pt-8 bg-charity-brown-800/50 rounded-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4">
              <div className="text-center md:text-right">
                <p className="text-white font-medium text-sm">
                  {t("footer.allRightsReserved")}
                </p>
              </div>

              <div className="text-center md:text-left">
                <p className="text-charity-cream-100 text-xs">
                  {t("footer.licenseText")}
                </p>
                <a
                  href="https://cdn.builder.io/o/assets%2F92f5e81ad21d43a6ae57bdb3a5380637%2Fc0ee1d41c24f4ff4896edd1b22fc2c7a?alt=media&token=1f1afcb5-1cc0-4cd0-a5a1-8c3a44dc8f95&apiKey=92f5e81ad21d43a6ae57bdb3a5380637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charity-brown-200 hover:text-charity-brown-100 text-xs underline font-medium inline-block mt-1"
                >
                  {t("footer.viewLicense")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
