import SecondaryHeader from "../Parts/SecondaryHeader";
function ReadNote({ pageToRender, selectedNote, handleRedirectNotes }) {
  return (
    <div>
      <SecondaryHeader
        pageToRender={pageToRender}
        handleRedirectNotes={handleRedirectNotes}
      />
      <h1 className="my-10 text-5xl">{selectedNote.title}</h1>
      <p className="text-2xl">{selectedNote.description}</p>
    </div>
  );
}

export default ReadNote;
