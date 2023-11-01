import { AiOutlineClose } from "react-icons/ai";

function Search() {
  return (
    <div className="h-screen grid">
      <div className="relative">
        <input
          type="text"
          placeholder="Search your notes"
          className="search-bar"
        />
        <span className="absolute right-4 top-3 cursor-pointer">
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
