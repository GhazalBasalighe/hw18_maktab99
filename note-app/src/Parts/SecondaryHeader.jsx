import {
  AiOutlineLeft,
  AiOutlineSave,
  AiOutlineDelete,
} from "react-icons/ai";
function SecondaryHeader(props) {
  const {
    handleRedirectLanding,
    handleRedirectNotes,
    handleSaveNote,
    pageToRender,
  } = props;
  return (
    <div className="flex justify-between items-center">
      <span
        className="icons"
        onClick={
          pageToRender === "addNote"
            ? handleRedirectLanding
            : handleRedirectNotes
        }
      >
        <AiOutlineLeft />
      </span>
      <span
        className="icons"
        onClick={() => {
          handleRedirectNotes();
          handleSaveNote();
        }}
      >
        {pageToRender === "addNote" ? (
          <AiOutlineSave />
        ) : (
          <AiOutlineDelete />
        )}
      </span>
    </div>
  );
}

export default SecondaryHeader;
