import React from "react";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import ReactDOM from "react-dom";
import "./components/Todo.css";
////Code below////

const toDos = [
  {
    task: "initial value",
    id: Date.now(),
    completed: false,
  },
];
console.log(toDos);
class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      toDos: toDos,
    };
  }
  handleItemToggle = (itemId) => {
    this.setState({
      toDos: this.state.toDos.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  handleItemAdd = (itemName) => {
    const item = {
      task: itemName,
      id: Date.now(),
      completed: false,
    };
    const newToDos = [...this.state.toDos, item];
    this.setState({
      toDos: newToDos,
    });
    console.log(toDos);
  };
  handleItemCompleted = () => {
    const newToDos = this.state.toDos.filter((item) => {
      return !item.completed;
    });
    this.setState({
      toDos: newToDos,
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm handleItemAdd={this.handleItemAdd} />
        </div>
        <ToDoList
          toDos={this.state.toDos}
          handleItemCompleted={this.handleItemCompleted}
          handleItemToggle={this.handleItemToggle}
        />
      </div>
    );
  }
}

export default App;
