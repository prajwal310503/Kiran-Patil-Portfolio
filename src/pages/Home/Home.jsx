import React from 'react';
import Hero from '../../components/Home/Hero';
import Impact from '../../components/Impact/Impact';
import KiranJourney from '../../components/Home/KiranJourney';
import PeopleVoice from '../../components/Home/PeopleVoice'; // ✅ New import
import Events from '../../components/Home/Events';

const Home = () => {
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
