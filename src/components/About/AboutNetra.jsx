import React from "react";
import NetraJourney from "../../components/About/NetraJourney";

// Mission Icons
import educationIcon from "../../assets/Icons/icon1.png";
import sustainableIcon from "../../assets/Icons/icon2.png";
import digitalIcon from "../../assets/Icons/icon3.png";

const AboutNetra = () => {
  return (
    // Apply background and text color here
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <div className="p-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Meet Smt. Netra Kiran Patil
        </h1>

        <p className="mb-4">
          Born in <strong>Kolhapur</strong> and later pursuing her education in
          <strong> Mumbai</strong>, Mrs. Netra Kiran Patil’s journey reflects her belief
          that <strong>real change begins with action</strong>. A graduate in
          <strong> Commerce from Mumbai University</strong>, she further strengthened her
          skills with a <strong>Diploma in Office Administration</strong>, shaping her
          people-centric and organized approach to leadership.
        </p>

        <p className="mb-4">
          Her political journey began in <strong>2016 with the BJP</strong>, and since then,
          she has been actively involved in <strong>social initiatives</strong>, working
          alongside Shri Kiran Prakash Patil to address community needs and drive positive change.
        </p>

        <p className="mb-4">
          Today, she serves as a dedicated <strong>Corporator of the Panvel Municipal Corporation</strong>,
          where she consistently raises important questions on key social issues and works
          to create <strong>public awareness</strong>.
        </p>

        <p className="mb-4">
          Beyond politics, she contributes widely to community development as the
          <strong> Secretary of the Kharghar Sports Academy</strong>, promoting youth engagement,
          and as the <strong>Vice President of the Yuvaprerna Samajik Sanstha</strong>,
          driving social empowerment and grassroots initiatives.
        </p>

        <p className="mb-10">
          Her leadership extends far beyond conventional roles, reaching across
          <strong>sports, education, cultural activities, health initiatives</strong>,
          and every corner of <strong>community welfare</strong>.
        </p>

        {/* Netra's Journey Section */}
        <NetraJourney />
      </div>

      {/* Mission Section */}
      <div className="py-20 text-center px-6">
        <h2 className="text-4xl font-extrabold mb-8">Mission</h2>
        <p className="mb-14 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A nation where every voice matters, every child learns, and every citizen lives with dignity and opportunity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-16 sm:gap-x-30 items-center justify-items-center">
          <div className="flex flex-col items-center">
            <img src={educationIcon} alt="Education" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">Quality education for All</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={sustainableIcon} alt="Sustainable" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">Sustainable Development</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={digitalIcon} alt="Digital India" className="w-42 h-42 mb-6" />
            <p className="text-lg font-semibold">Digital India, Rural First</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNetra;
