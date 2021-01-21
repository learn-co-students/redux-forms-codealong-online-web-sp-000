export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);
  switch(action.type){
    case 'AddToDo':
      console.log(state.todos.concat(action.todo))
      return {
       
        todos: state.todos.concat(action.todo)
      }
    default:
      return state
  }


}
