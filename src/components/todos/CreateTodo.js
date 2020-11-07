import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {

    state = {
      text: ""
    }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

      handleSubmit = event => {
      event.preventDefault();
      this.props.dispatch({
        type: 'ADD_TODO', 
        payload: this.state});
    };
    
   
    
  render() {
    return(
      <div>
          <form onSubmit={e => this.handleSubmit(e)}>
            <p>
              <label>add todo</label>
              <input type="text" name="text" onChange={this.handleChange} />
            </p>
            <input type="submit"  />
          </form>
       
         <p> {this.state.todo} </p>
      </div>
    )
    };
};

// const mapDispatchToProps = (dispatch) => {

//   return {
//     addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData})
//   }
// }

export default connect()(CreateTodo);
