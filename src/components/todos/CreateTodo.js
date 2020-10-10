import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      todo: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      todo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input onChange={this.handleChange} value={this.state.todo} type="text" />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
