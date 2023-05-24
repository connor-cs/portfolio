import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../Components/Nav";
import { FaReact, FaJs, FaPython, FaNode } from "react-icons/fa";
import { DiRuby, DiGit } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import ResModal from "../Components/Modal";
import { FiSquare } from "react-icons/fi";


export default function Home() {
  return (
    <div className="home">
      <Nav />
      <div className="main">
      <div className="intro">
        <h2>Lorem ipsum</h2>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          quos dolor eveniet, voluptatem delectus molestiae itaque fugiat
          architecto. Soluta similique provident vel vitae est debitis nam eaque
          fugiat eius, expedita nihil deleniti eligendi nesciunt accusamus
          voluptate quibusdam, dolorum exercitationem fuga aperiam veniam
          archite
        </h3>
      </div>
      <section className="home-page-right">
        <h2>My Skills</h2>
        <div className="skills">
          <FaReact size={56} />
          <FaJs size={56} />
          <DiRuby size={56} />
          <SiRubyonrails size={60} />
          <DiGit size={56} />
        </div>

        <h2>Currently learning</h2>
        <div className="learning">
          <FiSquare size={56} />
        </div>
        <ResModal />
      </section>
    </div>
    </div>
  );
}
