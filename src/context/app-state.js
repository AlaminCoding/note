import { useReducer } from "react";
import AppReducer from "./app-reducer";
import AppContext from "./app-context";

const AppState = (props) => {
  //State Initialization
  const initState = {
    notes: [],
  };
  //UseReducer
  const [state, dispatch] = useReducer(AppReducer, initState);
  //Add Note
  const addNote = (data) => {
    dispatch({
      type: "ADD_NOTE",
      payload: data,
    });
  };
  //Delete Note
  const deleteNote = (data) => {
    dispatch({
      type: "DELETE_NOTE",
      payload: data,
    });
  };
  //Edit Note
  const editNote = (data) => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: data,
    });
  };
  return (
    <AppContext.Provider value={{ state, addNote, deleteNote, editNote }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
