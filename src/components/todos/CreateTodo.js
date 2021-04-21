import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super()
    this.state={text:''}
  }

  handleChange = event => {
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
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label> add todo </label>
            <input type="test" onChange={event => this.handleChange(event)} value={this.state.text} />
          </p>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

// could alternatively be written as connect()(CreateTodo) - w/o arguments, conenct willr eturn dispatch as a prop to the component

export default connect(null, mapDispatchToProps)(CreateTodo);
