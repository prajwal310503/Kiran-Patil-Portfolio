import React, { useState, useEffect, useRef } from "react";
import { getGallery } from "../../services/api";

const THUMBS_VISIBLE = 4;

const ProjectDetail = ({ project, onBack }) => {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    getGallery(project.uid)
      .then(setGallery)
      .catch(() => setGallery(project))
      .finally(() => setLoading(false));
  }, [project.uid]);

  // Try images from detail API; fall back to thumbnailUrl from list item
  const rawImages = gallery?.images || [];
  const images = rawImages.length > 0
    ? rawImages.sort((a, b) => a.displayOrder - b.displayOrder)
    : project.thumbnailUrl
      ? [{ id: "thumb", imageUrl: project.thumbnailUrl, altText: project.title }]
      : [];

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        setThumbStart((ts) => {
          if (next >= ts + THUMBS_VISIBLE) return next - THUMBS_VISIBLE + 1;
          if (next < ts) return next;
          return ts;
        });
        return next;
      });
    }, 3000);
  };

  useEffect(() => {
    if (images.length === 0) return;
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  const goTo = (idx) => {
    setCurrentIndex(idx);
    setThumbStart((ts) => {
      if (idx >= ts + THUMBS_VISIBLE) return idx - THUMBS_VISIBLE + 1;
      if (idx < ts) return idx;
      return ts;
    });
    startAutoSlide();
  };

  const prevThumb = () => setThumbStart((ts) => Math.max(0, ts - 1));
  const nextThumb = () => setThumbStart((ts) => Math.min(images.length - THUMBS_VISIBLE, ts + 1));

  if (loading) {
    return (
      <div className="px-4 sm:px-8 pt-4 pb-10 bg-white dark:bg-black">
        <div className="shimmer w-full max-w-5xl h-[60vh] sm:h-[75vh] rounded-xl mx-auto mb-4" />
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="shimmer w-9 h-9 rounded-full" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="shimmer w-20 h-16 sm:w-28 sm:h-20 rounded-lg" />
          ))}
          <div className="shimmer w-9 h-9 rounded-full" />
        </div>
        <div className="shimmer h-8 w-64 rounded mx-auto mb-2" />
        <div className="shimmer h-4 w-20 rounded mx-auto mb-6" />
        <div className="max-w-3xl mx-auto space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="shimmer h-4 rounded" style={{ width: `${85 + (i % 3) * 5}%` }} />
          ))}
        </div>
      </div>
    );
  }

  const visibleThumbs = images.slice(thumbStart, thumbStart + THUMBS_VISIBLE);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 sm:px-8 pt-4 pb-10">

      {/* Main Image */}
      {images.length > 0 && (
        <div className="flex justify-center mb-4">
          <img
            src={images[currentIndex]?.imageUrl}
            alt={images[currentIndex]?.altText || project.title}
            className="w-full max-w-5xl h-[60vh] sm:h-[75vh] object-contain rounded-xl border-2 border-[#ff4d00] shadow-lg bg-gray-50"
          />
        </div>
      )}

      {/* Thumbnail Row with Arrows */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={prevThumb}
            disabled={thumbStart === 0}
            className="w-9 h-9 rounded-full bg-[#ff4d00] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[#c44113] transition"
          >
            ‹
          </button>

          <div className="flex gap-2 sm:gap-3">
            {visibleThumbs.map((img, i) => {
              const idx = thumbStart + i;
              return (
                <img
                  key={img.id}
                  src={img.imageUrl}
                  alt={img.altText || `thumb-${idx}`}
                  onClick={() => goTo(idx)}
                  className={`w-20 h-16 sm:w-28 sm:h-20 object-cover rounded-lg cursor-pointer border-2 transition ${
                    idx === currentIndex ? "border-[#ff4d00]" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                />
              );
            })}
          </div>

          <button
            onClick={nextThumb}
            disabled={thumbStart + THUMBS_VISIBLE >= images.length}
            className="w-9 h-9 rounded-full bg-[#ff4d00] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[#c44113] transition"
          >
            ›
          </button>
        </div>
      )}

      {/* Back Button */}
      <div className="flex justify-start max-w-3xl mx-auto mb-4">
        <button
          onClick={() => { onBack(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          ← Back
        </button>
      </div>

      {/* Title + Year */}
      <h2 className="text-xl sm:text-3xl font-bold mb-1 text-center">
        {project.title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 text-center mb-6 text-sm sm:text-base">
        {project.startDate ? new Date(project.startDate).getFullYear() : ""}
      </p>

      {/* Description */}
      {gallery?.description && (
        <div
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed text-lg sm:text-xl space-y-4 [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: gallery.description }}
        />
      )}
    </div>
  );
};

export default ProjectDetail;
