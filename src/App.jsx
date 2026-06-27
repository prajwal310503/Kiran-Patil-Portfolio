import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const Query = lazy(() => import("./pages/Query/Query"));
const AboutNetra = lazy(() => import("./components/About/AboutNetra"));
const AboutKiran = lazy(() => import("./components/About/AboutKiran"));
const CategoryDetail = lazy(() => import("./components/Gallery/CategoryDetail"));

const App = () => {
  return (
    <Router>
      {/* ✅ THIS FIXES PAGE OPENING IN MIDDLE */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/about-netra" element={<AboutNetra />} />
              <Route path="/about-kiran" element={<AboutKiran />} />
              <Route path="/query" element={<Query />} />
              <Route path="/gallery/:id" element={<CategoryDetail />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {/* Optional floating button */}
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
