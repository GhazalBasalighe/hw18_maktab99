import { useRef, useCallback, useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Search({ notes }) {
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
  //   CLEARING INPUT USING X
  function clearUserInput() {
    userInput.current.value = "";
  }
  function searchNotes(inputValue) {
    setSearchResults(
      notes.filter((note) =>
        note.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
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
          onClick={clearUserInput}
        >
          <AiOutlineClose />
        </span>
      </div>
      <div className="place-items-center">
        <img src="src/assets/NotFound.png" alt="add your first note" />
        <p className="text-xl font-light text-center">
          File not found. Try searching again.
        </p>
      </div>
    </div>
  );
}

export default Search;
