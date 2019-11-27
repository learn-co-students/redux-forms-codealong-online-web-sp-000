import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    text: ''
  };


  // we declare it as a class property and assign an arrow function to it instead of a class method as above.
  handleChange = event => {
    this.setState({
        text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
          <label>add todo</label>
          <input type='text' onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type='submit'/>
          {this.state.text}
          // just to test if we are properly changing the state
        </form>
      </div>
    );
  }

};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
