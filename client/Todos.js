import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  async componentDidMount () {
    const res = await axios.get('/api/todos')
    this.setState({todos: res.data})
  }

  addTodo(data) {
    this.setState({
      todos: [...this.state.todos, data]
    })
  }

  async deleteTodo(todoId) {
    const data = await axios.delete(`/api/todos/${todoId}`);
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    })
  }

  render () {
    return (
      <div id='todos'>
        <CreateTodo addTodo={this.addTodo}/>
        {
          this.state.todos.map(todo => <Todo deleteTodo={this.deleteTodo} todo={todo} key={todo.id} />)
        }
      </div>
    )
  }
}
