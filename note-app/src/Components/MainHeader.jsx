import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "../Parts/Modal";
import { AiOutlineSearch, AiOutlineInfoCircle } from "react-icons/ai";

function MainHeader({ pageToRender, handleRedirectSearch }) {
  // MODAL STATE
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center h-0">
      {/* TITLE */}
      <h1 className="text-4xl font-semibold">Notes</h1>
      {/* ICONS ON THE LEFT */}
      <div className="flex items-center gap-4">
        <span className="icons" onClick={handleRedirectSearch}>
          <AiOutlineSearch />
        </span>
        <span className="icons">
          <AiOutlineInfoCircle onClick={openModal} />
        </span>
      </div>
      {isModalOpen &&
        createPortal(
          <Modal closeModal={closeModal} pageToRender={pageToRender} />,
          document.body
        )}
    </div>
  );
}

export default MainHeader;
