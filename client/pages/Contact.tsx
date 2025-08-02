import { Instagram, ExternalLink, Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Contact() {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className={`text-3xl md:text-4xl font-bold text-charity-brown-600 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            <Phone className="h-8 w-8 md:h-10 md:w-10" />
            {t("contact.title")}
          </h1>
          <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Contact */}
          <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0 text-center space-y-4">
              <div className="w-16 h-16 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-charity-brown-600" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                {t("contact.email")}
              </h2>
              <a
                href="mailto:admin@dinaraljumaa.com"
                className="text-charity-cream-200 hover:underline text-lg font-medium"
              >
                admin@dinaraljumaa.com
              </a>
              <p className="text-charity-cream-100 text-sm">
                {t("contact.emailDesc")}
              </p>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0 text-center space-y-4">
              <div className="w-16 h-16 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto">
                <Instagram className="h-8 w-8 text-charity-brown-600" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                {t("contact.socialMedia")}
              </h2>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/dinar.aljumaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-charity-cream-200 hover:underline font-medium"
                >
                  @dinar.aljumaa
                </a>
                <p className="text-charity-cream-100 text-sm">
                  {t("contact.followInstagram")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Link Hub */}
        <div className="mt-8">
          <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
            <CardContent className="p-0 text-center space-y-4">
              <div className="w-16 h-16 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto">
                <ExternalLink className="h-8 w-8 text-charity-brown-600" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                {t("contact.linkCenter")}
              </h2>
              <a
                href="https://heylink.me/Dinar.Aljumaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charity-cream-200 hover:underline text-lg font-medium"
              >
                heylink.me/Dinar.Aljumaa
              </a>
              <p className="text-charity-cream-100 text-sm"></p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <Card className="p-6 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
            <CardContent className="p-0">
              <p className="text-charity-cream-100">
                {t("contact.additionalInfo")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
