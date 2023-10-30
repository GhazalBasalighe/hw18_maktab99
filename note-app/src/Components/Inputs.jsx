function Inputs() {
  return (
    <>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        size={20}
        required
        className="inputs text-5xl my-10"
      />
      <textarea
        name="body"
        id="textBody"
        cols="18"
        rows="10"
        placeholder="Type Something..."
        className="inputs text-2xl"
      ></textarea>
    </>
  );
}

export default Inputs;
