import { AiOutlineClose } from "react-icons/ai";

function Modal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <span>
          Designed by <span className="font-bold">Pourya Asrzad</span>
        </span>
        <span>app version 1.0.0</span>
        <span>
          Made by <span className="font-bold">Ghazal Basalighe</span>
        </span>
        <span>Enjoy!</span>
        <button onClick={closeModal} className="absolute top-5 right-5">
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}

export default Modal;
