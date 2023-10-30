import { AiOutlinePlus } from "react-icons/ai";

function Footer({ handleRedirectAdd }) {
  return (
    <div className=" drop-shadow-addBtnShadow font-bold text-4xl bg-blackBg p-4 cursor-pointer rounded-full fixed bottom-8 right-5 z-10">
      <AiOutlinePlus onClick={handleRedirectAdd} />
    </div>
  );
}

export default Footer;
