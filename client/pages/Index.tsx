import {
  ArrowLeft,
  Heart,
  Users,
  Handshake,
  Instagram,
  ExternalLink,
  Mail,
  ClipboardList,
  Phone,
  Camera,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export default function Index() {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charity-warm-100 to-charity-cream-200 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Logo */}
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="دينار الجمعة"
              className="h-40 md:h-56 lg:h-64 xl:h-72 w-auto mx-auto"
            />
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold text-charity-brown-600 mb-6 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            {t("home.heroTitle")}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("home.heroSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-charity-brown-500 hover:bg-charity-brown-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/donate">
                {t("common.donateNow")}
                <Heart className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
              </Link>
            </Button>
            <Button
              size="lg"
              className="bg-charity-brown-500 hover:bg-charity-brown-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL2IvYy9kYzc2ZTQ4MzMyNjlkNTNkL0VYQmtMT0ZJdmFwR3I0WVhfd21kWUpRQkZLRmY4Uk9na0NJVEF3bDE4NTZ1WWc%5FZT02MTZyenQmdXRtX21lZGl1bT1zb2NpYWwmdXRtX3NvdXJjZT1oZXlsaW5rLm1l&cid=DC76E4833269D53D&id=DC76E4833269D53D%21se12c6470bd4846aaaf8617ff099d6094&parId=root&o=OneUp",
                  "_blank",
                )
              }
            >
              {t("common.requestHelp")}
              <ArrowLeft className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-charity-cream-300 opacity-50">
          <div className="w-20 h-20 rounded-full border-4 border-current"></div>
        </div>
        <div className="absolute bottom-10 right-10 text-charity-brown-200 opacity-30">
          <div className="w-16 h-16 rounded-full bg-current"></div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-charity-brown-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-4xl font-bold text-charity-brown-600 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
            >
              <Users className="h-8 w-8 md:h-10 md:w-10" />
              {t("home.aboutTitle")}
            </h2>
            <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("home.aboutText")}
              </p>
              <div className="text-sm text-gray-600 bg-charity-cream-100 p-4 rounded-lg border-r-4 border-charity-brown-400">
                <p className="mb-2">{t("home.licenseText")}</p>
                <p>
                  <a
                    href="/license.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 font-medium"
                  >
                    {t("home.licenseLinkText")}
                  </a>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 text-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-charity-brown-600" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {t("home.transparency")}
                  </h3>
                  <p className="text-sm text-charity-cream-100">
                    {t("home.transparencyDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 text-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-charity-brown-600" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {t("home.community")}
                  </h3>
                  <p className="text-sm text-charity-cream-100">
                    {t("home.communityDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 text-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-8 w-8 text-charity-brown-600" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {t("home.trust")}
                  </h3>
                  <p className="text-sm text-charity-cream-100">
                    {t("home.trustDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 text-white">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-charity-brown-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-charity-brown-600" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {t("home.love")}
                  </h3>
                  <p className="text-sm text-charity-cream-100">
                    {t("home.loveDesc")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charity-brown-100 to-charity-brown-150">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-charity-brown-600 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            <Heart className="h-8 w-8 md:h-10 md:w-10" />
            {t("home.donationTitle")}
          </h2>
          <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t("home.donationText")}
          </p>

          <Card className="p-8 shadow-lg border-charity-brown-300 mb-6 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
            <CardContent className="p-0">
              <Button
                asChild
                size="lg"
                className="bg-charity-brown-600 hover:bg-charity-brown-700 text-white px-12 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/donate">
                  {t("common.donateNow")}
                  <Heart className={`h-6 w-6 ${isRTL ? "mr-3" : "ml-3"}`} />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <p className="text-sm text-charity-brown-600 bg-charity-brown-100/80 p-4 rounded-lg border border-charity-brown-200">
            <strong>{isRTL ? "ملاحظة:" : "Note:"}</strong>{" "}
            {t("home.donationNote")}
          </p>
        </div>
      </section>

      {/* Help Request Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-charity-brown-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-charity-brown-600 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            <ClipboardList className="h-8 w-8 md:h-10 md:w-10" />
            {t("home.helpTitle")}
          </h2>
          <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t("home.helpText")}
          </p>

          <Card className="p-8 shadow-lg border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
            <CardContent className="p-0">
              <Button
                size="lg"
                className="bg-charity-brown-500 hover:bg-charity-brown-600 text-white px-12 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                onClick={() =>
                  window.open(
                    "/help.pdf",
                    "_blank",
                  )
                }
              >
                {t("home.helpFormText")}
                <ExternalLink
                  className={`h-6 w-6 ${isRTL ? "mr-3" : "ml-3"}`}
                />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Instagram & Social Media Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charity-brown-100/70 to-charity-brown-200/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-charity-brown-600 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            <Camera className="h-8 w-8 md:h-10 md:w-10" />
            {t("home.socialTitle")}
          </h2>
          <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>

          <p className="text-lg text-gray-700 mb-8">{t("home.socialText")}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
              <CardContent
                className={`p-0 flex items-center gap-4 ${isRTL ? "space-x-reverse" : ""}`}
              >
                <Instagram className="h-8 w-8 text-charity-cream-100" />
                <div className={isRTL ? "text-right" : "text-left"}>
                  <h3 className="font-semibold text-white">
                    {t("home.instagram")}
                  </h3>
                  <a
                    href="https://www.instagram.com/dinar.aljumaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charity-cream-200 hover:underline text-sm"
                  >
                    @dinar.aljumaa
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-charity-brown-300 bg-gradient-to-br from-charity-brown-400 to-charity-brown-500">
              <CardContent
                className={`p-0 flex items-center gap-4 ${isRTL ? "space-x-reverse" : ""}`}
              >
                <ExternalLink className="h-8 w-8 text-charity-cream-100" />
                <div className={isRTL ? "text-right" : "text-left"}>
                  <h3 className="font-semibold text-white">
                    {t("home.linkCenter")}
                  </h3>
                  <a
                    href="https://heylink.me/Dinar.Aljumaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charity-cream-200 hover:underline text-sm"
                  >
                    heylink.me/Dinar.Aljumaa
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-charity-brown-50/70">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold text-charity-brown-600 mb-6 flex items-center justify-center gap-3 ${isRTL ? "arabic-calligraphy" : ""}`}
          >
            <Phone className="h-8 w-8 md:h-10 md:w-10" />
            {t("home.contactTitle")}
          </h2>
          <div className="w-24 h-1 bg-charity-brown-400 mx-auto mb-8"></div>

          <Card className="p-8 shadow-lg bg-gradient-to-br from-charity-brown-400 to-charity-brown-500 border-charity-brown-300">
            <CardContent className="p-0">
              <div className="space-y-4">
                <div
                  className={`flex items-center justify-center gap-4 ${isRTL ? "space-x-reverse" : ""}`}
                >
                  <div className="w-12 h-12 bg-charity-brown-200 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-charity-brown-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {t("home.email")}
                    </h3>
                    <a
                      href="mailto:admin@dinaraljumaa.com"
                      className="text-charity-cream-200 hover:underline"
                    >
                      admin@dinaraljumaa.com
                    </a>
                  </div>
                </div>

                <div className="border-t border-charity-brown-300 pt-4">
                  <p className="text-charity-cream-100 text-sm">
                    {t("home.contactMessage")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
