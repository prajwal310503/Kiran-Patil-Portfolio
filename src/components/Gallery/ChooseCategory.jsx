import React, { useState, useEffect } from "react";
import { getCategories } from "../../services/api";

const ChooseCategory = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCategories()
      .then(setCategories)
      .catch(() => setError("Failed to load categories. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-lg text-gray-500 dark:text-gray-400">
        Loading categories...
      </div>
    );
  }

  if (error) {
    return <div className="py-20 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen py-8">
      <h2 className="text-2xl font-semibold mb-8 text-center">Choose a Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {categories.map((cat) => (
          <div key={cat.uid} className="flex flex-col items-center">
            <div
              onClick={() => { onSelectCategory(cat); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="w-40 h-40 rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform overflow-hidden bg-[#faf7ec]"
            >
              {cat.imageUrl && !cat.imageUrl.startsWith("blob:") ? (
                <img
                  src={cat.imageUrl}
                  alt={cat.name || cat.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
                />
              ) : null}
              <div
                className="w-full h-full items-center justify-center"
                style={{ display: cat.imageUrl && !cat.imageUrl.startsWith("blob:") ? "none" : "flex" }}
              >
                <p className="text-sm font-medium text-gray-800 text-center px-2">
                  {cat.name || cat.title}
                </p>
              </div>
            </div>
            <p className="mt-2 text-sm font-medium text-center text-gray-800 dark:text-white">
              {cat.name || cat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
