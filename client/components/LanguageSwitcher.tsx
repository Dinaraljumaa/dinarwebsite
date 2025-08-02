import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-charity-brown-600 hover:bg-charity-cream-100 rounded-md transition-colors"
      title={t("common.language")}
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">
        {language === "ar" ? "English" : "العربية"}
      </span>
    </button>
  );
}
