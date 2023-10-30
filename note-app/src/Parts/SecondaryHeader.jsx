import { AiOutlineLeft, AiOutlineSave } from "react-icons/ai";
function SecondaryHeader({ handleBackToLanding }) {
  return (
    <div className="flex justify-between items-center">
      <span className="icons" onClick={handleBackToLanding}>
        <AiOutlineLeft />
      </span>
      <span className="icons">
        <AiOutlineSave />
      </span>
    </div>
  );
}

export default SecondaryHeader;
