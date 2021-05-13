import React, { Component } from 'react'
import {connect} from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state={
      text: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addToDo(this.state)
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type='text' onChange={(event) => this.handleChange(event)} />
          </p>
            <input type='submit' />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToDo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
})

export default connect(null, mapDispatchToProps)(CreateTodo);
