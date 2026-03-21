import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img2010 from "../../assets/Journey/journey-2001.png";
import img2012 from "../../assets/Journey/journey-2001.png";
import img2015 from "../../assets/Journey/journey-2001.png";
import img2018 from "../../assets/Journey/journey-2001.png";
import img2022 from "../../assets/Journey/journey-2001.png";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const journeyImages = {
  2010: img2010,
  2012: img2012,
  2015: img2015,
  2018: img2018,
  2022: img2022,
};

const years = [2010, 2012, 2015, 2018, 2022];

const NetraJourney = () => {
  const [year, setYear] = useState(2010);
  useLang(); // subscribe to language changes

  const goPrev = () => {
    const currentIndex = years.indexOf(year);
    if (currentIndex > 0) setYear(years[currentIndex - 1]);
  };

  const goNext = () => {
    const currentIndex = years.indexOf(year);
    if (currentIndex < years.length - 1) setYear(years[currentIndex + 1]);
  };

  const titleKey = `nj_${year}_title`;
  const descKey = `nj_${year}_desc`;

  return (
    <div className="px-4 py-12 bg-white dark:bg-black text-center font-sans">
      <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">{t("journey_heading")}</h2>

      <div className="flex justify-center items-center gap-4 mb-10">
        <button
          onClick={goPrev}
          disabled={year === years[0]}
          className={`text-3xl px-2 ${
            year === years[0] ? "text-gray-400" : "text-black dark:text-white hover:text-orange-600"
          }`}
        >
          &#10094;
        </button>

        <div className="w-full max-w-4xl">
          <div className="hidden sm:flex bg-[#ff4d00] rounded-full px-4 py-2 justify-center">
            {years.map((yr) => (
              <button
                key={yr}
                onClick={() => setYear(yr)}
                className={`mx-8 px-6 py-2 text-base rounded-full font-[Orbitron] tracking-wide transition-all ${
                  year === yr
                    ? "bg-white text-black font-semibold"
                    : "text-white hover:bg-orange-500"
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
          <div className="sm:hidden flex justify-center bg-[#ff4d00] rounded-full px-6 py-2 text-white font-[Orbitron] tracking-wide text-base">
            {year}
          </div>
        </div>

        <button
          onClick={goNext}
          disabled={year === years[years.length - 1]}
          className={`text-3xl px-2 ${
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
            alt={`Netra Journey ${year}`}
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="text-left max-w-md">
            <h3 className="text-3xl font-bold mb-3 text-black dark:text-white">
              {t(titleKey)}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{t(descKey)}</p>
            <p className="italic text-base text-gray-500 dark:text-gray-400 font-[Orbitron]">
              {t("journey_year_label")} {year}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NetraJourney;
