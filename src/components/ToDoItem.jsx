import React, { useState } from "react";
function ToDoItem(props) {
  const [done, setDone] = useState("");
  function handleClick() {
    setDone((prevVal) => (prevVal === "" ? "line-through" : ""));
  }
  return (
    <li
      onClick={() => props.onChecked(props.id)}
      style={{ textDecoration: done }}
    >
      {props.text}
    </li>
  );
}
export default ToDoItem;
