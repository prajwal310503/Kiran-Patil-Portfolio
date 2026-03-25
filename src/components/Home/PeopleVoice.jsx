import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaUser } from "react-icons/fa";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const DEFAULT_KEYS = ["pv_1", "pv_2", "pv_3", "pv_4"];

const PeopleVoice = ({ keys = DEFAULT_KEYS }) => {
  const [index, setIndex] = useState(0);
  useLang(); // subscribe to language changes

  useEffect(() => {
    setIndex(0);
  }, [keys]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keys.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [keys]);

  return (
    <div className="bg-[#F5F0E6] py-16 px-4 flex flex-col items-center transition-all duration-500">
      <div className="flex items-center gap-3 mb-6">
        <FaQuoteLeft className="text-4xl text-[#ff4d00]" />
        <h2 className="text-3xl md:text-4xl font-bold text-black">{t("peoples_voice")}</h2>
      </div>

      <div className="bg-[#ff4d00] text-white p-6 md:p-10 max-w-3xl min-h-[180px] rounded-[80px_0_80px_0] relative shadow-lg transition-all duration-500">
        <p className="text-lg sm:text-xl font-medium leading-relaxed mb-3">
          {t(keys[index])}
        </p>
        <p className="text-sm font-semibold opacity-80 italic">
          {t(keys[index] + "_by")}
        </p>
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center absolute -bottom-6 right-6 border-4 border-white shadow">
          <FaUser className="text-[#ff4d00] text-2xl" />
        </div>
      </div>

      <div className="mt-10 flex gap-2">
        {keys.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#C34700]" : "bg-[#E6CDB8]"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleVoice;
