import React from "react";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div className="section-container">
        <div className="section__pic-container">
          <img
            src="./assets/kalpit.jpeg"
            alt="Kalpit Jain Profile"
            className="about-pic"
          />
        </div>

        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <WorkspacePremiumIcon className="icon" />
              <h3>Experience</h3>
              <p>
                <strong>Software Engineer Intern</strong> <br />
                <MicrosoftIcon fontSize="small" className="ms-icon" />
                Microsoft
              </p>
            </div>
            <div className="details-container">
              <PeopleAltIcon className="icon" />
              <h3>Education</h3>
              <p>
                <strong>B.Tech (Computer Science)</strong>
                <br />
                JECRC College
              </p>
            </div>
          </div>

          <div className="text-container">
            <p>
              I am a passionate Full Stack Web Developer, I specialize in
              <strong> MERN stack</strong>,
              <strong> EVM-based Blockchain</strong>, and
              <strong> Generative AI </strong>
              Application development. <br />
              My commitment to excellence, as demonstrated through{" "}
              <strong>successful hackathon wins</strong>, showcasing my
              dedication and passion for technology. <br />
              Eager to embrace new challenges, I am excited about contributing
              to impactful projects that drive positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
