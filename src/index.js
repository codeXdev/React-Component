import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

// Creating Component
const App = () => {
  return (
    <div className='ui container comments'>
      <CommentDetail />
    </div>
  );
};
// Displaying the component
ReactDOM.render(<App />, document.querySelector("#root"));
