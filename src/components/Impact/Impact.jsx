import React from "react";
import WomenImg from "../../assets/Impact/frame1.png";
import JobsImg from "../../assets/Impact/frame2.png";
import RebuildImg from "../../assets/Impact/frame3.png";
import VoiceImg from "../../assets/Impact/frame4.png";

const impactData = [
  {
    title: "Health",
    image: WomenImg,
    content: [
      "Urban Health Centre",
      "Blood Donation Camp",
      "Covid Work",
      "Diabetes Awareness",
      "Vyasanmukti Campaign",
      "Cancer Awareness",
    ],
  },

  {
    title: "Education",
    image: JobsImg,
    content:
      "RTE (Right 2 Education)",
  },
  {
    title: "Schemes",
    image: RebuildImg,
    content: [
      "AADHAR Card",
      "Ayushman Bharat Card",
    ],
  },
  {
    title: "Environment",
    image: VoiceImg,
    content: [
      "Pollution (Taloja)",
      "AC Buses",
      "Water Protest (CIDCO)",
    ],
  },
];

const Impact = () => {
  return (
    <section className="px-4 py-12 text-center bg-white dark:bg-black transition-colors">
      <h2 className="text-5xl font-bold mb-10 text-black dark:text-white">Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {impactData.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer w-full aspect-square"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Hover Overlay for All */}
            {/* Hover Overlay for All */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
              {Array.isArray(item.content) ? (
                <ul className="text-white text-lg text-left space-y-1">
                  {item.content.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-white text-lg text-center">{item.content}</p>
              )}
            </div>


            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-black/70 py-2 text-center">
              <h3 className="text-sm font-semibold text-black dark:text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
