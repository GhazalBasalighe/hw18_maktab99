import { AiOutlineSearch, AiOutlineInfoCircle } from "react-icons/ai";

function Header() {
  return (
    <div className="flex justify-between items-center">
      {/* TITLE */}
      <h1 className="text-4xl font-semibold">Notes</h1>
      {/* ICONS ON THE LEFT */}
      <div className="flex items-center gap-4">
        <span className="icons">
          <AiOutlineSearch />
        </span>
        <span className="icons">
          <AiOutlineInfoCircle />
        </span>
      </div>
    </div>
  );
}

export default Header;
