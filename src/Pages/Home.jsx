import React from "react";
import { FaReact, FaJs, FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";

export default function Home() {
  return (
    <div className="home">
      <div className="intro">
        <h3>Lorem ipsum</h3>
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
          quos dolor eveniet, voluptatem delectus molestiae itaque fugiat
          architecto. Soluta similique provident vel vitae est debitis nam eaque
          fugiat eius, expedita nihil deleniti eligendi nesciunt accusamus
          voluptate quibusdam, dolorum exercitationem fuga aperiam veniam
          architecto nulla? Labore adipisci saepe autem quo minima.
        </h3>
      </div>
      <section className="home-page-right">
        <h2>My Skills</h2>
      <div className="skills">
        <FaReact size={56} />
        <FaJs size={56} />
        <DiRuby size={56} />
        <SiRubyonrails size={56} />
      </div>

      <div className="learning">
        <h2>Currently learning</h2>
        {/* <FaPython size={56} /> */}
      </div>
      </section>
    </div>
  );
}
