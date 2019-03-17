import React, { Component } from "react";

class CreateTodo extends Component {
  state = { text: "" };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={form => this.handleSubmit(form)}>
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

export default CreateTodo;
