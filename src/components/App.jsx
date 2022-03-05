import React from "react";

function CreateArea(props) {
  const onSubmit = (e) => {
    e.preventDefault();
    //console.log("refresh prevented");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="Title"
          placeholder="Title"
          onChange={props.onChange}
          type="text"
          value={props.value.Title}
        />
        <textarea
          name="Note"
          placeholder="Take a note..."
          rows="3"
          onChange={props.onChange}
          type="text"
          value={props.value.Note}
        />
        <button onClick={props.onAdd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
