import React, { useState } from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import { FaReact, FaJs, FaPython, FaNode } from "react-icons/fa";
import { DiRuby, DiGit } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import ResModal from "../Components/Modal";
import { FiSquare } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="home">
      <Nav />
      <div className="main">
        <div className="intro">
          <h2>Lorem ipsum</h2>
          <h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            quos dolor eveniet 
          </h3>
        </div>
        <section className="home-page-right">
          <h2>My Skills</h2>
          <div className="skills">
            <FaReact size={56} className="skill" />
            <FaJs size={56} className="skill" />
            <DiRuby size={56} className="skill" />
            <SiRubyonrails size={60} className="skill" />
            <DiGit size={56} className="skill" />
          </div>

          <h2>Currently learning</h2>
          <div className="learning">
            <FiSquare size={56} />
          </div>
          <div className="resume-container">
            <button className="res-button" onClick={() => setClicked(!clicked)}>
              RESUME <HiMenu />
            </button>
            {clicked ? <ResModal /> : null}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
