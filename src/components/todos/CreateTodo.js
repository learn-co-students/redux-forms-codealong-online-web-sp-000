import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
  state = {
      text: ''
<<<<<<< HEAD
    }
=======
    } 
>>>>>>> 3f7c46e0eef15f837b2f894cf882ac7bd438bae4

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
