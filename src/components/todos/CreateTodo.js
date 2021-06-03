import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addToDo(this.state)
  } 
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>add todo</label>
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
       <p>{this.state.text}</p>
     </div>
   )}
}

const mapDispatchToProps = (dispatch) => { 
  return {
    addToDo: formData => dispatch({type: ‘ADD_TODO’, content: formData})
  }
} 
 
export default connect(null, mapDispatchToProps)(CreateTodo);