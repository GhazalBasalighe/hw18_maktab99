import SecondaryHeader from "../Parts/SecondaryHeader";
import Inputs from "../Components/Inputs";
function AddNote({ handleBackToLanding }) {
  return (
    <div>
      <SecondaryHeader handleBackToLanding={handleBackToLanding} />
      <Inputs />
    </div>
  );
}

export default AddNote;
