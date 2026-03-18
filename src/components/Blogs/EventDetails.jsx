import React, { useState, useEffect } from "react";
import { getEvent } from "../../services/api";

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

  useEffect(() => {
    getEvent(event.uid)
      .then(setFullEvent)
      .catch(() => setFullEvent(event))
      .finally(() => setLoading(false));
  }, [event.uid]);

  useEffect(() => {
    const update = () => setImagesPerPage(window.innerWidth < 640 ? 4 : 8);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
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
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
      {/* Header */}
      <header className="bg-[#ff4d00] p-6 text-white flex flex-col items-center">
        <button
          onClick={onClose}
          className="self-start mb-4 px-4 py-2 bg-white text-[#c44113] rounded-lg font-medium hover:bg-gray-200"
        >
          ← Back
        </button>
        <h1 className="text-xl sm:text-3xl font-semibold text-center mb-4">
          {event.title}
        </h1>
        <div className="flex bg-white text-[#ff4d00] rounded-full overflow-hidden text-xs sm:text-sm font-semibold mb-6 select-none">
          <div className="px-4 py-1 whitespace-nowrap">
            Date: {formatDate(event.eventStart)}
          </div>
          <div className="border-l border-[#ff4d00]" />
          <div className="px-4 py-1 whitespace-nowrap">
            Location: {event.location}
          </div>
        </div>
        <p className="max-w-xl text-center text-sm sm:text-base font-light leading-relaxed">
          {event.summary}
        </p>
      </header>

      {/* Images & Pagination */}
      <section className="p-10 flex-grow overflow-auto">
        {loading ? (
          <p className="text-center text-lg text-gray-500 dark:text-gray-400">
            Loading images...
          </p>
        ) : images.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No images available for this event.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {currentImages.map((img) => (
                <img
                  key={img.id}
                  src={img.imageUrl}
                  alt={img.altText || event.title}
                  className="w-full h-40 sm:h-48 md:h-52 object-cover rounded-md"
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-10 space-x-3 items-center flex-wrap">
                <button
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className={`px-4 py-2 rounded-full border transition duration-300 ${
                    page === 1
                      ? "text-gray-400 border-gray-300 cursor-not-allowed"
                      : "bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-[#C34700] hover:text-white"
                  }`}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => handlePageChange(p)}
                    className={`px-4 py-2 rounded-full border transition duration-300 ${
                      p === page
                        ? "bg-[#C34700] text-white border-[#C34700]"
                        : "bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-[#C34700] hover:text-white"
                    }`}
                  >
                    {p}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className={`px-4 py-2 rounded-full border transition duration-300 ${
                    page === totalPages
                      ? "text-gray-400 border-gray-300 cursor-not-allowed"
                      : "bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-[#C34700] hover:text-white"
                  }`}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#C34700] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#a73900] transition"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default EventDetails;
