import { AiOutlinePlus } from "react-icons/ai";

function Footer({ handleAddNote }) {
  return (
    <div className=" drop-shadow-addBtnShadow font-bold text-4xl bg-blackBg p-4 cursor-pointer rounded-full fixed bottom-8 right-5">
      <AiOutlinePlus onClick={handleAddNote} />
    </div>
  );
}

export default Footer;
