import React, { useState } from "react";
import AllEvents from "../../components/Blogs/AllEvents"; // Adjust path if needed
import { useSEO } from "../../utils/useSEO";

const Blogs = () => {
  useSEO({
    title: "Events & Initiatives",
    description: "Stay updated on events, public programmes, and community initiatives by Kiran Prakash Patil — Corporator at Panvel Municipal Corporation. Catch up on ongoing work across Panvel and Navi Mumbai.",
    path: "/blogs",
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      {!selectedEvent && (
        <div
          className="bg-[#ff4d00] h-[400px] flex flex-col justify-center items-center text-white text-center px-5 font-jost"
        >
          <h1 className="font-bold text-5xl mb-2">Events</h1>
          <p className="font-light text-lg m-0">
            Catch up on ongoing initiatives, event recaps, and public announcements.
          </p>
        </div>
      )}

      <AllEvents selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />
    </>
  );
};

export default Blogs;
