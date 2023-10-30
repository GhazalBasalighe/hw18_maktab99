import { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import AddNote from "./Pages/AddNote";
import Notes from "./Pages/Notes";

function App() {
  const [pageToRender, setPageToRender] = useState("landing");
  const [notes, setNotes] = useState([]);
  //ADDING NEW NOTES TO STATE
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
  function addNewNote(title, description) {
    const newNote = {
      title,
      description,
      id: new Date(),
      bgColor: bgColors[Math.floor(Math.random() * bgColors.length)],
    };
    setNotes([...notes, newNote]);
    console.log(notes);
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
  // LANDING , ADD NOTE , ALL NOTES , READ NOTE, DELETE NOTE , SEARCH NOTE
  if (pageToRender === "landing") {
    return <LandingPage handleRedirectAdd={handleRedirectAdd} />;
  } else if (pageToRender === "addNote") {
    return (
      <AddNote
        handleRedirectLanding={handleRedirectLanding}
        handleRedirectNotes={handleRedirectNotes}
        addNewNote={addNewNote}
      />
    );
  } else if (pageToRender === "notes") {
    return <Notes notes={notes} handleRedirectAdd={handleRedirectAdd} />;
  }
}
export default App;
