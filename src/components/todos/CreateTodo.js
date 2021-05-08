import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  //set state value. binds this using constructor. text becomes an object with properties through this 
  // constructor() {
    // super();
    state = {
      text: '',
    };

  //using class method syntax. Context of the prototype chain 
  // handleChange(e) {
  //   this.setState({
  //     text: e.target.value
  //   });
  // };

  // Rewrite handleChange as a class property
  //handleChange will always be bound to this particular instance instead of the component  
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  //when handleSubmit is called whatever is stored in this.state will be sent to reducer using the dispatch action 
  handleSubmit = e => {
    e.preventDefault();
    // this.props.addTodo(this.state)
    //alternate way to right CreateTodo component 
    this.props.dispatch({type: 'ADD_TODO', payload: this.state });
  };

  //JSX code 
  render() {
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e) }>
          <p>
            <label>Add Todo</label>
            <br/>
            <input type="text"
            //onChange as a class method 
            // onChange={(e) => this.handleChange(e)} 
            //onChange as a class property
            onChange={e => this.handleChange(e)} 
            //set value in order to call a setState
            value={this.state.text}
            />
          </p>
          <input type="submit" />
        </form>
        {/* visual confirmation that the state is changing  */}
        {this.state.text}
      </div>
    )
  }
}

//rewrite of handleChange eliminates this block of code 
// const mapDispatchToProps = dispatch => {
//   //sending value in local state to Redux store 
//   //addTodo becomes a function in props that takes args
//   return {
//     //turn into a js object with a type key describing action
//     //also include data from the form (key payload)
//     addTodo: formData => dispatch({
//       type: 'ADD_TODO',
//       payload: formData
//     })
//   };
// };

//handleChange rewrite also changes export 
export default connect()(CreateTodo);
