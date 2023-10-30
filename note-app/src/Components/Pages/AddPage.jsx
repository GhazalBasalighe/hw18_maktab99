import Header from "../Header";
import Footer from "../Footer";

function AddPage() {
  return (
    <div className="h-screen grid">
      <Header />
      <div className="place-items-center">
        <img src="src/assets/FirstNote.png" alt="add your first note" />
        <p className="text-xl font-light text-center">
          Create your first note !
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default AddPage;
