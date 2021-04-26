import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import AddNote from "./add-note";
import NoteList from "./note-list";
import AppContext from "../context/app-context";
const Note = () => {
  const { state } = useContext(AppContext);
  return (
    <React.Fragment>
      <Container>
        <AddNote />
        {state.notes.length ? <NoteList /> : null}
      </Container>
    </React.Fragment>
  );
};

export default Note;
