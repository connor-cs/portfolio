import React, { useState } from "react";
import Modal from "react-modal";


export default function ResModal() {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const customStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",

    transform: "translate(-50%, -50%)",
  };

  return (
    <div>
      <button className="modal-button" onClick={openModal}>
        modal button
      </button>
      <Modal isOpen={modal} onRequestClose={closeModal} style={customStyles}>
        <button onClick={closeModal}>close</button>
        <iframe
          id="res"
          title="resume"
          width="90%"
          height="90%"
          src="/src/doc/resume.pdf"
        />
      </Modal>
    </div>
  );
}
