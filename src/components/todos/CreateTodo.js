import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
      text: '',
    };
  
   
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  }; //turn this into arrow function rather than class method 
  //so that handleChange will always be bound to instance of component

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }
   
  render(){
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
//not worried about mapping state because don't need state here- it is keeping its own

//export default CreateTodo;
