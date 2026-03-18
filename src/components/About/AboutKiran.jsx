import React from "react";
import KiranJourney from "../../components/Home/KiranJourney";

// Mission Icons
import educationIcon from "../../assets/Icons/icon1.png";
import sustainableIcon from "../../assets/Icons/icon2.png";
import digitalIcon from "../../assets/Icons/icon3.png";

const AboutKiran = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <div className="p-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Meet Shri Kiran Prakash Patil
        </h1>

        <p className="mb-4">
          Shri Kiran Prakash Patil comes from a <strong>humble farmer’s family</strong>.
          He was born in <strong>Jalgaon district, Maharashtra</strong>, completed his primary schooling in his village,
          and later pursued his secondary education in <strong>Nashik</strong>.
        </p>

        <p className="mb-4">
          He began his journey with a <strong>Bachelor’s degree in Social Sciences</strong>,
          where he developed an understanding of how societies function and how meaningful change takes root.
          His pursuit of knowledge then led him to earn a <strong>Diploma in Medical Laboratory Technology</strong>,
          giving him insights into healthcare and the importance of community well-being.
        </p>

        <p className="mb-4">
          Never one to stop learning, he went on to complete his
          <strong> Post Graduate Diploma in Public Relation Management</strong>,
          honing the skills needed to connect with people, communicate effectively, and lead with empathy.
        </p>

        <p className="mb-4">
          Every step of his educational journey has shaped him into a leader who blends
          understanding, compassion, and vision — someone who believes that
          <strong>education is not just a qualification, but a tool to serve others better</strong>.
        </p>

        <p className="mb-4">
          He arrived in <strong>Mumbai in 2002</strong>, and two years later, in <strong>2004</strong>,
          took his first steps into <strong>politics</strong>, setting the foundation for a life committed to public service.
          People facing medical challenges often turn to him for guidance, finding steady support through treatments and procedures.
        </p>

        <p className="mb-4">
          Strong working relationships with the <strong>Police, CIDCO, Municipal Corporation,
            and the Tahsildar Office</strong> ensure quicker solutions to public concerns.
          The print and electronic media also recognize his work and often support his initiatives.
        </p>

        <p className="mb-4">
          Our <strong>sanitation workers and garbage collectors</strong>, the true
          <strong>Swachhata Doots</strong> who keep the town clean, receive consistent support.
          <strong>TT injections</strong> and basic protective care are provided to ensure their safety.
        </p>

        <p className="mb-4">
          At his core, he is a <strong>selfless person</strong> who treats the rich and the poor with the same dignity,
          stands up for justice, and gives a voice to those who feel unheard.
          He believes in <strong>humanity first</strong>, beyond caste or religion, and works to bring people together.
        </p>

        <p className="mb-10">
          He constantly motivates the <strong>youth</strong> to donate blood and organs,
          to <strong>vote actively</strong>, and to stay aware and involved in local social issues.
        </p>

        {/* Kiran Journey Section */}
        <KiranJourney />
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

export default AboutKiran;
