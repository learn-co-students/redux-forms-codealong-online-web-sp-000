import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch({
      type: "ADD_TODO",
      payload: this.state
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p>
            {"Add Todo: "}
            <input
              onChange={this.handleChange}
              value={this.state.todo}
              type="text"
            />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
}

export default connect()(CreateTodo);
