import MainHeader from "../Components/MainHeader";
import Footer from "../Parts/Footer";

function LandingPage({
  handleRedirectAdd,
  pageToRender,
  handleRedirectSearch,
}) {
  return (
    <div className="h-screen grid">
      <MainHeader
        pageToRender={pageToRender}
        handleRedirectSearch={handleRedirectSearch}
      />
      <div className="place-items-center">
        <img src="src/assets/FirstNote.png" alt="add your first note" />
        <p className="text-xl font-light text-center">
          Create your first note !
        </p>
      </div>
      <Footer handleRedirectAdd={handleRedirectAdd} />
    </div>
  );
}

export default LandingPage;
