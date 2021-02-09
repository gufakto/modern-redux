import {
  ADD_TODO,
  FETCHED_TODO,
  REMOVE_TODO,
  ERROR_TODO,
  LOADING
} from "../actions/types";

const init = {
  result: [
    { id: 1, todo: "satu" },
    { id: 2, todo: "dua" },
    { id: 3, todo: "tiga" },
    { id: 4, todo: "empat" }
  ],
  error: null,
  loading: false
};

export const stateAddTodo = (state = init, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case ADD_TODO:
      return {
        ...state,
        loading: false,
        result: payload
      };
    case FETCHED_TODO:
      return {
        ...state,
        loading: false
      };
    case REMOVE_TODO:
      return {
        ...state,
        loading: false,
        result: payload
      };
    case ERROR_TODO:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};
