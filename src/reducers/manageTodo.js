export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);
  switch (action.type) {
    case 'ADD_TODO':
      // return {
      //   ...state,
      //   todos: [...state, action.payload]
      // }
      return {todos: state.todos.concat(action.payload) };


    default:
      return state;
  }

  // return state;
}
