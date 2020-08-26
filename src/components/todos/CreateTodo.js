import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
      text: '',
    }
  }

  handleChange = event =>  {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form
          onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>Add Todo </label>
            <input 
              type='text'
              onChange={this.handleChange}
              value={this.state.text} />
          </p>
            <input type='submit' />
        </form>
          {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: () => dispatch({
      type: 'ADD_TODO',
      payload: FormData
    })
    }
  }

export default connect(null, mapDispatchToProps)(CreateTodo);
