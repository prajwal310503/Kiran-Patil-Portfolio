import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import logo from "../../assets/india-flag.svg";
import { FiMenu, FiX } from "react-icons/fi";
import { t } from "../../i18n/translations";
import { useLang } from "../../contexts/LangContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useLang(); // subscribe to language changes for re-render

  return (
    <header className="bg-primary text-white px-6 py-4 shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 font-medium">
          <Link to="/" className="transition duration-200 hover:scale-105">{t("nav_home")}</Link>
          <Link to="/about" className="transition duration-200 hover:scale-105">{t("nav_about")}</Link>
          <Link to="/gallery" className="transition duration-200 hover:scale-105">{t("nav_gallery")}</Link>
          <Link to="/blogs" className="transition duration-200 hover:scale-105">{t("nav_events")}</Link>
          <Link to="/query" className="transition duration-200 hover:scale-105">{t("nav_query")}</Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <button className="bg-white text-gray-800 px-6 py-1 rounded-2xl font-semibold hover:bg-gray-100">
            {t("nav_join")}
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-6 pb-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">{t("nav_home")}</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">{t("nav_about")}</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="block">{t("nav_gallery")}</Link>
          <Link to="/blogs" onClick={() => setIsOpen(false)} className="block">{t("nav_events")}</Link>
          <Link to="/query" onClick={() => setIsOpen(false)} className="block">{t("nav_query")}</Link>

          <div className="pt-4 flex flex-col gap-3">
            <LanguageSwitcher />
            <button className="bg-white text-gray-800 px-4 py-1 rounded-2xl font-semibold">
              {t("nav_join")}
            </button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
