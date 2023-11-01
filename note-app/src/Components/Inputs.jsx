function Inputs({ setTitle, setDescription }) {
  // DESCRIPTION AND TITLE STATE SETTERS
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        size={10}
        required
        onChange={handleTitleChange}
        className="inputs text-5xl my-10"
      />
      <textarea
        name="body"
        id="textBody"
        cols="18"
        rows="10"
        placeholder="Type Something..."
        onChange={handleDescriptionChange}
        className="inputs text-2xl"
      ></textarea>
    </>
  );
}

export default Inputs;
