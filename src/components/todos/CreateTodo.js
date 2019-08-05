import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
    value: ""
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({value: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.value);
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todo) => dispatch({type:"ADD_TODO", todo})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
