import { AiOutlineLeft, AiOutlineSave } from "react-icons/ai";
function SecondaryHeader(props) {
  const { handleRedirectLanding, handleRedirectNotes, handleSaveNote } =
    props;
  return (
    <div className="flex justify-between items-center">
      <span className="icons" onClick={handleRedirectLanding}>
        <AiOutlineLeft />
      </span>
      <span
        className="icons"
        onClick={() => {
          handleRedirectNotes();
          handleSaveNote();
        }}
      >
        <AiOutlineSave />
      </span>
    </div>
  );
}

export default SecondaryHeader;
