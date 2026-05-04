import { useEffect, useMemo, useState } from "react";
import { FaQuoteLeft, FaUser } from "react-icons/fa";
import people1 from "../../assets/peoples/people1.jpeg";
import people2 from "../../assets/peoples/people2.jpeg";
import people3 from "../../assets/peoples/people3.jpeg";
import people4 from "../../assets/peoples/people4.jpeg";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const ALL_IMAGES = [people1, people2, people3, people4];

const DEFAULT_KEYS = ["pv_1", "pv_2", "pv_3", "pv_4"];

const PeopleVoice = ({ keys = DEFAULT_KEYS, showImage = true }) => {
  const [index, setIndex] = useState(0);
  useLang();

  // Stable key string to avoid re-triggering effects on inline array re-renders
  const keysStr = useMemo(() => keys.join(","), [keys]);

  useEffect(() => {
    setIndex(0);
  }, [keysStr]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % keys.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [keysStr]);

  return (
    <div className="bg-[#F5F0E6] py-16 px-4 flex flex-col items-center transition-all duration-500">
      <div className="flex items-center gap-3 mb-6">
        <FaQuoteLeft className="text-4xl text-[#ff4d00]" />
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-black">{t("peoples_voice")}</h2>
      </div>

      <div className="bg-[#ff4d00] text-white p-6 md:p-10 max-w-3xl min-h-[180px] rounded-[80px_0_80px_0] relative shadow-lg transition-all duration-500">
        <p className="text-lg sm:text-xl font-medium leading-relaxed mb-3">
          {t(keys[index])}
        </p>
        <p className="text-sm font-semibold opacity-80 italic">
          {t(keys[index] + "_by")}
        </p>
        {showImage ? (
          <img
            src={ALL_IMAGES[index % ALL_IMAGES.length]}
            alt="Person"
            className="w-20 h-20 rounded-full object-cover absolute -bottom-10 right-6 border-4 border-white shadow"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center absolute -bottom-10 right-6 border-4 border-white shadow">
            <FaUser className="text-[#ff4d00] text-3xl" />
          </div>
        )}
      </div>

      <div className="mt-10 flex gap-2">
        {keys.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[#C34700]" : "bg-[#E6CDB8]"
              } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleVoice;
