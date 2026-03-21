import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/kiran1.jpeg";
import heroBg2 from "../../assets/kiran2.jpeg";
import heroBg3 from "../../assets/kiran3.jpeg";
import heroBg4 from "../../assets/kiran4.jpeg";
import heroBg5 from "../../assets/kiran5.jpeg";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const Hero = ({ interval = 3000 }) => {
  const slides = [
    { src: heroBg,  fit: "object-cover object-center" },
    { src: heroBg2, fit: "object-cover object-center" },
    { src: heroBg3, fit: "object-cover object-center" },
    { src: heroBg4, fit: "object-cover object-center" },
    { src: heroBg5, fit: "object-cover object-center" },
  ];
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();
  useLang(); // subscribe to language changes

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
    setIsPaused(false);
  };

  const nextSlide = () => {
    clearPending();
    setIndex((p) => (p + 1) % slides.length);
    setIsPaused(false);
  };

  const goTo = (i) => {
    clearPending();
    setIndex(i);
    setIsPaused(false);
  };

  // touch handlers (swipe)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
    clearPending();
  };
  const onTouchMove = () => {};
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

  const trackStyle = {
    transform: `translate3d(-${(index * 100) / slides.length}%, 0, 0)`,
    willChange: "transform",
  };

  // Split tagline on newline for multiline rendering
  const taglineLines = t("hero_tagline").split("\n");

  return (
    <>
      <section
        className="relative w-full h-[75vh] md:h-[110vh] overflow-hidden flex items-center justify-center"
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
        {/* Track wrapper */}
        <div
          className="absolute left-0 top-0 h-full flex transition-transform duration-700 ease-in-out"
          style={{ ...trackStyle, width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="flex-shrink-0 h-full relative" style={{ width: `${100 / slides.length}%` }}>
              <img
                src={slide.src}
                alt={`slide-${i + 1}`}
                className={`w-full h-full ${slide.fit}`}
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`w-3 h-3 rounded-full transition focus:outline-none focus:ring-2 focus:ring-white ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-7">
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
      </section>

      {/* Mobile socials */}
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
        <div className="max-w-5xl mx-auto text-center px-6 py-14">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
            {t("hero_about_heading")}
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {t("hero_about_p1")}
          </p>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {t("hero_about_p2")}
          </p>

          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
            {t("hero_about_p3")}
          </p>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/about-kiran");
            }}
            className="px-6 py-3 bg-[#FF4D00] text-white font-semibold rounded-full shadow hover:bg-orange-600 transition mt-6"
          >
            {t("hero_explore_bio")}
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
