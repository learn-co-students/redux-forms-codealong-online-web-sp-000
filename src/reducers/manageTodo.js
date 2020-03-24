// 0. Reducer Template:

// export default function manageTodo(state = {todos: [], }, action) {
//     console.log("reducer received this action:", action);
//
//     return state;
// }

//  Objective:
//  construct the state to look like:

//  state = {
//      todos: [
//          { text: 'buy groceries' },
//          { text: 'watch netflix' },
//      ]
//  }

// 1. Udate state:
export default function manageTodo(state = {todos: [],}, action) {
    switch (action.type) {

    case 'ADD_TODO':
        console.log({ todos: state.todos.concat(action.payload.text) });

        return { todos: state.todos.concat(action.payload.text) };

        // NOTE:
        // look into the .slice() method instead of using .concat()
        // and adding current state with the ...spread operator.

    default:
        return state;
    }
}
