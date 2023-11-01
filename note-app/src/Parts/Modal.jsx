import { AiOutlineClose } from "react-icons/ai";
import { PiWarningCircleDuotone } from "react-icons/pi";

function Modal({ closeModal, pageToRender, deleteNote, selectedNote }) {
  // MODAL COMPONENT ---DELETE---
  if (pageToRender === "readNote") {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <span className="text-3xl">
            <PiWarningCircleDuotone />
          </span>
          <span className="text-xl text-center">
            Are you sure you want to delete?
          </span>
          <div className="flex justify-between w-full">
            <button
              className="modal-btn bg-red-600"
              onClick={() => deleteNote(selectedNote.id)}
            >
              Delete
            </button>
            <button
              className="modal-btn bg-green-500"
              onClick={closeModal}
            >
              Keep
            </button>
          </div>
        </div>
      </div>
    );
  }
  // MODAL COMPONENT ---ABOUT---
  else {
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
}

export default Modal;
