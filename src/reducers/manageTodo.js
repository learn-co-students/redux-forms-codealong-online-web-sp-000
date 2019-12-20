export default function manageTodo(state = {
  todos: [],
}, action) {
  debugger
  switch (action.type){
    case 'ADD_TODO':
      console.log({todos: state.todos.concat(action.payload.text) });
      return { todos: state.todos.concat(action.payload.text) }

      default:
        console.log(action, state.todos)
        return state
  }
}
