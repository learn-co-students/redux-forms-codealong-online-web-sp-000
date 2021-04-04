import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  //class method
  // handleChange(event) {
  //   this.setState({
  //     text: event.target.value
  //   });
  // };

  //class property, bound to this component
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_TODO', payload: this.state})
    // this.props.addTodo(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input
              type="text"
              onChange= {this.handleChange}
              value={this.state.text}
              />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

export default connect()(CreateTodo);

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   };
// };
//
// export default connect(null, mapDispatchToProps)(CreateTodo);
