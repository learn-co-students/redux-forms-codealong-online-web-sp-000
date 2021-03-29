import React, { Component } from 'react'

class CreateTodo extends Component {
  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type='text' />
          </p>
        </form>
      </div>
    )
  }
}

export default CreateTodo;
