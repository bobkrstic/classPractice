import React from "react";

const Title = props => (
  <h1
    style={{
      textDecoration: props.textDecoration || "none",
      textAlign: props.textAlign || "left",
      color: props.color || "#000"
    }}
  >
    {props.children}
  </h1>
);

export default Title;
