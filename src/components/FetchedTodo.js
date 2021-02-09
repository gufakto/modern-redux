import React from "react";
import { fetchedTodo } from "../actions/todoAction";
import { connect } from "react-redux";

const FetchedTodo = ({ fetchedData, data }) => {
  console.log(data);

  React.useEffect(() => {
    fetchedData();
  }, [fetchedData]);
  return <ul></ul>;
};

const stat = (state) => ({
  data: state.stateAddTodo
});

const act = {
  fetchedData: fetchedTodo
};

export default connect(stat, act)(FetchedTodo);
