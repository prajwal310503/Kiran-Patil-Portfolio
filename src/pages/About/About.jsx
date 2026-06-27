import React from 'react';
import AboutLeaders from '../../components/About/AboutLeaders'; // ✅ adjust the path if needed
import { useSEO } from '../../utils/useSEO';

const About = () => {
  useSEO({
    title: "About Our Leaders",
    description: "Meet Kiran Prakash Patil and Smt. Netra Kiran Patil — Corporators at Panvel Municipal Corporation, dedicated to serving the people of Panvel, Kharghar, and Navi Mumbai.",
    path: "/about",
  });

  return (
    <div>
      <AboutLeaders />
    </div>
  );
};

export default About;
