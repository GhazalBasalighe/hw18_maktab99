import { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import AddNote from "./Pages/AddNote";

function App() {
  // STATE FOR RENDERING PAGES
  const [pageToRender, setPageToRender] = useState("landing");
  // STATE FOR ADDING NEW NOTES
  const [notes, setNotes] = useState([]);
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
      />
    );
  }
}
export default App;
