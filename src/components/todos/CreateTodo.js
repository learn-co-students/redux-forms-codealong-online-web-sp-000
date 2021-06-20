import React, { Component } from 'react'
import {connect} from 'react-redux;'

class CreateTodo extends Component {
  handleChange = event=>{
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
            <label> add todo</label>
            <input type='text' onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type = "submit"/>
        </form>
        {this.state.textS}
      </div>
    )
  }
}

// const mapDipatchToProps = dispatch =>{
//   return{
//     addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData})
//   }

// }

// export default connect(null, mapDipatchToProps)(CreateTodo);
export default connect()(CreateTodo);
