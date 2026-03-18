import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <label className="flex items-center cursor-pointer select-none">
      <div className="relative w-14 h-8">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="sr-only"
        />
        {/* Track */}
        <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-300" />

        {/* Thumb */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-orange-600 dark:text-yellow-400 transition-transform duration-300 ${
            darkMode ? 'translate-x-6' : ''
          }`}
        >
          {darkMode ? <FaMoon className="text-sm" /> : <FaSun className="text-sm" />}
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;
