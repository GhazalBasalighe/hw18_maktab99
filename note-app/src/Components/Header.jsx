import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import { AiOutlineSearch, AiOutlineInfoCircle } from "react-icons/ai";

function Header() {
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
        <span className="icons">
          <AiOutlineSearch />
        </span>
        <span className="icons">
          <AiOutlineInfoCircle onClick={openModal} />
        </span>
      </div>
      {isModalOpen &&
        createPortal(<Modal closeModal={closeModal} />, document.body)}
    </div>
  );
}

export default Header;
