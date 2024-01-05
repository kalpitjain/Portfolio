import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>

      <div
        id="carouselControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000"
        data-bs-pause="hover"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Card
              index={0}
              name={"Zenoway"}
              image={"./assets/zenoway.png"}
              github={"https://github.com/kalpitjain/zenoway"}
              video={"https://www.youtube.com/watch?v=3MGsaFB9p8A"}
              website={"https://zenoway.on.fleek.co/"}
            />
          </div>
          <div className="carousel-item">
            <Card
              index={1}
              name={"Dossier"}
              image={"./assets/Dossier.png"}
              github={"https://github.com/kalpitjain/dossier"}
              video={"https://youtu.be/BQ3aimhZpNk"}
              website={"https://vtvil-kaaaa-aaaal-qbfjq-cai.raw.ic0.app/"}
            />
          </div>
          <div className="carousel-item">
            <Card
              index={2}
              name={"Face Web"}
              image={"./assets/faceweb.png"}
              github={"https://github.com/kalpitjain/face-web"}
              video={"https://www.youtube.com/watch?v=R5uP1v-v__8"}
              website={"https://face-web-app.vercel.app/"}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
