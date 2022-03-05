import React from "react";

function CreateArea(props) {  //this prevents refreshing entire page after form submition ***.
   const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={props.onChange}
          type="text"
          value={props.value.Title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={props.onChange}
          type="text"
          value={props.value.Note}
        />
        <button onClick={props.onClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
