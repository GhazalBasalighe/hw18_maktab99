import SecondaryHeader from "../Parts/SecondaryHeader";
function ReadNote(props) {
  const { pageToRender, selectedNote, handleRedirectNotes, deleteNote } =
    props;
  let component = <h1>Note Not Found</h1>;
  if (!!selectedNote) {
    component = (
      <>
        <h1 className="my-10 text-5xl break-words overflow-auto">
          {selectedNote.title}
        </h1>
        <textarea
          readOnly
          className="text-2xl inputs resize-none overflow-auto"
        >
          {selectedNote.description}
        </textarea>
      </>
    );
  }
  return (
    <div>
      <SecondaryHeader
        pageToRender={pageToRender}
        handleRedirectNotes={handleRedirectNotes}
        deleteNote={deleteNote}
        selectedNote={selectedNote}
      />
      {component}
    </div>
  );
}

export default ReadNote;
