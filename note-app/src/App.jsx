import { useState, useEffect } from "react";
import LandingPage from "./Pages/LandingPage";
import AddNote from "./Pages/AddNote";
import Notes from "./Pages/Notes";
import ReadNote from "./Pages/ReadNote";
import Search from "./Pages/Search";

function App() {
  const [pageToRender, setPageToRender] = useState(
    localStorage.getItem("pageToRender") || "landing"
  );
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  // NOTES INITIALIZATION WHEN THE COMPONENT MOUNTS
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];
    setNotes(storedNotes);
  }, []);
  //KEEP PAGE TO RENDER STATE AFTER REFRESH
  function pageToRenderFromLocal(newPage) {
    setPageToRender(newPage);
    localStorage.setItem("pageToRender", newPage);
  }

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
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }
  //DELETING SELECTED NOTE FROM STATE
  function deleteNote(id) {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    handleRedirectNotes();
  }
  // REDIRECT TO PAGES(WITHOUT ROUTER ☹️ )
  function handleRedirectAdd() {
    pageToRenderFromLocal("addNote");
    setPageToRender("addNote");
  }
  function handleRedirectLanding() {
    pageToRenderFromLocal("landing");
    setPageToRender("landing");
  }
  function handleRedirectNotes() {
    pageToRenderFromLocal("notes");
    setPageToRender("notes");
  }
  function handleRedirectRead(note) {
    pageToRenderFromLocal("readNote");
    setPageToRender("readNote");
    setSelectedNote(note);
  }
  function handleRedirectSearch() {
    pageToRenderFromLocal("search");
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
