import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.dispatch({type: "AddToDo", todo: this.state.text})
    
  }

  handleChange = (e) =>{
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit = {this.handleSubmit}>
          <label>Add To Do:</label>
          <input type = "text" value = {this.state.text} onChange = {this.handleChange} />
          <button>Submit</button>
        </form>
        {this.state.text}
      </div>
      
    )
  }
}

export default connect()(CreateTodo);
