export default function manageTodo(state = {
  todos: [
    {text: 'buy groceries'},
    {text: 'watch netflix'}
  ],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      let newItem = {text: action.payload.text}
      console.log({ todos: 
      state.todos.concat(newItem)})

      return { todos: 
        state.todos.concat(newItem)}

      default: 
        return state;
  }
}
