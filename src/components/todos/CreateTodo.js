import React, { Component } from 'react'

class CreateTodo extends Component {
  state = {
    text: ''
  }

  handleChange = e =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={ e => this.handleSubmit(e)}>
         <p>
           <label>add todo</label>
           <input type='text' id='text' onChange={this.handleChange} value={this.state.text}/>
         </p>
         <input type='submit'/>
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
  }
}
export default connect(null, mapDispatchToProps)(CreateTodo);
