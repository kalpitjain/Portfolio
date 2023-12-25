import React from "react";

const Navbar = () => {
  const handleNavLinkClick = (sectionId) => {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav id="desktop-nav">
      <div
        className="logo"
        onClick={() => {
          window.location.reload();
        }}
      >
        Kalpit Jain
      </div>

      <div>
        <ul className="nav-links">
          <li>
            <a href="#about" onClick={() => handleNavLinkClick("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleNavLinkClick("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => handleNavLinkClick("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              onClick={() => handleNavLinkClick("achievements")}
            >
              Achievements
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleNavLinkClick("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
