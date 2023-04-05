import React from "react";
import Project from "../Components/Project";

export default function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="proj-container">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}
