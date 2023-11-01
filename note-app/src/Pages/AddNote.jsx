import SecondaryHeader from "../Parts/SecondaryHeader";
import Inputs from "../Components/Inputs";
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
    if (title) addNewNote(title, description);
  }
  return (
    <div>
      <SecondaryHeader
        handleRedirectLanding={handleRedirectLanding}
        handleRedirectNotes={handleRedirectNotes}
        handleSaveNote={handleSaveNote}
        pageToRender={pageToRender}
      />
      <Inputs setTitle={setTitle} setDescription={setDescription} />
    </div>
  );
}

export default AddNote;
