import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  // };

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo </label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" onSubmit={event => this.handleSubmit(event)}/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({
      type: 'ADD_TODO',
      payload: formData
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
// export default connect()(CreateTodo);
