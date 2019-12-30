import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <label>Add Todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" onSubmit={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

const matchDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({
      type: 'ADD_TODO',
      payload: formData
    })
  }
}

export default connect(null, matchDispatchToProps)(CreateTodo);
