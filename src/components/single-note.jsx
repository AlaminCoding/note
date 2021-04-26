import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import AppContext from "../context/app-context";
const SingleNote = () => {
  const { state, deleteNote } = useContext(AppContext);
  const { id } = useParams();
  const note = state.notes.find((element) => element.id === Number(id));
  const history = useHistory();
  const update = (id) => {
    history.push(`/update/${id}`);
  };
  const deleteItem = (data) => {
    const newList = state.notes.filter((element) => element.id !== data.id);
    deleteNote(newList);

    history.push("/notes");
  };
  return (
    <Container>
      <section>
        <h2 className="note-title mt-3">{note.title}</h2>
        <p className="note-content">{note.content}</p>
        <div className="single-note-btn">
          <button onClick={() => update(note.id)}>Update</button>
          <button onClick={() => deleteItem(note)}>Delete</button>
        </div>
      </section>
    </Container>
  );
};

export default SingleNote;
