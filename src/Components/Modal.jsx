import React, { useState } from "react";
// import Modal from "react-modal";
import Popup from "reactjs-popup";
import { ImArrowRight } from "react-icons/im";
import "reactjs-popup/dist/index.css";

export default function ResModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="popup-container">
      <button className="popup-button" onClick={() => setOpen(!open)}>
        <ImArrowRight /> View
      </button>
      <Popup open={open}>
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          alt="resume"
          alria-label="alt text"
        ></object>
      </Popup>
      <a
        className="popup-button"
        href="/resume.pdf"
        rel="noreferrer"
        download="ConnorCyphersResume"
      >
        <ImArrowRight />  Download
      </a>
    </div>
  );
}
