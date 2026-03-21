import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import person1 from "../../assets/peoples/people1.png";
import person2 from "../../assets/peoples/people1.png";
import person3 from "../../assets/peoples/people1.png";
import person4 from "../../assets/peoples/people1.png";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const images = [person1, person2, person3, person4];
const messageKeys = ["pv_1", "pv_2", "pv_3", "pv_4"];

const PeopleVoice = () => {
  const [index, setIndex] = useState(0);
  useLang(); // subscribe to language changes

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messageKeys.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F5F0E6] py-16 px-4 flex flex-col items-center transition-all duration-500">
      <div className="flex items-center gap-3 mb-6">
        <FaQuoteLeft className="text-4xl text-[#ff4d00]" />
        <h2 className="text-3xl md:text-4xl font-bold text-black">{t("peoples_voice")}</h2>
      </div>

      <div className="bg-[#ff4d00] text-white p-6 md:p-10 max-w-3xl min-h-[180px] rounded-[80px_0_80px_0] relative shadow-lg transition-all duration-500">
        <p className="text-lg sm:text-xl font-medium leading-relaxed">
          {t(messageKeys[index])}
        </p>
        <img
          src={images[index]}
          alt="Person"
          className="w-16 h-16 rounded-full object-cover absolute -bottom-6 right-6 border-4 border-white"
        />
      </div>

      <div className="mt-10 flex gap-2">
        {messageKeys.map((_, i) => (
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
