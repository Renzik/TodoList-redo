import React, { Component } from "react";
import axios from "axios";
import TodoForm from "./TodoForm.component";

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      assignee: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    // pass the current state obj as the second param.
    const { data } = await axios.post("/api/todos/", this.state);
    this.props.addTodo(data);
    this.setState({
      taskName: "",
      assignee: ""
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <TodoForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        taskName={this.state.taskName}
        assignee={this.state.assignee}
      />
    );
  }
}
