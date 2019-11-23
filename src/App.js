import React, { Component } from "react";
import Addtodo from "./Components/Addtodo";
import Todos from "./Components/Todos";

export default class App extends Component {
  state = {
    todo: [],
    value: ""
  };
  componentDidMount() {
    console.log("Mounted");
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todo: [...this.state.todo, this.state.value],
      value: "",
      add: false
    });
  };
  handleDelete = tod => {
    let newTodo = [...this.state.todo];
    let filterTodos = newTodo.filter(ntod => ntod !== tod);
    this.setState({
      todo: filterTodos
    });
  };

  render() {
    this.status = "";
    if (this.state.value.length === 0) {
      this.status = "A task must be entered";
    } else this.status = "";
    const { todo, value } = this.state;
    return (
      <div>
        <p>{this.status}</p>
        <h1>TODO</h1>
        <Addtodo
          todo={todo}
          value={value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Todos todo={todo} handleDelete={this.handleDelete} />
        <button
          className="add"
          onClick={() => {
            this.setState({ add: true });
          }}
        >
          +
        </button>
      </div>
    );
  }
}
