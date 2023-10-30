import { AiOutlineLeft, AiOutlineSave } from "react-icons/ai";
function SecondaryHeader({ handleRedirectLanding, handleRedirectNotes }) {
  return (
    <div className="flex justify-between items-center">
      <span className="icons" onClick={handleRedirectLanding}>
        <AiOutlineLeft />
      </span>
      <span className="icons" onClick={handleRedirectNotes}>
        <AiOutlineSave />
      </span>
    </div>
  );
}

export default SecondaryHeader;
