export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log("reducer received this action:", action);
  switch(action.type) {
    case 'ADD_ITEM':
    return {
      todos: [...state.todos, action.todo]
    }
    default:
      return state;
  }
};
