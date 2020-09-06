import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class CreateTodo extends Component {
  state = {
    text: ''
  };
 
  handleChange = event => {
    this.setState({
      text: event.target.value  // its gonna update our state 
    },console.log(this.state));
  };
 
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state); 
    //its gonna send to reducer 
    //????????Now, when the form is submitted, whatever the this.state is will be dispatched 
    //to the reducer with the action.

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  // };
  };
 
  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
              <input
                type="text"
                onChange={event => this.handleChange(event)}
                value={this.state.text}
              />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };                                 //this action
};
 
export default connect(
  null,
  mapDispatchToProps)(CreateTodo);