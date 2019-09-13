import React, { Component } from 'react'
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
    this.props.addTodo(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label for="">Add todo: </label>
            <input type="text" onChange= {this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" name="" value="Submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
