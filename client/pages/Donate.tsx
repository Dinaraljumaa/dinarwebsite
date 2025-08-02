import { useState } from "react";
import {
  Heart,
  ExternalLink,
  CreditCard,
  Banknote,
  Smartphone,
  Copy,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Donate() {
  const [copiedIban, setCopiedIban] = useState(false);
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-charity-brown-50 via-charity-brown-75 to-charity-brown-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-charity-brown-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-charity-brown-300 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-charity-brown-200 rounded-full opacity-25 animate-ping"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Quranic Verse */}
          <div className="mb-12 bg-gradient-to-br from-charity-brown-100/90 to-charity-brown-200/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-charity-brown-300">
            <p className="text-charity-brown-600 font-medium text-lg mb-4">
              {t("donate.verseIntro")}
            </p>
            <div
              className={`text-charity-brown-700 text-xl md:text-2xl leading-relaxed font-semibold mb-4 max-w-3xl mx-auto ${isRTL ? "arabic-calligraphy" : ""}`}
            >
              {t("donate.quranicVerse")}
            </div>
            <div className="w-16 h-1 bg-charity-brown-400 mx-auto"></div>
          </div>

          <div className="inline-flex items-center gap-2 bg-charity-brown-200 text-charity-brown-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="h-4 w-4" />
            <span>{t("donate.bePartOfChange")}</span>
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold text-charity-brown-600 mb-6 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            {t("donate.title")}
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("donate.subtitle")}
          </p>
        </div>
      </section>

      {/* Banking Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-charity-brown-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold text-charity-brown-600 mb-6 ${isRTL ? "arabic-calligraphy" : ""}`}
            >
              {t("donate.bankingTitle")}
            </h2>
            <div className="w-24 h-1 bg-charity-brown-400 mx-auto"></div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Payment Methods */}
            <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-charity-brown-200 rounded-full flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-charity-brown-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {t("donate.paymentMethods")}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border-2 border-charity-brown-200 rounded-lg hover:border-charity-brown-100 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <Banknote className="h-8 w-8 text-charity-cream-100" />
                      <div>
                        <h4 className="font-semibold text-white">
                          {t("donate.bankTransfer")}
                        </h4>
                        <p className="text-sm text-charity-cream-200">
                          {t("donate.bankTransferDesc")}
                        </p>
                      </div>
                    </div>
                    <div className="bg-charity-brown-300 p-3 rounded-lg border border-charity-brown-200">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xs text-charity-cream-200 block">
                            IBAN:
                          </span>
                          <span className="font-bold font-mono text-white">
                            BH26ALSA00780214150001
                          </span>
                        </div>
                        <button
                          onClick={() => {
                            const iban = "BH26ALSA00780214150001";
                            navigator.clipboard
                              .writeText(iban)
                              .then(() => {
                                setCopiedIban(true);
                                setTimeout(() => setCopiedIban(false), 2000);
                              })
                              .catch(() => {
                                // Fallback method
                                const textArea =
                                  document.createElement("textarea");
                                textArea.value = iban;
                                document.body.appendChild(textArea);
                                textArea.select();
                                document.execCommand("copy");
                                document.body.removeChild(textArea);
                                setCopiedIban(true);
                                setTimeout(() => setCopiedIban(false), 2000);
                              });
                          }}
                          className="p-2 hover:bg-charity-brown-200 rounded transition-colors"
                          title={t("donate.copyIban")}
                        >
                          {copiedIban ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4 text-charity-cream-100" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-2 border-charity-brown-200 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-charity-brown-200 rounded-full flex items-center justify-center border-2 border-charity-brown-100 shadow-sm">
                        <img
                          src="/benefitpay-logo.png"
                          alt="BenefitPay Logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {t("donate.benefitpayApp")}
                        </h4>
                        <p className="text-sm text-charity-cream-200">
                          {t("donate.benefitpayDesc")}
                        </p>
                      </div>
                    </div>
                    <div className="bg-charity-brown-300 p-4 rounded-lg border border-charity-brown-200">
                      <div className="space-y-3 text-sm text-charity-cream-100">
                        <div className="flex items-center gap-2">
                          <span className="bg-charity-brown-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                            1
                          </span>
                          <span>{t("donate.step1")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-charity-brown-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                            2
                          </span>
                          <span>{t("donate.step2")}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="bg-charity-brown-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                            3
                          </span>
                          <span>{t("donate.step3")}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-2 border-charity-brown-200 rounded-lg bg-gradient-to-br from-charity-brown-200 to-charity-brown-300 hover:border-charity-brown-100 transition-colors">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-16 h-16 bg-charity-brown-100 rounded-full flex items-center justify-center border-2 border-charity-brown-50 shadow-md">
                          <img
                            src="/benefitpay-logo.png"
                            alt="BenefitPay Logo"
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-charity-brown-700 text-lg">
                            {t("donate.qrTitle")}
                          </h4>
                          <p className="text-sm text-charity-brown-600 font-medium">
                            {t("donate.qrSubtitle")}
                          </p>
                        </div>
                      </div>

                      <div className="bg-charity-brown-50 p-6 rounded-xl shadow-lg border-2 border-charity-brown-200 mb-4">
                        <div className="mb-3">
                          <h5 className="text-charity-brown-700 font-semibold mb-1">
                            {isRTL ? "دينار الجمعة" : "Dinar Al-Jumaa"}
                          </h5>
                          <p className="text-xs text-charity-brown-600">
                            {t("donate.slogan")}
                          </p>
                        </div>
                        <img
                          src="/qr-code.png"
                          alt="QR Code للدفع عبر BenefitPay - دينار الجمعة"
                          className="w-48 h-48 mx-auto rounded-lg"
                        />
                      </div>

                      <div className="bg-charity-brown-200 p-3 rounded-lg border border-charity-brown-300">
                        <p className="text-sm text-charity-brown-700 font-medium flex items-center justify-center gap-2">
                          <Smartphone className="h-4 w-4" />
                          {t("donate.scanQR")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 shadow-xl bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 text-white border-charity-brown-300">
            <CardContent className="p-0">
              <Heart className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
              <h2
                className={`text-2xl md:text-3xl font-bold mb-4 ${isRTL ? "arabic-calligraphy" : ""}`}
              >
                {t("donate.thankYouTitle")}
              </h2>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                {t("donate.thankYouText")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
