"use client";

import React, { useState } from "react";

export const Header = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {["Home", "Projects", "About", "Contact"].map((link) => (
          <a
            key={link}
            href="#"
            onClick={() => handleLinkClick(link)}
            className={`nav-item ${
              activeLink === link
                ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
                : ""
            }`}
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  );
};
