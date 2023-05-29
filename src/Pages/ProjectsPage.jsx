import React from "react";
import Project from "../Components/Project";
import { projectData } from "../Components/ProjectData";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";

console.log(projectData.fullStackTravel)

export default function Projects() {
  return (
    <div className="projects" >
      <Nav />
      <h1>My Projects</h1>
      <div className="proj-container">
        <Project props={projectData.fullStackTravel}/>
        <Project props={projectData.travelAdvisor}/>
        <Project props={projectData.movieHub}/>
        <Project props={projectData.notesAppData}/>
        {/* <Project />
        <Project /> */}
      </div>
      <Footer />
    </div>
  );
}
