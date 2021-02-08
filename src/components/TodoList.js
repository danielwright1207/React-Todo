// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Item from "./Todo";

const ToDoList = (props) => {
  const handleClick = () => {
    props.handleItemCompleted();
  };
  return (
    <div className="todo-list">
      {props.toDos.map((item) => (
        <Item
          handleItemToggle={props.handleItemToggle}
          key={item.id}
          item={item}
        />
      ))}
      <button onClick={handleClick} className="clear-button">
        Clear ToDos
      </button>
    </div>
  );
};
export default ToDoList;
