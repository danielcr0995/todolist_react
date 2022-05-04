import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputItem from "./InputItem";

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const updateItem = (e) => {
    setItem(e.target.value);
  };
  // console.log(item);

  const addToList = () => {
    setList((prev) => {
      // console.log(prev);

      return [...list, item]; // ...list, item
    });
    setItem("");
  };
  // console.log(list);

  function handleDelete(id) {
    // console.log("deleting item", id);
    setList((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputItem newItem={updateItem} addToList={addToList} item={item} />
      <div>
        <ul>
          {/* <li>A Item</li> */}
          {list.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              checked={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
