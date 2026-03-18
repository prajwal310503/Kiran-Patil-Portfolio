import React, { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import ProjectDetail from "./ProjectDetail.jsx"; // New component

const CategoryDetail = ({ category, onBack }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="w-full">
      {/* Orange Header */}
      <div className="relative bg-[#ff4d00] h-[400px] flex flex-col items-center justify-center text-center px-6 text-white">
        <button
          onClick={onBack}
          className="absolute top-4 left-4 px-4 py-2 bg-white text-[#c44113] rounded-lg font-medium hover:bg-gray-200"
        >
          ← Back
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.name || category.title}</h2>
        <p className="max-w-2xl text-base md:text-lg leading-relaxed">
          {category.description || `Galleries for ${category.name || category.title}`}
        </p>
      </div>

      {/* Project Gallery for this category */}
      <ProjectGallery category={category} onSelectProject={setSelectedProject} />
    </div>
  );
};

export default CategoryDetail;
