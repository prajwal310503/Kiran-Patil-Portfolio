import React, { useState, useEffect } from "react";
import { getEvent } from "../../services/api";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const EventDetails = ({ event, onClose }) => {
  const [fullEvent, setFullEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(8);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  useLang();

  useEffect(() => {
    getEvent(event.uid)
      .then(setFullEvent)
      .catch(() => setFullEvent(event))
      .finally(() => setLoading(false));
  }, [event.uid]);

  useEffect(() => {
    const update = () => setImagesPerPage(window.innerWidth < 640 ? 6 : 16);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setLightboxSrc(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const images = (fullEvent?.images || []).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (page - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-white dark:bg-black text-black dark:text-white">
      {/* Header */}
      <header className="bg-[#ff4d00] px-8 sm:px-16 md:px-24 py-6 text-white flex flex-col items-center">
        <button
          onClick={onClose}
          className="self-start mb-4 px-4 py-2 bg-white text-[#c44113] rounded-lg font-medium hover:bg-gray-200"
        >
          {t("event_back")}
        </button>
        <h1 className="text-xl sm:text-3xl font-semibold text-center mb-4">
          {event.title}
        </h1>
        <div className="flex bg-white text-[#ff4d00] rounded-full overflow-hidden text-xs sm:text-sm font-semibold mb-6 select-none">
          <div className="px-4 py-1 whitespace-nowrap">
            {formatDate(event.eventStart)}
          </div>
          <div className="border-l border-[#ff4d00]" />
          <div className="px-4 py-1 whitespace-nowrap">
            {event.location}
          </div>
        </div>
        {(fullEvent?.description || event.description) && (
          <div
            dangerouslySetInnerHTML={{ __html: fullEvent?.description || event.description }}
            className="max-w-4xl text-center text-lg sm:text-xl font-light leading-relaxed mt-4 mb-2 [&_p]:mb-5 [&_p]:leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:text-left [&_ol]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-left [&_ul]:mb-4"
          />
        )}
      </header>

      {/* Images & Pagination */}
      <section className="px-6 sm:px-10 py-14">
        {loading ? (
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="shimmer rounded-xl aspect-[4/3] w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)]" />
            ))}
          </div>
        ) : images.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            {t("event_no_images")}
          </p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-4">
              {currentImages.map((img) => (
                <div
                  key={img.id}
                  className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/3] w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)]"
                  onClick={() => setLightboxSrc(img.imageUrl)}
                >
                  <img
                    src={img.imageUrl}
                    alt={img.altText || event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold border border-white px-4 py-2 rounded-full">
                      View
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-1 items-center flex-wrap">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`flex items-center gap-1 px-3 py-2 rounded border text-sm transition duration-300 ${
                    page === 1
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-black dark:text-white border-gray-300 hover:bg-[#C34700] hover:text-white hover:border-[#C34700]"
                  }`}
                >
                  ← {t("events_previous")}
                </button>

                {(() => {
                  const pages = [];
                  const delta = 1;
                  const left = page - delta;
                  const right = page + delta;
                  let last = 0;
                  for (let p = 1; p <= totalPages; p++) {
                    if (p === 1 || p === totalPages || (p >= left && p <= right)) {
                      if (last && p - last > 1) pages.push("...");
                      pages.push(p);
                      last = p;
                    }
                  }
                  return pages.map((p, i) =>
                    p === "..." ? (
                      <span key={`ellipsis-${i}`} className="px-2 py-2 text-sm text-gray-500">…</span>
                    ) : (
                      <button
                        key={p}
                        onClick={() => handlePageChange(p)}
                        className={`w-9 h-9 rounded border text-sm transition duration-300 ${
                          p === page
                            ? "bg-[#C34700] text-white border-[#C34700]"
                            : "text-black dark:text-white border-gray-300 hover:bg-[#C34700] hover:text-white hover:border-[#C34700]"
                        }`}
                      >
                        {p}
                      </button>
                    )
                  );
                })()}

                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className={`flex items-center gap-1 px-3 py-2 rounded border text-sm transition duration-300 ${
                    page === totalPages
                      ? "text-gray-400 border-gray-200 cursor-not-allowed"
                      : "text-black dark:text-white border-gray-300 hover:bg-[#C34700] hover:text-white hover:border-[#C34700]"
                  }`}
                >
                  {t("events_next")} →
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#C34700] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#a73900] transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 leading-none"
            onClick={() => setLightboxSrc(null)}
          >
            ×
          </button>
          <img
            src={lightboxSrc}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default EventDetails;
