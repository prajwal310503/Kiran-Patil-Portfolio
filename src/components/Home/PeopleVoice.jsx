import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import person1 from "../../assets/peoples/people1.png";
import person2 from "../../assets/peoples/people1.png";
import person3 from "../../assets/peoples/people1.png";
import person4 from "../../assets/peoples/people1.png";

const testimonials = [
  {
    message:
      "Initiated a rural education campaign enrolling 10,000+ children into government schools. Focused on girl-child education and dropout recovery.",
    image: person1,
  },
  {
    message:
      "Digital vans equipped with tablets brought smiles to tribal children learning ABCs for the first time.",
    image: person2,
  },
  {
    message:
      "Empowered village youth through basic digital literacy sessions, enabling better job opportunities.",
    image: person3,
  },
  {
    message:
      "Scholarship helped my daughter continue schooling. I’m grateful to the initiative.",
    image: person4,
  },
];

const PeopleVoice = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F5F0E6] py-16 px-4 flex flex-col items-center transition-all duration-500">
      {/* Heading */}
      <div className="flex items-center gap-3 mb-6">
        <FaQuoteLeft className="text-4xl text-[#ff4d00]" />
        <h2 className="text-3xl md:text-4xl font-bold text-black">People's Voice</h2>
      </div>

      {/* Testimonial Box */}
      <div className="bg-[#ff4d00] text-white p-6 md:p-10 max-w-3xl min-h-[180px] rounded-[80px_0_80px_0] relative shadow-lg transition-all duration-500">
        <p className="text-md md:text-lg font-medium leading-relaxed">
          {testimonials[index].message}
        </p>
        <img
          src={testimonials[index].image}
          alt="Person"
          className="w-16 h-16 rounded-full object-cover absolute -bottom-6 right-6 border-4 border-white"
        />
      </div>

      {/* Dots */}
      <div className="mt-10 flex gap-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#C34700]" : "bg-[#E6CDB8]"
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleVoice;
