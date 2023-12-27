import React from "react";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Profile = () => {
  const textSequence = [
    "Full Stack Web Developer",
    "Blockchain App Developer",
    "Generative AI App Developer",
  ];

  return (
    <section id="profile" className="profile-container">
      <div className="section__pic-container">
        <img
          src="./assets/kalpit.jpeg"
          alt="Kalpit Jain Profile"
          className="profile-pic"
        />
      </div>

      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>

        <h1 className="title">Kalpit Jain</h1>

        <div className="section__text__p2">
          <Typewriter
            options={{
              strings: textSequence,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 20,
            }}
          />
        </div>

        <div className="profile-button-container">
          <button
            className="profile-button profile-button-color-2"
            onClick={() => window.open("./assets/Resume_Kalpit_Jain.pdf")}
          >
            Resume
          </button>
          <button
            className="profile-button profile-button-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>

        <div id="socials-container">
          <LinkedInIcon
            className="icon linkedin-icon"
            onClick={() =>
              window.open("https://linkedin.com/in/kalpitjain18", "_blank")
            }
          />
          <GitHubIcon
            className="icon github-icon"
            onClick={() =>
              window.open("https://github.com/kalpitjain", "_blank")
            }
          />
          <TwitterIcon
            className="icon linkedin-icon"
            onClick={() =>
              window.open("https://twitter.com/_kalpitjain_", "_blank")
            }
          />
          <InstagramIcon
            className="icon linkedin-icon"
            onClick={() =>
              window.open("https://www.instagram.com/_kalpit_jain_", "_blank")
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
