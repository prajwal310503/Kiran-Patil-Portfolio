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
      <div className="relative bg-[#ff4d00] flex flex-col items-center text-center px-8 sm:px-16 md:px-24 pt-6 pb-10 text-white">
        <button
          onClick={() => { onBack(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="self-start mb-4 px-4 py-2 bg-white text-[#c44113] rounded-lg font-medium hover:bg-gray-200"
        >
          ← Back
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.name || category.title}</h2>
        <div className="max-w-4xl text-lg sm:text-xl space-y-4">
          {(category.description || `Galleries for ${category.name || category.title}`)
            .split(/\n+/)
            .filter((p) => p.trim())
            .map((para, i) => (
              <p key={i} className="leading-relaxed">{para}</p>
            ))}
        </div>
      </div>

      {/* Project Gallery for this category */}
      <ProjectGallery category={category} onSelectProject={setSelectedProject} />
    </div>
  );
};

export default CategoryDetail;
