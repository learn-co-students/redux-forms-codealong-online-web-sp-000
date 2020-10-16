import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  // handleChange(event)  {
  //   this.setState({
  //     text: event.target.value
  //   })
  // }

  // instead of writing handleChange() as a class method, we could declare it as a class property and assign an arrow function to it:
  // The result is that handleChange() will always be bound to the particular instance of the component it is defined in.
  handleChange = event => {
    this.setState({
        text: event.target.value
    });
  }; 

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
  // When handleSubmit() is called, whatever is currently stored in this.state will be sent off to our reducer via our dispatched action - will be dispatched to the reducer with the action..

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            {/* every time the user changes the input field (that is, whenever the user types something in) we should call our handleChange() function */}
            {/* onChange={event => this.handleChange(event)} */}
            <input type='text' onChange={this.handleChange} value={this.state.text} 
            // this.handleChange refers to the definition of a function that takes in the event as an argument.no need to put event as argument here becouse handleChange is arrow function
            // To make a completely controlled form, we will also need to set the value attribute of our input element to this.state.text
            />
          </p>
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    )
  }
}

// On submission of the form in our component, we want to send the value we've captured in the local state to be added to our Redux store. 
    // const mapDispatchToProps = dispatch => {
    //   return {
    //     addTodo: () => dispatch(<some action>)
    //   }
    // }
// With the above set up, addTodo becomes a function in props that is able take arguments.
    // const mapDispatchToProps = dispatch => {
    //   return {
    //     addTodo: formData => dispatch(<some action>)
    //   }
    // }
// we know that needs to be a plain javascript object with a type key describing the type of action.
//  We also need to include the data from the form - in this case, we'll call that key 'payload'
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({
      type: 'ADD_TODO',
      payload: formData 
    })
  }
}
// In our component, we could call something like this.props.addTodo(this.state). Since this.state is an object with only one property, text.



export default connect(null, mapDispatchToProps) (CreateTodo);
// in this component, we are not currently concerned with writing a mapStateToProps() function (the first argument passed to connect) as this component doesn't need any state. 
// Since we only need to dispatch an action here and we are not getting information from our store, we can use null instead of mapStateToProps as the first argument.

// Remember that, if not given any arguments, connect will return dispatch as a prop to the component we're wrapping with connect
// So an alternative way to write the CreateTodo component could be:
import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class CreateTodo extends Component {
  state = {
    text: ''
  };
 
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
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
 
export default connect()(CreateTodo);