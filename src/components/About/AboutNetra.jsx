import { useEffect, useRef, useState } from "react";
import NetraJourney from "../../components/About/NetraJourney";
import PeopleVoice from "../../components/Home/PeopleVoice";
import educationIcon from "../../assets/Icons/icon1.png";
import sustainableIcon from "../../assets/Icons/icon2.png";
import digitalIcon from "../../assets/Icons/icon3.png";
import netra1 from "../../assets/netra1.jpeg";
import kiran3 from "../../assets/kiran3.jpeg";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const SLIDES = [
  { src: netra1, alt: "Smt. Netra Kiran Patil" },
  { src: kiran3, alt: "Smt. Netra Kiran Patil" },
];

const AboutNetra = () => {
  useLang();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (isPaused || document.hidden) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((p) => (p + 1) % SLIDES.length);
    }, 3000);
    return () => clearTimeout(timeoutRef.current);
  }, [index, isPaused]);

  const clearPending = () => {
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
  };

  const goTo = (i) => { clearPending(); setIndex(i); setIsPaused(false); };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; setIsPaused(true); clearPending(); };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) { setIsPaused(false); return; }
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) goTo((index + 1) % SLIDES.length);
    else if (diff < -50) goTo((index - 1 + SLIDES.length) % SLIDES.length);
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">

      {/* Banner Slider */}
      <div className="px-4 sm:px-8 pt-6 pb-2">
        <div className="flex justify-center mb-4">
          <div
            className="relative w-full max-w-5xl h-[55vh] sm:h-[75vh] rounded-xl border-2 border-[#ff4d00] shadow-lg overflow-hidden bg-gray-50"
            onMouseEnter={() => { setIsPaused(true); clearPending(); }}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="absolute left-0 top-0 h-full flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${SLIDES.length * 100}%`,
                transform: `translate3d(-${(index * 100) / SLIDES.length}%, 0, 0)`,
                willChange: "transform",
              }}
            >
              {SLIDES.map((slide, i) => (
                <div key={i} className="flex-shrink-0 h-full" style={{ width: `${100 / SLIDES.length}%` }}>
                  <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover object-center" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-lg overflow-hidden border-2 transition ${
                i === index ? "border-[#ff4d00] opacity-100" : "border-transparent opacity-60 hover:opacity-90"
              }`}
            >
              <img src={slide.src} alt={slide.alt} className="w-20 h-14 sm:w-28 sm:h-20 object-cover" />
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 sm:px-10 py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center">{t("netra_title")}</h1>

        <p className="mb-5 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("netra_s1_p1")}</p>
        <p className="mb-10 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("netra_s1_p2")}</p>

        <h2 className="text-2xl font-bold mb-4 text-[#ff4d00]">{t("netra_s2_h")}</h2>
        <ul className="mb-10 space-y-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          {[["netra_s2_b1_l", "netra_s2_b1_t"], ["netra_s2_b2_l", "netra_s2_b2_t"], ["netra_s2_b3_l", "netra_s2_b3_t"]].map(([l, tx]) => (
            <li key={l} className="flex gap-3">
              <span className="text-[#ff4d00] font-bold shrink-0 mt-1">●</span>
              <span><strong>{t(l)}</strong> {t(tx)}</span>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-[#ff4d00]">{t("netra_s3_h")}</h2>
        <ul className="mb-10 space-y-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          {[["netra_s3_b1_l", "netra_s3_b1_t"], ["netra_s3_b2_l", "netra_s3_b2_t"], ["netra_s3_b3_l", "netra_s3_b3_t"]].map(([l, tx]) => (
            <li key={l} className="flex gap-3">
              <span className="text-[#ff4d00] font-bold shrink-0 mt-1">●</span>
              <span><strong>{t(l)}</strong> {t(tx)}</span>
            </li>
          ))}
        </ul>

        <p className="mb-12 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">{t("netra_s4_p")}</p>

        <NetraJourney />
      </div>

      <PeopleVoice keys={["pv_5", "pv_6", "pv_7", "pv_8"]} />

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
