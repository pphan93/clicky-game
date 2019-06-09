import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container remove" onClick={() => props.removeFriend(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default FriendCard;
