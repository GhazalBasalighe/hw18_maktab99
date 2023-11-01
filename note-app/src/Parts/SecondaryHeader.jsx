import { useState } from "react";
import { createPortal } from "react-dom";
import {
  AiOutlineLeft,
  AiOutlineSave,
  AiOutlineDelete,
} from "react-icons/ai";
import Modal from "./Modal";

function SecondaryHeader(props) {
  const {
    handleRedirectLanding,
    handleRedirectNotes,
    handleSaveNote,
    pageToRender,
    deleteNote,
    selectedNote,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  // MODAL STATE SETTERS
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center">
      <span
        className="icons"
        onClick={
          pageToRender === "addNote"
            ? handleRedirectLanding
            : handleRedirectNotes
        }
      >
        <AiOutlineLeft />
      </span>
      {pageToRender === "addNote" ? (
        //SAVE ICON
        <span className="icons" onClick={handleSaveNote}>
          <AiOutlineSave />
        </span>
      ) : (
        //DELETE ICON
        <span className="icons" onClick={openModal}>
          <AiOutlineDelete />
        </span>
      )}
      {isModalOpen &&
        createPortal(
          <Modal
            closeModal={closeModal}
            pageToRender={pageToRender}
            deleteNote={deleteNote}
            selectedNote={selectedNote}
          />,
          document.body
        )}
    </div>
  );
}

export default SecondaryHeader;
