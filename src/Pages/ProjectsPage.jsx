import React from "react";
import Project from "../Components/Project";
import { projectData } from "../Components/ProjectData";
import image from '../images/project-bg.jpg'
import Nav from "../Components/Nav";

console.log(projectData.fullStackTravel)
//style={{backgroundImage: `url(${image})`, }}
export default function Projects() {
  return (
    <div className="projects" >
      <Nav />
      <h1>My Projects</h1>
      <div className="proj-container">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
