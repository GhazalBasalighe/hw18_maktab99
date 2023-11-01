import MainHeader from "../Components/MainHeader";
import Footer from "../Parts/Footer";
function Notes({ notes, handleRedirectAdd, handleRedirectRead }) {
  return (
    <div>
      <MainHeader />
      {/* IF THERE ARE NOTES */}
      <div className="grid grid-cols-1 my-10 gap-4">
        {notes.map((note) => (
          <div
            onClick={() => handleRedirectRead(note)}
            key={note.id}
            className={`cursor-pointer rounded-lg p-6 ${note.bgColor} text-black`}
          >
            <h3 className="break-words">{note.title}</h3>
          </div>
        ))}
      </div>
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
