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
              github={"google.com"}
              video={"youtube.com"}
              website={"zenoway.com"}
            />
          </div>
          <div className="carousel-item">
            <Card
              index={0}
              name={"Zenoway"}
              image={"./assets/zenoway.png"}
              github={"google.com"}
              video={"youtube.com"}
              website={"zenoway.com"}
            />
          </div>
          <div className="carousel-item">
            <Card
              index={0}
              name={"Zenoway"}
              image={"./assets/zenoway.png"}
              github={"google.com"}
              video={"youtube.com"}
              website={"zenoway.com"}
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
