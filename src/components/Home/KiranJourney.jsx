import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img2001 from "../../assets/Journey/journey-2001.png";
import img2002 from "../../assets/Journey/journey-2001.png";
import img2003 from "../../assets/Journey/journey-2001.png";
import img2004 from "../../assets/Journey/journey-2001.png";
import img2005 from "../../assets/Journey/journey-2001.png";

const journeyData = {
  2001: {
    title: 'Launched “Shiksha Jyoti”',
    description:
      'Initiated a rural education campaign enrolling 10,000+ children into government schools. Focused on girl-child education and dropout recovery.',
    image: img2001,
  },
  2002: {
    title: 'Digital Learning Pilot',
    description:
      'Introduced basic digital literacy modules in 50 rural schools to enhance learning experiences.',
    image: img2002,
  },
  2003: {
    title: 'Scholarship Drive',
    description:
      'Launched a nationwide scholarship program benefiting 5,000+ meritorious underprivileged students.',
    image: img2003,
  },
  2004: {
    title: 'Teacher Training Program',
    description:
      'Trained over 2,000 rural school teachers in modern pedagogical practices and student engagement.',
    image: img2004,
  },
  2005: {
    title: 'Mobile Education Vans',
    description:
      'Deployed education vans equipped with digital tools to reach remote tribal villages.',
    image: img2005,
  },
};

const years = Object.keys(journeyData).map(Number);

const KiranJourney = () => {
  const [year, setYear] = useState(2001);

  const goPrev = () => {
    const currentIndex = years.indexOf(year);
    if (currentIndex > 0) setYear(years[currentIndex - 1]);
  };

  const goNext = () => {
    const currentIndex = years.indexOf(year);
    if (currentIndex < years.length - 1) setYear(years[currentIndex + 1]);
  };

  return (
    <div className="px-4 py-12 bg-white dark:bg-black text-center font-sans transition-colors duration-500">
      <h2 className="text-4xl font-bold mb-10 text-black dark:text-white">Journey</h2>

      {/* Year Tabs */}
      {/* Year Tabs */}
<div className="flex justify-center items-center gap-4 mb-10">
  <button
    onClick={goPrev}
    disabled={year === years[0]}
    className={`text-3xl px-2 transition-colors ${
      year === years[0]
        ? "text-gray-400"
        : "text-black dark:text-white hover:text-orange-600"
    }`}
  >
    &#10094;
  </button>

  {/* Show all tabs on md+, only one year on mobile */}
  <div className="w-full max-w-4xl">
    <div className="hidden sm:flex bg-[#ff4d00] rounded-full overflow-hidden px-4 py-2 justify-center">
      {years.map((yr) => (
        <button
          key={yr}
          onClick={() => setYear(yr)}
          className={`mx-8 px-6 py-2 transition-all duration-300 text-base rounded-full focus:outline-none font-[Orbitron] tracking-wide ${
            year === yr
              ? "bg-white text-black font-semibold"
              : "text-white hover:bg-orange-500"
          }`}
        >
          {yr}
        </button>
      ))}
    </div>

    {/* Mobile single year display */}
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


      {/* Journey Content */}
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
            src={journeyData[year].image}
            alt={`Journey ${year}`}
            className="w-full md:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="text-left max-w-md">
            <h3 className="text-3xl font-bold mb-2 text-black dark:text-white">
              {journeyData[year].title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-md mb-3">
              {journeyData[year].description}
            </p>
            <p className="italic text-sm text-gray-500 dark:text-gray-400 font-[Orbitron]">Year {year}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default KiranJourney;
