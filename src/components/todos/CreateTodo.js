import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTodo extends Component {
	constructor() {
		super();
		this.state = {
			text: ''
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.addTodo(this.state);
	};

	handleChange = event => {
		this.setState({
			text: event.target.value
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>add todo</label>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.text}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
});

export default connect(
	null,
	mapDispatchToProps
)(CreateTodo);



// 3.
// import React, { Component } from 'react';
 
// class CreateTodo extends Component {
 
//   constructor() {
//     super();
//     this.state = {
//       text: '',
//     };
//   }
 
//   handleChange = event => {
//     this.setState({
//       text: event.target.value
//     });
//   }
 
//   render() {
//     return(
//       <div>
//         <form>
//           <p>
//             <label>add todo</label>
//             <input
//           type="text"
//           onChange={this.handleChange} value={this.state.text}/>
//           </p>
//           <input type="submit" />
//        </form>
//        {this.state.text}
//      </div>
//    );
//   }
// };
 
// export default CreateTodo;


// 2. 
// import React, { Component } from 'react'
 
// class CreateTodo extends Component {
//   render() {
//     return(
//       <div>
//         <form>
//           <p>
//             <label>add todo</label>
//             <input type="text" />
//           </p>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// };
 
// export default CreateTodo;




// 1.
// import React, { Component } from 'react'

// class CreateTodo extends Component {
//   render() {
//     return(
//       <div>
//         Create Todo Component
//       </div>
//     )
//   }
// }

// export default CreateTodo;
