import React, { Component } from 'react'
import TodoForm from './TodoForm'

class Todos extends Component {
  state = {
    todos: [
      {
        id:1,
        item: 'Go to work',
        isEdited:false,
      },
      {
        id:2,
        item: 'Finish project',
        isEdited:false,
      },
      {
        id:3,
        item: 'Visit family',
        isEdited:false,
      },
    ]
  }

  addNewTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleDelete = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !==id)
    this.setState({
      todos
    })
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <li className='border p-2 d-flex justify-content-between my-2' key={todo.id}>
            <span>{todo.item}</span>
            <span>
            <i className="fa-solid fa-pen text-success me-2 list-icons"></i>
            <i className="fa-solid fa-trash text-danger list-icons" onClick={()=> this.handleDelete(todo.id)}></i>
            </span>
      </li>
    ))
    return (
      <div>
        {/* form conponent */}
        <TodoForm addNewTodo = {this.addNewTodo}/>
        <h2 className='fw-bold text-center my-4'>
          {this.state.todos.length?"Available Todos":"No todos Available!"}
        </h2>
        <ul className='list-unstyled'>
          {todos}
        </ul>
        <button className='form-control bg-danger text-white'>Clear todos</button>
      </div>
    )
  }
}

export default Todos