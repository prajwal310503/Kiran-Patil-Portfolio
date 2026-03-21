import React, { useState, useEffect } from "react";
import { getEvents } from "../../services/api";
import EventDetails from "./EventDetails";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const EVENTS_PER_PAGE = 6;

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const AllEvents = ({ selectedEvent, setSelectedEvent }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  useLang(); // subscribe to language changes

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setError(t("events_error"));
      })
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  const indexOfLastEvent = currentPage * EVENTS_PER_PAGE;
  const indexOfFirstEvent = indexOfLastEvent - EVENTS_PER_PAGE;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedEvent) {
    return <EventDetails event={selectedEvent} onClose={() => setSelectedEvent(null)} />;
  }

  if (loading) {
    return (
      <section className="py-16 px-6 bg-white dark:bg-black">
        <div className="shimmer h-10 w-48 rounded-lg mx-auto mb-10" />
        <div className="mx-auto max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-[#f0eaea] dark:bg-[#1e1e1e] rounded-2xl p-4 flex flex-col gap-3">
              <div className="shimmer w-full h-[200px] rounded-xl" />
              <div className="shimmer h-5 w-3/4 rounded" />
              <div className="shimmer h-4 w-full rounded" />
              <div className="shimmer h-4 w-5/6 rounded" />
              <div className="shimmer h-4 w-1/3 rounded" />
              <div className="shimmer h-[35px] w-[120px] rounded-full self-end mt-2" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return <div className="py-20 text-center text-red-500">{error}</div>;
  }

  return (
    <section className="py-16 px-6 bg-white text-black dark:bg-black dark:text-white text-center transition-colors duration-500">
      <h2 className="text-[42px] font-bold mb-10 leading-tight">{t("events_heading")}</h2>

      <div className="mx-auto max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {currentEvents.map((event) => (
          <div
            key={event.uid}
            className="bg-[#f0eaea] dark:bg-[#1e1e1e] rounded-2xl shadow-md p-4 text-left hover:shadow-lg transition duration-300 flex flex-col justify-between h-full"
          >
            <img
              src={event.thumbnailUrl}
              alt={event.title}
              className="w-full h-[200px] rounded-xl object-cover mb-4"
            />
            <h3 className="text-lg font-semibold leading-snug mb-2">{event.title}</h3>
            <p className="text-base text-[#333] dark:text-gray-300 mb-2 leading-snug">
              {event.summary?.length > 100
                ? event.summary.slice(0, 100) + "..."
                : event.summary}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {formatDate(event.eventStart)}
            </p>
            <div className="flex justify-end mt-auto">
              <button
                onClick={() => { setSelectedEvent(event); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="w-[120px] h-[35px] text-white rounded-full text-sm font-medium cursor-pointer transition duration-300 bg-black hover:bg-[#C34700] dark:bg-white dark:text-black dark:hover:bg-[#C34700] dark:hover:text-white"
              >
                {t("events_read_more")}
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-3 items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full border transition duration-300 ${
              currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-[#C34700] hover:text-white"
            }`}
          >
            {t("events_previous")}
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-full border transition duration-300 ${
                page === currentPage
                  ? "bg-[#C34700] text-white border-[#C34700]"
                  : "bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-[#C34700] hover:text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full border transition duration-300 ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-[#C34700] hover:text-white"
            }`}
          >
            {t("events_next")}
          </button>
        </div>
      )}
    </section>
  );
};

export default AllEvents;
