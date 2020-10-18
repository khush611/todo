import React from "react";
import randomcolor from "randomcolor";
function TodoItem(props) {
  const doneStyle = {
    color: randomcolor(),
    fontStyle: "italic",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? doneStyle : null}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
