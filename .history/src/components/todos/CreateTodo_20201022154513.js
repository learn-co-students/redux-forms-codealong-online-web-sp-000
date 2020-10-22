import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
  super();
  this.state = {
    text: '',
  };
}

// handleChange(event) {
  handleChange = event => {
    this.setState({
        text: event.target.value
    });
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
      </div>
    )
  }
}

// export default CreateTodo;
export default connect(null, mapDispatchToProps)(CreateTodo);