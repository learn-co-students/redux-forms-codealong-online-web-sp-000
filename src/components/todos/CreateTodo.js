import React, { Component } from 'react'
import { connect } from 'react-redux';


class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
  
  render() {
    return(
      <div>
        {/* Create Todo Component */}
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }

  handleSubmit = (e )=> {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  handleChange = (event) => {
      this.setState({
        text: event.target.value
      });
  };
     
  }


// export default CreateTodo;
const mapDispatchToProps = (dispatch) => {
  
  return {
    addTodo: (formData) => dispatch({ type: 'ADD_TODO', payload: formData })
  }
}


export default connect(null, mapDispatchToProps)(CreateTodo);



// ???///////////////////////////////

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
 
// class CreateTodo extends Component {
//   state = {
//     text: ''
//   };
 
//   handleChange = event => {
//     this.setState({
//       text: event.target.value
//     });
//   };
 
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
//   };
 
//   render() {
//     return (
//       <div>
//         <form onSubmit={event => this.handleSubmit(event)}>
//           <p>
//             <label>add todo</label>
//             <input
//               type="text"
//               onChange={event => this.handleChange(event)}
//               value={this.state.text}
//             />
//           </p>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }
 
// export default connect()(CreateTodo);