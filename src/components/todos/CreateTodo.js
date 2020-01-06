import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super()
    this.state = {
      text: ""
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handeSubmit = event => {
    event.preventDefault()
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handeSubmit}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange={this.handleChange} />
          </p>
        </form>
      </div>
    )
  }


}


const mapDispatchToProps = dispatch => {
  return ({
    addToDo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})
  })
}

export default connect(null, mapDispatchToProps)(CreateTodo);
