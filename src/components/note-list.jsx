import React, { useContext } from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import AppContext from "../context/app-context";
import { Link } from "react-router-dom";
const NoteList = () => {
  const { state, deleteNote } = useContext(AppContext);

  const deleteItem = (data) => {
    const newList = state.notes.filter((element) => element.id !== data.id);
    deleteNote(newList);
  };

  return (
    <section className="note-list">
      <h2>Note List</h2>
      {state.notes.map((element) => {
        return (
          <div className="single-note" key={element.id}>
            <span>{element.id}</span>
            <div className="title-btn">
              <h2>{element.title}</h2>
              <div className="btns">
                <Link to={`/note/${element.id}`}>
                  <FaEye />
                </Link>
                <Link to={`/update/${element.id}`}>
                  <FiEdit3 />
                </Link>
                <MdDelete onClick={() => deleteItem(element)} />
              </div>
            </div>
            <div className="content">
              {element.content.slice(0, 200)}
              {element.content.length > 200 ? "...." : null}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default NoteList;
