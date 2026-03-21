import React from "react";
import { useLang } from "../../contexts/LangContext";

const languages = [
  { code: "en", label: "EN" },
  { code: "hi", label: "HI" },
  { code: "mr", label: "MR" },
];

const LanguageSwitcher = () => {
  const { lang, changeLang } = useLang();

  return (
    <div className="flex items-center gap-1 bg-white/20 rounded-full px-1 py-1">
      {languages.map((language) => (
        <button
          key={language.code}
          onClick={() => changeLang(language.code)}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
            lang === language.code
              ? "bg-white text-[#FF4D00]"
              : "text-white hover:bg-white/30"
          }`}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
