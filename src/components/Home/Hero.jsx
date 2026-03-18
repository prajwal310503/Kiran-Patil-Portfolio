import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/kiran.png";
import heroBg2 from "../../assets/kiran2.png";
import heroBg3 from "../../assets/kiran.png";

const Hero = ({ interval = 3000 }) => {
  const slides = [heroBg, heroBg2, heroBg3];
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  // schedule autoplay (clears/reschedules on index change)
  useEffect(() => {
    if (isPaused || document.hidden) return;

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isPaused, interval, slides.length]);

  // pause / resume on tab visibility
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) setIsPaused(true);
      else setIsPaused(false);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // helpers: always clear pending timeout before changing index
  const clearPending = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const prevSlide = () => {
    clearPending();
    setIndex((p) => (p - 1 + slides.length) % slides.length);
    setIsPaused(false); // resume autoplay after manual nav
  };

  const nextSlide = () => {
    clearPending();
    setIndex((p) => (p + 1) % slides.length);
    setIsPaused(false);
  };

  // jump to a specific slide (used by dots)
  const goTo = (i) => {
    clearPending();
    setIndex(i);
    setIsPaused(false); // restart autoplay from this point
  };

  // touch handlers (swipe)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
    clearPending();
  };
  const onTouchMove = () => {
    // optional: drag feedback
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) {
      setIsPaused(false);
      return;
    }
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const threshold = 50;
    if (diff > threshold) nextSlide();
    else if (diff < -threshold) prevSlide();
    touchStartX.current = null;
    setIsPaused(false);
  };

  const trackStyle = { transform: `translateX(-${index * 100}%)` };

  return (
    <>
      <section
        className="relative w-full h-[65vh] md:h-[110vh] overflow-hidden flex items-center justify-center"
        onMouseEnter={() => {
          setIsPaused(true);
          clearPending();
        }}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
        aria-label="Hero carousel"
      >
        {/* Track wrapper — slides are inline-flex children */}
        <div
          className="absolute left-0 top-0 h-full flex transition-transform duration-700 ease-in-out w-full"
          style={trackStyle}
        >
          {slides.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative">
              <img
                src={src}
                alt={`slide-${i + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Dots (clickable) */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`w-3 h-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white ${i === index ? "bg-white" : "bg-white/40"
                }`}
            />
          ))}
        </div>

        {/* Desktop content over slides */}
        <div className="relative z-30 text-white hidden md:flex flex-row items-center justify-between w-full max-w-7xl px-6 mt-auto md:mt-0 pointer-events-none">
          <div className="w-1/2 space-y-6 text-left pointer-events-auto">
            <h1 className="text-5xl font-bold leading-tight">
              A Voice for the People. <br />A Vision for Progress.
            </h1>
            <button
              onClick={() => navigate("/about-kiran")}
              className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-[#FF4D00] hover:text-white transition pointer-events-auto"
            >
              Know His Journey
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col gap-7 pointer-events-auto">
            <a
              href="https://www.instagram.com/kiiran_prakash_patil?igsh=MTF6eTdrbjc4Z3U1bA=="
              className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1SVbev1sU9/"
              className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://x.com/patilkiran191"
              className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Mobile overlay text/button */}
        <div className="md:hidden mt-60 px-6 text-center relative z-30">
          <h1 className="text-3xl font-bold leading-tight text-white">
            A Voice for the People. <br />A Vision for Progress.
          </h1>
          <button
            onClick={() => navigate("/about-kiran")}
            className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded-full shadow hover:bg-gray-200 transition"
          >
            Know His Journey
          </button>
        </div>
      </section>

      {/* Mobile socials + About section */}
      <div className="md:hidden text-black dark:text-white px-6 bg-white dark:bg-black py-1 text-center transition-colors">
        <div className="flex justify-center gap-5 mt-5">
          <a
            href="https://www.instagram.com/kiiran_prakash_patil?igsh=MTF6eTdrbjc4Z3U1bA=="
            className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.facebook.com/share/1SVbev1sU9//"
            className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://x.com/patilkiran191"
            className="bg-[#FF4D00] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      <div className="bg-white dark:bg-black transition-colors">
        <div className="max-w-5xl mx-auto text-center px-2 py-10">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
            About the Leader
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Within the Panvel Municipal Corporation, Shri Kiran Prakash Patil takes up the significant issues of his constituency with careful study and a firm voice. Bringing together people from every caste, religion, and social group has always been a priority, with unity placed at the center of his approach.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Traditionally, the role of a Corporator was limited to basics like water lines, drainage systems, and roads. His work
            does not stay confined to a narrow list or a fixed boundary. With a broader vision for the constituency, efforts are consistently directed toward areas such as sports, education, cultural development, and health camps. The aim is to keep the region progressive and evolving.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Support is extended to anyone in need. Shri Kiran Patil understands that both the wealthy and the poor face challenges, and each problem is treated with equal seriousness. It is never assumed that only the underprivileged require assistance; even those who appear well-off often struggle in their own way, and guiding them out of those situations becomes part of his responsibility.
          </p>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/about-kiran");
            }}
            className="px-6 py-3 bg-[#FF4D00] text-white font-semibold rounded-full shadow hover:bg-orange-600 transition"
          >
            Explore Full Bio
          </button>

        </div>
      </div>

    </>
  );
};

export default Hero;
