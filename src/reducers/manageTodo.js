function manageTodo(state={todos: []}, action) {
	switch (action.type) {
		case "ADD_TODO":
			console.log({todos: state.todos.concat(action.payload.todo)});
			return {todos: state.todos.concat(action.payload.todo)};
		default:
			return state
	}
}

export default manageTodo
