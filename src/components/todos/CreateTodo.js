import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_TODO',
      todo: this.state
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default CreateTodo;