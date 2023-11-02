import SecondaryHeader from "../Parts/SecondaryHeader";
import Inputs from "../Components/Inputs";
import { useState } from "react";
import { createPortal } from "react-dom";
import toast, { Toaster } from "react-hot-toast";

function AddNote(props) {
  const {
    handleRedirectLanding,
    handleRedirectNotes,
    addNewNote,
    pageToRender,
  } = props;
  // STATE FOR TITLE AND DESCRIPTION
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //FUNCTION FOR SAVING AND VALIDATING NOTES
  function handleSaveNote() {
    if (title) {
      addNewNote(title, description);
      handleRedirectNotes();
    } else {
      toast.error("Please Enter Title", {
        style: {
          borderRadius: "1rem",
          background: "#3B3B3B",
          color: "#fff",
          padding: "1rem",
        },
      });
    }
  }
  return (
    <div className="toast relative">
      <SecondaryHeader
        handleRedirectLanding={handleRedirectLanding}
        handleSaveNote={handleSaveNote}
        handleRedirectNotes={handleRedirectNotes}
        pageToRender={pageToRender}
      />
      <Inputs setTitle={setTitle} setDescription={setDescription} />
      {
        (!title,
        createPortal(
          <Toaster
            position="top-center"
            containerStyle={{
              position: "absolute",
              top: "6rem",
            }}
            reverseOrder={false}
          />,
          document.body
        ))
      }
    </div>
  );
}

export default AddNote;
