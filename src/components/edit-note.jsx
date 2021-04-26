import React, { useContext, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import AppContext from "../context/app-context";
const EditNote = () => {
  const { state, editNote } = useContext(AppContext);
  const [error, setError] = useState("");
  const titleRef = useRef();
  const contentRef = useRef();
  const { id } = useParams();
  const history = useHistory();
  const oldNote = state.notes.find((element) => element.id === Number(id));
  const editItem = (event) => {
    event.preventDefault();
    if (titleRef.current.value && contentRef.current.value) {
      const oldState = state.notes;
      const newNotes = [...oldState];
      const index = newNotes.findIndex((element) => element === oldNote);
      newNotes[index].title = titleRef.current.value;
      newNotes[index].content = contentRef.current.value;
      editNote(newNotes);
      setTimeout(() => {
        history.push(`/note/${id}`);
      }, 100);
    } else {
      setError("Fill all the required field");
    }
  };
  return (
    <Container>
      <section className="add-note">
        <form onSubmit={editItem} className="add-note-form">
          <h2>Update Note</h2>
          <small style={{ color: "red" }}>{error}</small>
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            defaultValue={oldNote.title}
            ref={titleRef}
          />
          <textarea
            name="note"
            placeholder="Write Note"
            defaultValue={oldNote.content}
            ref={contentRef}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      </section>
    </Container>
  );
};

export default EditNote;
