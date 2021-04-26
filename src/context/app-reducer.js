import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./app-action";

const AppReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: action.payload,
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
