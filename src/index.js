import React from "react";
import ReactDOM from "react-dom";

const customStyling = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyling.color = "blue"; //inline styling is used to change styles on the go

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}>Hello World!</h1>
    <h2 style={customStyling}>Hello World!</h2>
  </div>,
  document.getElementById("root")
);
//style property requires a value that is a Javascript object, use {}
