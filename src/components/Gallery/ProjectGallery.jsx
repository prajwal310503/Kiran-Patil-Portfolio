import React, { useState, useEffect } from "react";
import { getGalleries } from "../../services/api";

const ProjectGallery = ({ category, onSelectProject }) => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGalleries()
      .then((data) => {
        // Filter by category.id if available (integer foreign key on gallery)
        if (category?.id) {
          setGalleries(data.filter((g) => g.categoryId === category.id));
        } else {
          setGalleries(data);
        }
      })
      .catch(() => setError("Failed to load galleries. Please try again later."))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div className="py-20 text-center text-lg text-gray-500 dark:text-gray-400">
        Loading galleries...
      </div>
    );
  }

  if (error) {
    return <div className="py-20 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-10">Gallery</h1>

        {galleries.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {galleries.map((gallery, index) => (
              <div
                key={gallery.uid}
                className="flex flex-col items-center text-center cursor-pointer"
                onClick={() => onSelectProject(gallery)}
              >
                <div className="relative w-56 h-56 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[#F5F0E1] rounded-xl" />
                  <img
                    src={gallery.thumbnailUrl}
                    alt={gallery.title}
                    className={`relative w-52 h-52 object-cover rounded-xl shadow-md ${
                      index % 2 === 0 ? "rotate-2" : "-rotate-2"
                    }`}
                  />
                </div>
                <h3 className="mt-4 text-base font-medium text-gray-800 dark:text-white leading-snug">
                  {gallery.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {gallery.startDate
                    ? new Date(gallery.startDate).getFullYear()
                    : ""}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">
            No galleries available for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
