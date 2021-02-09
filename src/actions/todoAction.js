import { LOADING, ADD_TODO, FETCHED_TODO } from "./types";

export const addTodo = (data) => (dispatch) => {
  dispatch({
    type: LOADING
  });
  setTimeout(() => {
    dispatch({
      type: ADD_TODO,
      payload: data
    });
  }, 2000);
};

export const fetchedTodo = () => (dispatch) => {
  dispatch({
    type: LOADING
  });
  setTimeout(() => {
    dispatch({
      type: FETCHED_TODO
    });
  }, 2000);
};
