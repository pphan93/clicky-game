import React from "react";
import "./style.css";

function Alert(props) {
  return <h1 className="alert">{props.children}</h1>;
}

export default Alert;
