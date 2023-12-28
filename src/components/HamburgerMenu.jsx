import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      console.log(`Navigating to ${sectionId}`);
      toggleMenu();
    }
  };

  return (
    <nav id="hamburger-nav">
      <div className="logo">Kalpit Jain</div>
      <div className="hamburger-menu">
        <div
          className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`menu-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <a
              className="nav-link-about"
              href="#about"
              onClick={() => handleNavLinkClick("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="nav-link-skills"
              href="#skills"
              onClick={() => handleNavLinkClick("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="nav-link-projects"
              href="#projects"
              onClick={() => handleNavLinkClick("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="nav-link-achievements"
              href="#achievements"
              onClick={() => handleNavLinkClick("achievements")}
            >
              Achievements
            </a>
          </li>
          <li>
            <a
              className="nav-link-contact"
              href="#contact"
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default HamburgerMenu;
