import SecondaryHeader from "../Parts/SecondaryHeader";
import Inputs from "../Components/Inputs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
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

  function handleSaveNote() {
    if (title) {
      addNewNote(title, description);
      handleRedirectNotes();
    } else {
      toast("Please Enter Title");
    }
  }
  return (
    <div>
      <SecondaryHeader
        handleRedirectLanding={handleRedirectLanding}
        handleSaveNote={handleSaveNote}
        handleRedirectNotes={handleRedirectNotes}
        pageToRender={pageToRender}
      />
      <Inputs setTitle={setTitle} setDescription={setDescription} />
      {!title && <ToastContainer />}
    </div>
  );
}

export default AddNote;
