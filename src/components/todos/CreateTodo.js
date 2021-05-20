import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  state = {
    text: "",
  }

handelChange = (e) => {
  this.setState({
    text: e.target.value
  })
}

handelSubmit = (e) => {
  e.preventDefault();
  this.props.addTodo(this.state);
}


  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={e => this.handelSubmit(e)}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={ this.handelChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (formData) => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps) (CreateTodo);
