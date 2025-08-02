import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function About() {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className={`text-3xl md:text-4xl font-bold text-charity-brown-700 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            <Users className="h-8 w-8 md:h-10 md:w-10" />
            {t("about.title")}
          </h1>
          <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>
        </div>

        <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
          <CardContent className="p-0 space-y-6 text-center">
            <p className="text-lg text-charity-cream-100 leading-relaxed">
              {t("about.description")}
            </p>

            <div className="bg-charity-brown-600 p-6 rounded-lg border-r-4 border-charity-brown-400">
              <p className="text-sm text-charity-cream-100">
                {t("home.licenseText")}
              </p>
              <p className="text-sm mt-2">
                <a
                  href="https://cdn.builder.io/o/assets%2F92f5e81ad21d43a6ae57bdb3a5380637%2Fc0ee1d41c24f4ff4896edd1b22fc2c7a?alt=media&token=1f1afcb5-1cc0-4cd0-a5a1-8c3a44dc8f95&apiKey=92f5e81ad21d43a6ae57bdb3a5380637"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:text-charity-cream-100 font-medium"
                >
                  {t("home.licenseLinkText")}
                </a>
              </p>
            </div>

            <div className="pt-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t("about.visionTitle")}
              </h2>
              <p className="text-charity-cream-100">{t("about.visionText")}</p>
            </div>

            <div className="pt-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                {t("about.missionTitle")}
              </h2>
              <p className="text-charity-cream-100">{t("about.missionText")}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
