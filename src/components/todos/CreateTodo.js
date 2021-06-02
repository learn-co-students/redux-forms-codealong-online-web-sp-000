import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // this.props.addTodo(this.state) => if we're going with the mapDispatchToProps route
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)} >
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {/* {this.state.text} */}
      </div>
    )
  }
}

// const matchDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({
//       type: 'ADD_TODO', payload: formData
//     })
//   }
// }
// null, matchDispatchToProps

// if not given a second arg, connect automatically returns dispatch as a prop to the component wrapped with connect()

export default connect()(CreateTodo); // use null when component doesn't need to get any info from state (its only job dispatch is to actions)
