import SecondaryHeader from "../Parts/SecondaryHeader";
import Inputs from "../Components/Inputs";
function AddNote({ handleRedirectLanding, handleRedirectNotes }) {
  return (
    <div>
      <SecondaryHeader
        handleRedirectLanding={handleRedirectLanding}
        handleRedirectNotes={handleRedirectNotes}
      />
      <Inputs />
    </div>
  );
}

export default AddNote;
