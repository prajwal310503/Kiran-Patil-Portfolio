import React from "react";
import NetraJourney from "../../components/About/NetraJourney";
import educationIcon from "../../assets/Icons/icon1.png";
import sustainableIcon from "../../assets/Icons/icon2.png";
import digitalIcon from "../../assets/Icons/icon3.png";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const AboutNetra = () => {
  useLang(); // subscribe to language changes
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <div className="p-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8">{t("netra_title")}</h1>
        <p className="mb-5 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("netra_p1")}</p>
        <p className="mb-5 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("netra_p2")}</p>
        <p className="mb-5 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("netra_p3")}</p>
        <p className="mb-5 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("netra_p4")}</p>
        <p className="mb-12 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("netra_p5")}</p>

        <NetraJourney />
      </div>

      {/* Mission Section */}
      <div className="py-20 text-center px-6">
        <h2 className="text-4xl font-extrabold mb-8">{t("mission_heading")}</h2>
        <p className="mb-14 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t("mission_sub")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-16 sm:gap-x-30 items-center justify-items-center">
          <div className="flex flex-col items-center">
            <img src={educationIcon} alt="Education" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">{t("mission_education")}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={sustainableIcon} alt="Sustainable" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">{t("mission_sustainable")}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={digitalIcon} alt="Digital India" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">{t("mission_digital")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNetra;
