import React, { Component } from 'react'
import shortid from 'shortid'
class TodoForm extends Component {
  state = {
    todo:'',
    error:'',
  }

  // change event method
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
  }

  // submit event method
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.todo === ''){
      this.setState({
        error: 'please add your todo item!'
      })
      setTimeout(() => {
        this.setState({
          error: ''
        })
      }, 2000);
    }else {
      const newItem = {
        id: shortid.generate(),
        item: this.state.todo,
        isEdited:false
      }
      this.props.addNewTodo(newItem)
      this.setState({
        todo:''
      })
    }
  }

  render(){
    return (
      <>
      <h1 className='h2 text-center fw-bold'>Add Todo</h1>
        <form className='my-4' onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text bg-primary text-white" id="basic-addon1"><i className="fa-solid fa-book"></i></span>
          </div>
          <input type="text" className="form-control" 
          name='todo' onChange={this.handleChange}
          value={this.state.todo}
          placeholder="Add new todo" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
          <p className={this.state.error ===''?'d-none':'text-danger text-center'}>{this.state.error}</p>
          <button className='btn btn-primary form-control'>add todo</button>
        </form>
      </>
    )
  }
}

export default TodoForm;