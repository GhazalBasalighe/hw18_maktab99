function NoteGenerator({ notes, handleRedirectRead }) {
  return (
    <div className="grid grid-cols-1 my-10 gap-4">
      {notes.map((note) => (
        <div
          onClick={() => handleRedirectRead(note)}
          key={note.id}
          className={`cursor-pointer rounded-lg p-6 ${note.bgColor} text-black flex flex-col gap-2`}
        >
          <h3 className="text-lg font-bold truncate">{note.title}</h3>
          <p className="text-xs truncate">
            {note.description.split("\n")[0]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NoteGenerator;
