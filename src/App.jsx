import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Blogs from "./pages/Blogs/Blogs";

// Extra About pages
import AboutNetra from "./components/About/AboutNetra";
import AboutKiran from "./components/About/AboutKiran";

// Gallery detail
import CategoryDetail from "./components/Gallery/CategoryDetail";

// 🔥 AUTO SCROLL FIX
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Floating scroll button (keep if you want)
import ScrollToTopButton from "./components/ScrollToTop/ScrollToTopButton";

const App = () => {
  return (
    <Router>
      {/* ✅ THIS FIXES PAGE OPENING IN MIDDLE */}
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />

            {/* Extra About Pages */}
            <Route path="/about-netra" element={<AboutNetra />} />
            <Route path="/about-kiran" element={<AboutKiran />} />

            {/* Gallery Category */}
            <Route path="/gallery/:id" element={<CategoryDetail />} />
          </Routes>
        </main>

        <Footer />

        {/* Optional floating button */}
        <ScrollToTopButton />
      </div>
    </Router>
  );
};

export default App;
