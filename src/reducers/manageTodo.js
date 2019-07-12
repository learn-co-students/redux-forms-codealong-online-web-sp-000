export default function manageTodo(state = {
  todos: [],
}, action) {

//Our initial state should be an empty list of todos, { todos: [] }.
//
// Second, we need to concatenate a new todo each time we receive an action that looks like { type: 'ADD_TODO', payload: { text: 'watch baseball' } }

  switch (action.type) {
    case 'ADD_TODO':

      console.log({todos:
        state.todos.concat(action.payload.text
        )});

      return {todos: state.todos.concat(action.payload.todos)}

    default:
      return state
  }
}
