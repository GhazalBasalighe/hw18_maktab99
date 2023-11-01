import MainHeader from "../Components/MainHeader";
import Footer from "../Parts/Footer";
function Notes({ notes, handleRedirectAdd, handleRedirectRead }) {
  return (
    <div>
      <MainHeader />
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
      <Footer handleRedirectAdd={handleRedirectAdd} />
    </div>
  );
}

export default Notes;
