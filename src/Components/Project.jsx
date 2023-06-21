import React from "react";
import { Carousel } from "react-responsive-carousel";
import Chip from "./Chip";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsGithub } from "react-icons/bs";

export default function Project({ props }) {
  console.log(props);
  return (
    <div className="proj">
      <h2>{props.title}</h2>
      <Carousel>
        <div className="carousel">
          <img className="proj-image" src={props.images.first} alt="first" />
        </div>
        <div>
          <img className="proj-image" alt="second" src={props.images.second} />
        </div>
        <div>
          <img className="proj-image" alt="third" src={props.images.third} />
        </div>
      </Carousel>
      <div>
        <ul className="proj-desc">
          {props.desc.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
        <div className="tech-container">
          {props.tech.map((tech) => (
            <Chip tech={tech} />
          ))}
        </div>
      </div>
      <div className="links-section">
        <BsGithub
          className="carousel-icon"
          size={25}
          onClick={() => window.open(`${props.code}`)}
        />
        {props.link ? (
          <button className="view-deploy-btn" onClick={()=>window.open(`${props.link}`)}>View it here</button>
        ) : null}
        {props.demo ? (
          <p>
            View <a href={props.demo}>demo</a>
          </p>
        ) : null}
      </div>
    </div>
  );
}
