import React, { useState } from "react";

function ToDoItem(props) {
  // const [strike, setStrike] = useState(false)

  // function handleStrike(){
  //   setStrike(prev => {
  //     console.log(prev);

  //     return !prev
  //   })
  // }
  // console.log(strike);

  return (
    <div>
      <li
        onClick={() => props.checked(props.id)}
        // onClick={handleStrike}
        // style= { {textDecoration: strike?"line-through": "none"}}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
