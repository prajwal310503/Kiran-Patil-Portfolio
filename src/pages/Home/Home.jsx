import React from 'react';
import Hero from '../../components/Home/Hero';
import Impact from '../../components/Impact/Impact';
import KiranJourney from '../../components/Home/KiranJourney';
import PeopleVoice from '../../components/Home/PeopleVoice'; // ✅ New import
import Events from '../../components/Home/Events';
import { useSEO } from '../../utils/useSEO';

const Home = () => {
  useSEO({
    description: "Official website of Kiran Prakash Patil, Corporator at Panvel Municipal Corporation. A voice for the people, championing education, healthcare, sports & community welfare in Panvel since 2008.",
    path: "/",
  });

  return (
    <section className="bg-gray-100 dark:bg-darkBg dark:text-white min-h-screen transition">
      <Hero />
      <Impact />
      <KiranJourney />
      <PeopleVoice /> {/* ✅ New component added here */}
      <Events />
    </section>
  );
};

export default Home;
