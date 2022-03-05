import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.text}</h1>
      <p>{props.value}</p>
      <button onClick={() => props.onClick(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;
