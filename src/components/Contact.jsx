import React from "react";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      <div className="contact-info-container">
        <EmailRoundedIcon
          className="icon contact-icon email-icon"
          onClick={() => {
            window.location.href = "mailto:kalpit.jain1810@gmail.com";
          }}
        />

        <LinkedInIcon
          className="icon linkedin-icon"
          onClick={() =>
            window.open("https://linkedin.com/in/kalpitjain18", "_blank")
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

        <GitHubIcon
          className="icon github-icon"
          onClick={() => window.open("https://github.com/kalpitjain", "_blank")}
        />
      </div>
    </section>
  );
};

export default Contact;
