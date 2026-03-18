import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEvents } from "../../services/api";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEvents(Array.isArray(data) ? data.slice(0, 3) : []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500 dark:text-gray-400">
        Loading events...
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-white text-black dark:bg-black dark:text-white text-center transition-colors duration-500">
      <h2 className="text-[42px] font-bold mb-10 leading-tight">Events</h2>

      <div className="mx-auto max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4">
        {events.map((event) => (
          <div
            key={event.uid}
            className="bg-[#f0eaea] dark:bg-[#1e1e1e] rounded-2xl shadow-md p-4 text-left hover:shadow-lg transition duration-300 flex flex-col justify-between h-full"
          >
            <img
              src={event.thumbnailUrl}
              alt={event.title}
              className="w-full h-[200px] rounded-xl object-cover mb-4"
            />
            <h3 className="text-base font-semibold leading-snug mb-2">{event.title}</h3>
            <p className="text-sm text-[#333] dark:text-gray-300 mb-2 leading-snug">
              {event.summary?.length > 100
                ? event.summary.slice(0, 100) + "..."
                : event.summary}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              {formatDate(event.eventStart)}
            </p>
            <div className="flex justify-end mt-auto">
              <button
                onClick={() => navigate("/blogs")}
                className="w-[120px] h-[35px] text-white rounded-full text-sm font-medium cursor-pointer transition duration-300 bg-black hover:bg-[#C34700] dark:bg-white dark:text-black dark:hover:bg-[#C34700] dark:hover:text-white"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      <p
        onClick={() => navigate("/blogs")}
        className="mt-10 underline text-lg cursor-pointer hover:text-[#C34700]"
      >
        View More
      </p>
    </section>
  );
};

export default Events;
