import React, { Component } from 'react'
import { connect } from 'react-redux';  /* 5. code change */


// 0. Test Component:

// class CreateTodo extends Component {
//     render() {
//         return(
//         <div>
//             Create Todo Component
//         </div>
//         )
//     }
// }

// 1. Write the form:

// class CreateTodo extends Component {
//     render() {
//         return(
//         <div>
//         <form>
//             <p><label>add todo</label>
//                 <input type="text" />
//             </p>
//
//         ]   <input type="submit" />
//         </form>
//         </div>
//         );
//     }
// }
// export default CreateTodo;


// 2. Create a Controlled Form using state and onChange Event Handler:

// class CreateTodo extends Component {
//     render() {
//         return(
//         <div>
//         <form>
//             <p>
//                 <label>add todo</label>
//                 <input type="text" />
//             </p>
//
//             <input type="submit" />
//         </form>
//         </div>
//         );
//     }
// }
// export default CreateTodo;


// 3. Add the onChange property to <input> and attach the Event Handler:

// class CreateTodo extends Component {
//     render() {
//         return(
//         <div>
//         <form>
//             <p><label>add todo</label>
//                 <input
//                 type="text"
//                 onChange={(event) => this.handleChange(event)}
//                 />
//             </p>
//
//             <input type="submit" />
//         </form>
//         </div>
//         );
//     }
// }
// export default CreateTodo;


// 4. Turn rendering div into a Controlled Form
//    Add state and write the Event Handler:

// class CreateTodo extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             text: '',
//         };
//     }
//
//     handleChange = event => {
//         this.setState({
//             text: event.target.value
//         });
//     }
//
//     render() {
//         return(
//         <div>
//
//         <form>
//             <p><label>add todo</label>
//                 <input
//                 type="text"
//                 onChange={this.handleChange}
//                 value={this.state.text}
//                 />
//             </p>
//
//             <input type="submit" />
//         </form>
//
//         {this.state.text}
//
//         </div>
//         );
//     }
// }
// export default CreateTodo;


// 5. Write mapStateToProps(),
//    Add onSubmit to <form> and write the Event Handler:

class CreateTodo extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
        };
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    }

    /* code change */
    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state)  // access granted by connecting
    }                                   // mapStateToProps to CreateToDo Component

    // when handleSubmit() is called:
    // whatever is currently stored in `this.state`
    // will be sent off to your reducer via the dispatched action.

    render() {
        return(
        <div>

        <form onSubmit={ event => this.handleSubmit(event) }> /* code change */
            <p><label>add todo</label>
                <input
                type="text"
                onChange={this.handleChange}
                value={this.state.text}
                />
            </p>

            <input type="submit" />
        </form>

        {this.state.text}

        </div>
        );
    }
};

/* code change */
const mapDispatchToProps = dispatch => {
    return {
        // addTodo: () => dispatch(<some action>)
        // addTodo: formData => dispatch(<some action>)
        addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
    }
}

// Now, when the form is submitted,
// whatever `this.state` is will be dispatched to the reducer with the action.

// export default CreateTodo;
export default connect(null, mapDispatchToProps)(CreateTodo);   /* code change */


// 6. Alternate export statement:

// class CreateTodo extends Component {
//
//     /* code change */
//     state = {
//         text: ''
//     };
//
//     handleChange = event => {
//         this.setState({
//             text: event.target.value
//         });
//     };
//
//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.dispatch({ type: 'ADD_TODO', payload: this.state }); /* code change */
//     };
//
//     render() {
//         return(
//         <div>
//
//         <form onSubmit={ event => this.handleSubmit(event) }>
//             <p><label>add todo</label>
//                 <input
//                     type="text"
//                     onChange={this.handleChange}
//                     value={this.state.text}
//                 />
//             </p>
//
//             <input type="submit" />
//         </form>
//
//         { this.state.text }
//
//         </div>
//         );
//     }
// }
//
// // NOTE: now go update state in your reducer - manageTodo.js -
//
// /* code change */
// export default connect()(CreateTodo);
