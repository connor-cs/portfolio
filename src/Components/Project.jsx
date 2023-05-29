import React from "react";
import { Carousel } from "react-responsive-carousel";
import Chip from "./Chip";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BsGithub} from "react-icons/bs"

//proj image1, 2, and 3
//link if available
//tech used
//description
//link to code
//link to demo

export default function Project({ props }) {
  console.log(props)
  return (
    <div className="proj">
      <Carousel>
        <div className="carousel">
          <img
            className="proj-image"
            src={props.images.first}
            alt="first"
          />
          <div>
            <ul className="proj-desc">
              {props.desc.map(text=><li>{text}</li>)}
            </ul>
          </div>
        </div>
        <div>
          <img
            className="proj-image"
            alt="second"
            src={props.images.second}
          />
          <div>
          <ul className="proj-desc">
              {props.desc.map(text=><li>{text}</li>)}
            </ul>
          </div>
        </div>
        <div>
          <img
            className="proj-image"
            alt="third"
            src={props.images.third}
          />
          <div>
          <ul className="proj-desc">
              {props.desc.map(text=><li>{text}</li>)}
            </ul>
            <div className="tech-container">
              {props.tech.map(tech=><Chip tech={tech} />)}
              </div>
          </div>
        
        </div>
      </Carousel>
        <div className="links-section">
          View the code:  <BsGithub className="carousel-icon" size={25} onClick={()=>window.open(`${props.code}`)}/>
          {props.link ? <p>View it <a href={props.link}>here</a></p> : null}
          {props.demo ? <p>View <a href={props.demo}>demo</a></p> : null}
        </div>
    </div>
  );
}
