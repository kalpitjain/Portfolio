import React from "react";

const Achievements = () => {
  const achievementsData = [
    {
      title: "Winner @ Ur-Hackathon 3.0",
      imageSrc: "./assets/URHackathon3.0.png",
    },
    { title: "Winner @ DAPPATHON", imageSrc: "./assets/dappathon.jpeg" },
    { title: "Winner @ BuidlForWeb3", imageSrc: "./assets/BuidlForWeb3.jpeg" },
    { title: "Winner @ WEB 3 INIT", imageSrc: "./assets/web3init.jpeg" },
    {
      title: "Winner @ Ur-Hackathon 2.0",
      imageSrc: "./assets/Ur-Hackathon2.0.png",
    },
    {
      title: "Winner @ Ur-Hackathon",
      imageSrc: "./assets/UR-Hackathonwinnercertificate.png",
    },
  ];

  return (
    <section id="achievements">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Achievements</h1>

      <div className="container">
        <div className="row justify-content-center d-flex">
          {achievementsData.map((achievement, index) => (
            <div key={index} className="col-md-6">
              <div className="details-container">
                <h4 className="skills-sub-title underline-on-hover">
                  {achievement.title}
                </h4>
                <div className="article-container">
                  <img
                    src={achievement.imageSrc}
                    alt="achievements"
                    className="achievements-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
