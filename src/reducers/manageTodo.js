export default function manageTodo(state = {
  todos: [],
}, action) {

  switch (action.type){
    case 'ADD_TODO':
      // console.log(action.payload)
      console.log({ todosSpead: [...state.todos, action.payload.text]})
      console.log({ todosConcat: state.todos.concat(action.payload.text)})
      return { todos: [...state.todos, action.payload.text]}
  
    default:
  return state};
}

// export default function manageTodo(state = {
//   todos: [],
// }, action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       console.log("from reducer", action.payload.text)

//       console.log({ todos: state.todos.concat(action.payload.text) });

//       return { todos: state.todos.concat(action.payload.text) };

//     default:
//       return state;
//   }
// }