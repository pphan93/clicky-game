import React from "react";
import "./style.css";

function charactersCard(props) {
  return (
    <li className="card">
        <img className="remove" alt={props.name} src={props.image} onClick={() => props.removeFriend(props.id)}/>
    </li>
  );
}

export default charactersCard;
