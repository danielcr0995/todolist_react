import React from "react";

function InputItem(props) {
  return (
    <div className="form">
      <input onChange={props.newItem} type="text" value={props.item} />
      <button onClick={props.addToList}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputItem;
