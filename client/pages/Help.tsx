import { ExternalLink, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Help() {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className={`text-3xl md:text-4xl font-bold text-charity-brown-600 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            <ClipboardList className="h-8 w-8 md:h-10 md:w-10" />
            {t("help.title")}
          </h1>
          <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>
        </div>

        <div className="space-y-8">
          <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
            <CardContent className="p-0 text-center space-y-6">
              <p className="text-lg text-charity-cream-100 leading-relaxed">
                {t("help.description")}
              </p>

              {/* PDF Form Download */}
              <div className="bg-charity-brown-300 p-6 rounded-xl shadow-lg border-2 border-charity-brown-200 mb-6">
                <h3 className="text-lg font-semibold text-white mb-6 text-center">
                  {t("help.formTitle")}
                </h3>
                <div className="text-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-charity-brown-500 hover:bg-charity-brown-600 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                    onClick={() =>
                      window.open(
                        "/help.pdf",
                        "_blank",
                      )
                    }
                  >
                    {t("help.downloadPDF")}
                    <ExternalLink
                      className={`h-5 w-5 ${isRTL ? "mr-3" : "ml-3"}`}
                    />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
            <CardContent className="p-0">
              <h2 className="text-xl font-semibold text-white mb-4 text-center">
                {t("help.guidelinesTitle")}
              </h2>
              <ul className="space-y-3 text-charity-cream-100">
                <li
                  className={`flex items-start gap-3 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <span className="text-charity-cream-200 font-bold">•</span>
                  <span>{t("help.guideline1")}</span>
                </li>
                <li
                  className={`flex items-start gap-3 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <span className="text-charity-cream-200 font-bold">•</span>
                  <span>{t("help.guideline2")}</span>
                </li>
                <li
                  className={`flex items-start gap-3 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <span className="text-charity-cream-200 font-bold">•</span>
                  <span>{t("help.guideline3")}</span>
                </li>
                <li
                  className={`flex items-start gap-3 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <span className="text-charity-cream-200 font-bold">•</span>
                  <span>{t("help.guideline4")}</span>
                </li>
                <li
                  className={`flex items-start gap-3 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <span className="text-charity-cream-200 font-bold">•</span>
                  <span>{t("help.guideline5")}</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
            <CardContent className="p-0">
              <h2 className="text-xl font-semibold text-white mb-4 text-center">
                {t("help.helpTypesTitle")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-4 bg-charity-brown-300 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">
                    {t("help.financialHelp")}
                  </h3>
                  <p className="text-sm text-charity-cream-200">
                    {t("help.financialHelpDesc")}
                  </p>
                </div>
                <div className="text-center p-4 bg-charity-brown-300 rounded-lg">
                  <h3 className="font-semibold text-white mb-2">
                    {t("help.inKindHelp")}
                  </h3>
                  <p className="text-sm text-charity-cream-200">
                    {t("help.inKindHelpDesc")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-charity-brown-600 text-sm">
              {t("help.additionalQuestions")}
              <a
                href="mailto:admin@dinaraljumaa.com"
                className={`text-charity-brown-700 hover:underline ${isRTL ? "mr-1" : "ml-1"}`}
              >
                admin@dinaraljumaa.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
