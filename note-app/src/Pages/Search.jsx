import { useRef, useCallback, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import NoteGenerator from "../Parts/NoteGenerator";

function Search({ notes, handleRedirectRead, handleRedirectNotes }) {
  const [searchResults, setSearchResults] = useState([]);
  const userInput = useRef();
  const debounceDelay = 500; // Adjust the delay as needed
  //   DEBOUNCED USER INPUT SETTING
  const handleUserInput = useCallback(
    (e) => {
      clearTimeout(userInput.current.timeout);
      userInput.current.value = e.target.value; // Update the input value immediately
      userInput.current.timeout = setTimeout(() => {
        searchNotes(userInput.current.value); // Perform search after the delay
      }, debounceDelay);
    },
    [debounceDelay]
  );
  useEffect(() => {
    console.log("Updated searchResults:", searchResults);
  }, [searchResults]);

  function searchNotes(inputValue) {
    const results = notes.filter((note) =>
      note.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResults(results);
  }
  return (
    <div className="h-screen grid">
      <div className="relative">
        <input
          type="text"
          placeholder="Search your notes"
          className="search-bar"
          ref={userInput}
          onChange={handleUserInput}
        />
        <span
          className="absolute right-4 top-3 cursor-pointer"
          onClick={handleRedirectNotes}
          // NOTE: this button would simply had to clear e.target.value
          //but since there was no btn to go back , I implemented this way :)
        >
          <AiOutlineClose />
        </span>
      </div>
      {/* IF THERE ARE NOTES */}
      {searchResults.length !== 0 && (
        <div className=" place-items-start h-screen">
          <NoteGenerator
            notes={searchResults}
            handleRedirectRead={handleRedirectRead}
          />
        </div>
      )}
      {/* IF THERE ARE NO NOTES */}
      {searchResults.length === 0 && (
        <div className="h-screen grid place-items-center">
          <div>
            <img src="src/assets/NotFound.png" alt="add your first note" />
            <p className="text-xl font-light text-center">
              File not found. Try searching again.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
