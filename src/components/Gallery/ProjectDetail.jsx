import React, { useState, useEffect } from "react";
import { getGallery } from "../../services/api";

const ProjectDetail = ({ project, onBack }) => {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getGallery(project.uid)
      .then(setGallery)
      .catch(() => setGallery(project))
      .finally(() => setLoading(false));
  }, [project.uid]);

  const images = (gallery?.images || []).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  if (loading) {
    return (
      <div className="py-20 text-center text-lg text-gray-500 dark:text-gray-400">
        Loading gallery...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4 sm:p-6">
      {/* Top Main Image (Carousel) */}
      {images.length > 0 && (
        <div className="flex justify-center mb-4">
          <img
            src={images[currentIndex]?.imageUrl}
            alt={images[currentIndex]?.altText || project.title}
            className="w-full max-w-6xl h-48 sm:h-[600px] object-cover rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* Back Button */}
      <div className="flex justify-start max-w-6xl mx-auto mb-4 sm:mb-6">
        <button
          onClick={onBack}
          className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg text-sm sm:text-base font-medium hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          ← Back
        </button>
      </div>

      {/* Thumbnail Row */}
      {images.length > 1 && (
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
          {images.map((img, idx) => (
            <img
              key={img.id}
              src={img.imageUrl}
              alt={img.altText || `thumb-${idx}`}
              className={`w-16 h-14 sm:w-24 sm:h-20 object-cover rounded-lg shadow-md cursor-pointer border-2 ${
                idx === currentIndex ? "border-orange-500" : "border-transparent"
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      )}

      {/* Title + Year */}
      <h2 className="text-xl sm:text-3xl font-bold mb-2 text-center">
        {project.title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-center mb-4 sm:mb-6 text-sm sm:text-base">
        {project.startDate ? new Date(project.startDate).getFullYear() : ""}
      </p>

      {/* Description */}
      {gallery?.description && (
        <div
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-justify text-sm sm:text-base px-1 sm:px-0"
          dangerouslySetInnerHTML={{ __html: gallery.description }}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
