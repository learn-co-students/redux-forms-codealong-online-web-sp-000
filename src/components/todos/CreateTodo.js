import React, { Component } from 'react';
import { connect } from 'react-redux';


class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo({ type: 'ADD_TODO', payload: this.state })
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form onSubmit={ event => this.handleSubmit(event) }>
        {this.state.text}
      </div>
    )
  }
}


export default connect()(CreateTodo);
