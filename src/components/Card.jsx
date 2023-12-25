import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img
        className="card-image card-item"
        src={props.image}
        alt={`${props.name}`}
        onClick={() => window.open(props.website)}
      />
      <h3 className="card-item">{props.name}</h3>
      <div className="project-button-container">
        <button
          className="project-button project-website-button"
          onClick={() => window.open(props.video)}
        >
          Demo
        </button>
        <button
          className="project-button project-github-button"
          onClick={() => window.open(props.github)}
        >
          GitHub
        </button>
      </div>
    </div>
  );
}

export default Card;
