import { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import AddNote from "./Pages/AddNote";
import Notes from "./Pages/Notes";
import ReadNote from "./Pages/ReadNote";
import Search from "./Pages/Search";

function App() {
  const [pageToRender, setPageToRender] = useState("landing");
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  //ADDING NEW NOTES TO STATE
  function addNewNote(title, description) {
    const bgColors = [
      "bg-red-300",
      "bg-blue-300",
      "bg-green-300",
      "bg-yellow-300",
      "bg-sky-300",
      "bg-pink-300",
      "bg-orange-300",
      "bg-lime-300",
      "bg-emerald-300",
      "bg-teal-300",
      "bg-cyan-300",
    ];
    const newNote = {
      title,
      description,
      id: new Date(),
      bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
    };
    setNotes([...notes, newNote]);
  }
  //DELETING SELECTED NOTE FROM STATE
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id !== id));
    handleRedirectNotes();
  }
  // REDIRECT TO PAGES(WITHOUT ROUTER ☹️ )
  function handleRedirectAdd() {
    setPageToRender("addNote");
  }
  function handleRedirectLanding() {
    setPageToRender("landing");
  }
  function handleRedirectNotes() {
    setPageToRender("notes");
  }
  function handleRedirectRead(note) {
    setPageToRender("readNote");
    setSelectedNote(note);
  }
  function handleRedirectSearch() {
    setPageToRender("search");
  }
  // possible pages currently : landing, addNote, notes, readNote, search
  if (pageToRender === "landing") {
    return (
      <LandingPage
        handleRedirectAdd={handleRedirectAdd}
        handleRedirectSearch={handleRedirectSearch}
        pageToRender={pageToRender}
      />
    );
  } else if (pageToRender === "addNote") {
    return (
      <AddNote
        handleRedirectLanding={handleRedirectLanding}
        handleRedirectNotes={handleRedirectNotes}
        addNewNote={addNewNote}
        pageToRender={pageToRender}
      />
    );
  } else if (pageToRender === "notes") {
    return (
      <Notes
        notes={notes}
        handleRedirectAdd={handleRedirectAdd}
        handleRedirectRead={handleRedirectRead}
        handleRedirectSearch={handleRedirectSearch}
      />
    );
  } else if (pageToRender === "readNote") {
    return (
      <ReadNote
        pageToRender={pageToRender}
        selectedNote={selectedNote}
        handleRedirectNotes={handleRedirectNotes}
        deleteNote={deleteNote}
      />
    );
  } else if (pageToRender === "search") {
    return (
      <Search
        notes={notes}
        handleRedirectRead={handleRedirectRead}
        handleRedirectNotes={handleRedirectNotes}
      />
    );
  }
}
export default App;
