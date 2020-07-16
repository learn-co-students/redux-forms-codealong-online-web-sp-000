import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      item: ""
    };
}
  // // put state into a constructor is better i think ?
  // state = {
  //   item: ""
  // }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({item: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.props.addTodo(this.state.item);
  }

  render() {
    return(
      <div>
        <form>
          <p>
          <label> Add ToDo </label>
            <input
              type="text"
              // ??? can write {event => this.handleChange(event)} because definition of function that takes event as argument
              onChange={this.handleChange}
              id="input"
              name="input"
              placeholder="add todo here"
              value={this.state.item} />
            <input type="submit" onClick={this.handleSubmit} />
          </p>
        </form>
        {this.state.item}
      </div>
    )
  }
}

// why must it be const?
const addTodo = (item) => {
  return {
    type: 'ADD_ITEM',
    todo: item
  };
}

const mapStateToProps = (state) => {
  return {todo: state.item}
}

// store.dispatch({ type: 'ADD_TODO', todo: this.state })
// this is the same as that above - setting up a function for this
const mapDispatchToProps = (dispatch) => {
  return {addTodo: (item) => {
    dispatch(addTodo(item))
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
