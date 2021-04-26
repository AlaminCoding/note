import React, { useContext, useState, useRef } from "react";
import AppContext from "../context/app-context";
const AddNote = () => {
  const { state, addNote } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const titleRef = useRef();
  const contentRef = useRef();

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const addItem = (event) => {
    event.preventDefault();
    let newId;
    if (state.notes.length) {
      newId = state.notes[state.notes.length - 1].id + 1;
    } else {
      newId = 1;
    }
    const note = {
      id: newId,
      title: title,
      content: content,
    };
    if (titleRef.current.value.length && contentRef.current.value.length) {
      setError("");
      addNote(note);
      titleRef.current.value = "";
      contentRef.current.value = "";
    } else {
      setError("Fill all the required field");
    }
  };

  return (
    <section className="add-note">
      <form onSubmit={addItem} className="add-note-form">
        <h2>Add Note</h2>
        <small style={{ color: "red" }}>{error}</small>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={handleTitle}
          ref={titleRef}
        />
        <textarea
          name="note"
          placeholder="Write Note"
          onChange={handleContent}
          ref={contentRef}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddNote;
