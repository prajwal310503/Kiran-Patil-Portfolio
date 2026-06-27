import React from "react";
import WomenImg from "../../assets/Impact/frame1.png";
import JobsImg from "../../assets/Impact/frame2.png";
import RebuildImg from "../../assets/Impact/frame3.png";
import VoiceImg from "../../assets/Impact/frame4.png";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const Impact = () => {
  useLang(); // subscribe to language changes

  const impactData = [
    {
      titleKey: "impact_health",
      image: WomenImg,
      contentKey: "impact_health_items",
      isArray: true,
    },
    {
      titleKey: "impact_education",
      image: JobsImg,
      contentKey: "impact_education_item",
      isArray: false,
    },
    {
      titleKey: "impact_schemes",
      image: RebuildImg,
      contentKey: "impact_schemes_items",
      isArray: true,
    },
    {
      titleKey: "impact_environment",
      image: VoiceImg,
      contentKey: "impact_environment_items",
      isArray: true,
    },
  ];

  return (
    <section className="px-4 py-12 text-center bg-white dark:bg-black transition-colors">
      <h2 className="text-5xl font-bold mb-10 text-black dark:text-white">{t("impact_heading")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {impactData.map((item, index) => {
          const content = t(item.contentKey);
          return (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer w-full aspect-square"
            >
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                {item.isArray && Array.isArray(content) ? (
                  <ul className="text-white text-lg text-left space-y-1">
                    {content.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white text-lg text-center">{content}</p>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-black/70 py-2 text-center">
                <h3 className="text-base font-semibold text-black dark:text-white">{t(item.titleKey)}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Impact;
