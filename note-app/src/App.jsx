import { useState } from "react";
import LandingPage from "./Pages/LandingPage";
import AddNote from "./Pages/AddNote";

function App() {
  const [pageToRender, setPageToRender] = useState("landing");
  function handleAddNote() {
    setPageToRender("addNote");
  }
  function handleBackToLanding() {
    setPageToRender("landing");
  }
  // LANDING , ADD NOTE , ALL NOTES , READ NOTE, DELETE NOTE , SEARCH NOTE
  if (pageToRender === "landing") {
    return <LandingPage handleAddNote={handleAddNote} />;
  } else if (pageToRender === "addNote") {
    return <AddNote handleBackToLanding={handleBackToLanding} />;
  }
}
export default App;
