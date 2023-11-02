import MainHeader from "../Components/MainHeader";
import Footer from "../Parts/Footer";
import NoteGenerator from "../Parts/NoteGenerator";
function Notes(props) {
  const {
    notes,
    handleRedirectAdd,
    handleRedirectRead,
    handleRedirectSearch,
  } = props;
  return (
    <div>
      <MainHeader handleRedirectSearch={handleRedirectSearch} />
      {/* IF THERE ARE NOTES */}
      <NoteGenerator
        notes={notes}
        handleRedirectRead={handleRedirectRead}
      />
      {/* IF THERE ARE NO NOTES */}
      {notes.length === 0 && (
        <div className="h-screen grid place-items-center">
          <div>
            <img
              src="src/assets/FirstNote.png"
              alt="add your first note"
            />
            <p className="text-xl font-light text-center">
              Create your first note !
            </p>
          </div>
        </div>
        //  {/* THE METHOD ABOVE HAS BETTER READABILITY SINCE IT DOESN'T RENDER THE LANDING PAGE AGAIN IF THERE WERE NO NOTES.INSTEAD,SAME PAGE,SAME FOOTER AND HEADER,ONLY THE CONTENT CHANGES 😁*/}
      )}
      <Footer handleRedirectAdd={handleRedirectAdd} />
    </div>
  );
}

export default Notes;
