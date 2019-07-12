import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor(){
    super()

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
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => {this.handleSubmit(event)}}>
          <p>
            <label>add todo</label>
            <input type='text' onChange={this.handleChange} value={this.state.text}/>
          </p>
            <input type='submit'/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

//when onSubmit fires, we want to send the text value in our local state to our Redux store. by setting up the return value as the addTodo key with an arrow function, the addTodo key becomes a function in props that can take args.

//here is the template for what we want to return...
// return {
//   addTodo: (formData) => {
//     dispatch(< some action >)
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => {
      dispatch({type: 'ADD_TODO', payload: formData})
    }
  }
}

//don't need to pull this component's state from store, since we declared it here. when state not needed from store, just pass in null as the 1st arg in connect, then move on to mapDispatchToProps
export default connect(null, mapDispatchToProps)(CreateTodo)
