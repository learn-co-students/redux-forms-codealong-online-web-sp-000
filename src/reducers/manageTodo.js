export default function manageTodo(
  //Step 1: create an empty initial state 
  state = {
    todos: [],
}, 
action) {
  //Step 2: Concatenate a new todo each time we receive an action
  switch (action.type) {
    case 'ADD_TODO':
      console.log({ todos:
        state.todos.concat(action.payload.text) });

        return { todos:
          state.todos.concat(action.payload.text) };

    default: 
          return state;
  }
}
