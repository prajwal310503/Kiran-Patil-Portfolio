import React, { useState } from "react";
import ChooseCategory from "../../components/Gallery/ChooseCategory";
import CategoryDetail from "../../components/Gallery/CategoryDetail";
import { useSEO } from "../../utils/useSEO";

const Gallery = () => {
  useSEO({
    title: "Gallery — Moments of Service",
    description: "Explore the gallery of Kiran Prakash Patil — photos and moments from public events, community programmes, cultural initiatives, and grassroots work across Panvel and Navi Mumbai.",
    path: "/gallery",
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <>
     {!selectedCategory ? (
  <>
    {/* Gallery Intro */}
    <div className="bg-[#ff4d00] h-[400px] flex flex-col justify-center items-center text-white text-center px-5 font-jost">
      <h1 className="font-bold text-5xl mb-2">Gallery of Groundwork</h1>
      <p className="font-light text-lg m-2 max-w-3xl mx-auto text-center">
      Step into the journey of leadership — not through words, but through moments captured in time. Each album here tells a story of connection, service, and progress — from quiet village corners to grand public stages. These are not just photographs; they are footprints of a mission in motion.
      </p>
    </div>

    {/* Category List */}
    <ChooseCategory onSelectCategory={setSelectedCategory} />
  </>
) : (
  <CategoryDetail category={selectedCategory} onBack={() => setSelectedCategory(null)} />
)}

    </>
  );
};

export default Gallery;
