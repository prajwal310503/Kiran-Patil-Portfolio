import React from "react";
import { useNavigate } from "react-router-dom";
import netraImage from "../../assets/netra.png";
import kiranImage from "../../assets/kiran.png";

const leaders = [
  {
    name: "Netra Patil",
    title: "Visionary Leader",
    description: "Serving the people with integrity and vision since 2008.",
    image: netraImage,
    buttonText: "Know Her Journey",
    route: "/about-netra",
  },
  {
    name: "Shri Kiran Patil",
    title: "Visionary Leader",
    description: "Serving the people with integrity and vision since 2008.",
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
              className={`w-full h-full object-cover ${
                leader.name === "Shri Kiran Patil"
                  ? "object-[67%_center] md:object-[75%_center]"
                  : "object-center"
              }`}
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end text-center text-white px-6 pb-10 z-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              {leader.name} —{" "}
              <span className="font-light text-lg md:text-xl">{leader.title}</span>
            </h2>
            <p className="mt-2 text-sm md:text-base max-w-xl mx-auto">{leader.description}</p>
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
