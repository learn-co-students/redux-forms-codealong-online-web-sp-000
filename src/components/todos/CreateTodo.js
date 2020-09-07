import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super()

    this.state = {
      todo: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            <label>add todo</label>
            <input name="todo" type="text" onChange={this.handleChange} value={this.state.todo}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.todo}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
