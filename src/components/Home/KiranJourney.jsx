import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imgDefault from "../../assets/Journey/journey-2001.png";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const journeyImages = {
  2002: imgDefault,
  2004: imgDefault,
  2005: imgDefault,
  2009: imgDefault,
  2012: imgDefault,
  2014: imgDefault,
  2015: imgDefault,
  2018: imgDefault,
  2021: imgDefault,
  2025: imgDefault,
};

const years = [2025, 2021, 2018, 2015, 2014, 2012, 2009, 2005, 2004, 2002];

const KiranJourney = () => {
  const [year, setYear] = useState(2025);
  useLang(); // subscribe to language changes

  const goPrev = () => {
    const currentIndex = years.indexOf(year);
    if (currentIndex > 0) setYear(years[currentIndex - 1]);
  };

  const goNext = () => {
    const currentIndex = years.indexOf(year);
    if (currentIndex < years.length - 1) setYear(years[currentIndex + 1]);
  };

  const titleKey = `kj_${year}_title`;
  const descKey = `kj_${year}_desc`;

  return (
    <div className="px-4 py-12 bg-white dark:bg-black text-center font-sans transition-colors duration-500">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-black dark:text-white">{t("journey_heading")}</h2>

      <div className="flex justify-center items-center gap-2 sm:gap-4 mb-10">
        <button
          onClick={goPrev}
          disabled={year === years[0]}
          className={`text-2xl sm:text-3xl px-1 sm:px-2 transition-colors ${
            year === years[0]
              ? "text-gray-400"
              : "text-black dark:text-white hover:text-orange-600"
          }`}
        >
          &#10094;
        </button>

        <div className="w-full max-w-4xl">
          <div className="hidden sm:flex bg-[#ff4d00] rounded-full px-4 py-2 justify-around">
            {years
              .slice(
                Math.max(0, Math.min(years.indexOf(year) - 2, years.length - 5)),
                Math.max(0, Math.min(years.indexOf(year) - 2, years.length - 5)) + 5
              )
              .map((yr) => (
                <button
                  key={yr}
                  onClick={() => setYear(yr)}
                  className={`mx-4 px-6 py-2 transition-all duration-300 text-base rounded-full focus:outline-none font-[Orbitron] tracking-wide ${
                    year === yr
                      ? "bg-white text-black font-semibold"
                      : "text-white hover:bg-orange-500"
                  }`}
                >
                  {yr}
                </button>
              ))}
          </div>

          <div className="sm:hidden flex justify-center items-center bg-[#ff4d00] rounded-full px-6 py-2 text-white font-[Orbitron] tracking-wide text-base">
            {year}
          </div>
        </div>

        <button
          onClick={goNext}
          disabled={year === years[years.length - 1]}
          className={`text-3xl px-2 transition-colors ${
            year === years[years.length - 1]
              ? "text-gray-400"
              : "text-black dark:text-white hover:text-orange-600"
          }`}
        >
          &#10095;
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={year}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto px-4"
        >
          <img
            src={journeyImages[year]}
            alt={`Kiran Prakash Patil — ${year}`}
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="text-left max-w-md">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-black dark:text-white">
              {t(titleKey)}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {t(descKey)}
            </p>
            <p className="italic text-base text-gray-500 dark:text-gray-400 font-[Orbitron]">
              {t("journey_year_label")} {year}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default KiranJourney;
