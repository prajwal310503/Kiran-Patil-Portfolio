import React from "react";
import { useNavigate } from "react-router-dom";
import netraImage from "../../assets/netra.jpeg";
import kiranImage from "../../assets/kiran.jpeg";

const leaders = [
  {
    name: "Netra Kiran Patil",
    title: "Visionary Leader",
    description: "Serving the people with integrity and vision since 2008.",
    image: netraImage,
    buttonText: "Know Her Journey",
    route: "/about-netra",
  },
  {
    name: "Shri Kiran Prakash Patil",
    title: "Visionary Leader",
    description: "Serving the people with integrity and vision since 2006.",
    image: kiranImage,
    buttonText: "Know His Journey",
    route: "/about-kiran",
  },
];

const AboutLeaders = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {leaders.map((leader, index) => (
        <div key={index} className="relative min-h-[600px] overflow-hidden group">
          <div className="absolute inset-0 transition duration-500 ease-in-out group-hover:scale-110 group-hover:grayscale">
            <img
              src={leader.image}
              alt={leader.name}
              className={`w-full h-full object-cover ${leader.name === "Shri Kiran Prakash Patil"
                ? "object-[40%_top]"
                : "object-center"
                }`}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end text-center text-white px-6 pb-10 z-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              {leader.name} {" "}
              <span className="font-light text-xl md:text-2xl">{leader.title}</span>
            </h2>
            <p className="mt-2 text-base md:text-lg max-w-xl mx-auto">{leader.description}</p>
            <button
              onClick={() => navigate(leader.route)}
              className="mt-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition duration-300 w-fit mx-auto"
            >
              {leader.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutLeaders;
