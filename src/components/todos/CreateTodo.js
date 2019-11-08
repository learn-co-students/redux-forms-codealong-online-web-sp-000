import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor () {
    super();
    this.state = {
      text: '',
    };
  }
  //handleChange() as a class method
  /*
  handleChange (event) {
    this.setState({
      //The event's target is the input that was listening for the event (the text field), and the value is the current value of that text field.
      text: event.target.value
    });
  };
  */
  //handleChange() as a class property and assign an arrow function to it. handleChange will always be bound to the particular instance of the component it is defined in
  
  handleChange = event => {
    this.setState({
        text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.yokese(this.state);
  };

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
              {/* onChange is an event handler */}
              {/* Now that handleChange() is defined using an arrow function, we can actually write an even shorter onChange callback instead of onChange={(event) => this.handleChange(event)}*/}
            <input 
            type="text" 
            onChange={this.handleChange} 
            value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    yokese: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
