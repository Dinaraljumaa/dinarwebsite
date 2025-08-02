import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import {
  CreditCard,
  Cross,
  ShoppingCart,
  Home,
  Car,
  Building,
  Shirt,
  BookOpen,
  FolderOpen,
  BarChart,
  Target,
} from "lucide-react";

export default function Impact() {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  const impactData = [
    {
      icon: CreditCard,
      titleKey: "impact.debtSettlement",
      amount: "219,179",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Cross,
      titleKey: "impact.medicalAid",
      amount: "67,285",
      color: "from-red-500 to-red-600",
    },
    {
      icon: ShoppingCart,
      titleKey: "impact.foodVouchers",
      amount: "58,317",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Home,
      titleKey: "impact.homeSupplies",
      amount: "36,160",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Car,
      titleKey: "impact.vehicles",
      amount: "33,250",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Building,
      titleKey: "impact.rentPayments",
      amount: "31,411",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Shirt,
      titleKey: "impact.clothing",
      amount: "26,129",
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: BookOpen,
      titleKey: "impact.educational",
      amount: "14,016",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: FolderOpen,
      titleKey: "impact.others",
      amount: "14,825",
      color: "from-gray-500 to-gray-600",
    },
  ];

  const totalAmount = "500,572";

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className={`text-3xl md:text-4xl font-bold text-charity-brown-700 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            <Target className="h-8 w-8 md:h-10 md:w-10" />
            {t("impact.title")}
          </h1>
          <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t("impact.subtitle")}
          </p>
        </div>

        {/* Total Impact Card */}
        <div className="mb-12">
          <Card className="p-8 shadow-xl border-charity-brown-300 bg-gradient-to-br from-charity-brown-500 to-charity-brown-600 text-white">
            <CardContent className="p-0 text-center">
              <div className="w-20 h-20 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-10 w-10 text-charity-brown-600" />
              </div>
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${isRTL ? "arabic-calligraphy" : ""}`}
              >
                {t("impact.totalTitle")}
              </h2>
              <div className="text-4xl md:text-5xl font-bold text-charity-cream-100">
                {totalAmount} {t("impact.currency")}
              </div>
              <p className="text-charity-cream-200 mt-4 text-lg">
                {t("impact.since2021")}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {impactData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card
                key={index}
                className="p-6 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-0 text-center text-white">
                  <div className="w-16 h-16 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-charity-brown-600" />
                  </div>
                  <h3
                    className={`font-semibold text-lg mb-3 ${isRTL ? "arabic-calligraphy" : ""}`}
                  >
                    {t(item.titleKey)}
                  </h3>
                  <div className="text-2xl font-bold text-charity-cream-100">
                    {item.amount} {t("impact.currency")}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Description */}
        <div className="text-center">
          <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-600 to-charity-brown-700">
            <CardContent className="p-0">
              <p className="text-charity-cream-100 text-lg leading-relaxed">
                {t("impact.description")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
