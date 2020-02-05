import React, {Component} from 'react'
import axios from 'axios';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      assignee: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    // pass the current state obj as the second param.
    const { data } = await axios.post('/api/todos/', this.state);
    console.log(data);
    this.props.addTodo(data);
    this.setState({
      taskName: '',
      assignee: ''
    })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <label htmlFor='taskName'>Task Name: </label>
        {/* we use this.state.taskName to make a connection with the state. */}
        <input onChange={this.handleChange} value={this.state.taskName} name='taskName' type='text'/>

        <label htmlFor='assignee'>Assign To: </label>
        <input onChange={this.handleChange} value={this.state.assignee} name='assignee' type='text'/>

        <button type='submit' >Submit</button>
      </form>
    )
  }
}
