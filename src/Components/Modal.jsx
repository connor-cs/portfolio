import React, { useState } from "react";
// import Modal from "react-modal";
import Popup from "reactjs-popup";
import { ImArrowRight } from "react-icons/im";
import "reactjs-popup/dist/index.css";

export default function ResModal() {
  const [open, setOpen] = useState(false);

  const customStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",

    transform: "translate(-50%, -50%)",
  };

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
          heigh="100%"
        ></object>
      </Popup>
      <a
        className="popup-button"
        href="/resume.pdf"
        rel="noreferrer"
        download="ConnorCyphersResume"
      >
        <ImArrowRight /> Download
      </a>
    </div>
  );
}

{
  /* <button className="modal-button" onClick={openModal}>
        modal button
      </button> */
}
{
  /* <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
        <button onClick={closeModal}>close</button>
        <iframe
          id="res"
          title="resume"
          width="90%"
          height="90%"
          src= '/public/connor-cyphers.pdf'
        />
        
      </Modal> */
}
{
  /* <a href="/connor-cyphers.pdf">text</a> */
}
