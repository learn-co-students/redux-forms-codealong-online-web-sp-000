import React, { Component } from 'react'
import { connect } from 'react-redux';
class CreateTodo extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type='text' onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type='submit' />
        </form>
        {this.state.text}
      </div>
    )
  }
}


//longhand way
// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData})
//   }
// }

//if not given any arguments, connect will return dispatch as a prop
// to the component we're wrapping w/ connect. 

//Alternative way to write it. 
export default connect()(CreateTodo)

// long hand way below. 
// export default connect(null, mapDispatchToProps)(CreateTodo);
