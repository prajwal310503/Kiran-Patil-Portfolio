import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import lotusLogo from "../../assets/bjp.png";

const Footer = () => {
  const location = useLocation();

  const handleHomeClick = () => {
    // If already on Home page, scroll smoothly to top
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#ff4d00] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

        {/* Left Section - Logo & Social Icons */}
        <div className="flex flex-col items-start gap-4">
          <Link
            to="/"
            onClick={handleHomeClick}
            className="cursor-pointer"
          >
            <img src={lotusLogo} alt="Logo" className="w-16 h-16" />
          </Link>


          <div className="flex items-center gap-4 text-2xl">
            <a
              href="https://www.instagram.com/kiiran_prakash_patil"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#FF4D00] w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/share/1SVbev1sU9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#FF4D00] w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>

            <a
              href="https://x.com/patilkiran191"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#FF4D00] w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">Quick Links</h4>
          <ul className="text-lg space-y-1">
            <li>
              <Link
                to="/"
                onClick={handleHomeClick}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/blogs" className="hover:underline">Events</Link></li>
          </ul>
        </div>

        {/* Explore Bio */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">Explore Bio</h4>
          <ul className="text-lg space-y-1">
            <li>
              <Link to="/about-kiran" className="hover:underline">
                Meet Shri Kiran Prakash Patil
              </Link>
            </li>
            <li>
              <Link to="/about-netra" className="hover:underline">
                Smt. Netra Kiran Patil
              </Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">Address</h4>
          <a
            href="https://www.google.com/maps/place/ISHA+CHS+Sector+19+Kharghar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg leading-6 hover:underline block"
          >
            Isha CHS, Plot No. 76/77, Shop No. 12 <br />
            Sector 19, Kharghar, Navi Mumbai <br />
            Maharashtra 410210
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-md mt-10 border-t border-white/30 pt-4">
        © 2025 kiranpatil. All rights reserved. | Developed by Codifyne
      </div>
    </footer>
  );
};

export default Footer;
