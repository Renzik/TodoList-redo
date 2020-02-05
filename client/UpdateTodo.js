import React, { Component } from "react";
import axios from "axios";
import TodoForm from "./TodoForm.component";

export default class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      assignee: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log(this.props.todo);
  //   this.setState({
  //     taskName: this.props.todo.taskName,
  //     assignee: this.props.todo.assignee
  //   });
  // }

  async handleSubmit(e) {
    e.preventDefault();
    const todoId = this.props.todo.id;
    const { data } = await axios.put(`/api/todos/${todoId}`, this.state);
    this.props.updateTodo(data);
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
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        taskName={this.state.taskName}
        assignee={this.state.assignee}
      />
    );
  }
}
