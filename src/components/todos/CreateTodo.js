import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }


  }


  handleInput = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.sendTodo(this.state)
  }

  onSubmitTest(event)  {
      event.preventDefault();
      console.log(this)
      console.log(this.state.text)
    }


  render() {
    return(
      <div>
        Create Todo Component
        put your input to gather data here
        <form onSubmit={ (event) => {this.onSubmit(event)} }>
          <p>
            <label>add todo</label>
            <input value={this.state.text} onChange={this.handleInput }  />
          </p>
          <input type="submit"  />

        </form>
        {this.state.text}
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    sendTodo: (formData) => { dispatch({type: 'ADD_TODO', payload: formData})}
  }
}
const mapStateToProps = (state) => {
  return {lonque: state.todos}
}


// probably need to connect here
export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
