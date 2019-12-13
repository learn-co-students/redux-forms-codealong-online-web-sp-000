import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CreateTodo() {
  const [text, setText] = useState("");
  useEffect(() => {});
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleInputChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { text: text } });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleInputChange} value={text} />
        </p>
        <input type="submit" />
      </form>
      {text}
      <div>
        <h2>Todos</h2>
        {todos.map((todo, idx) => (
          <p key={idx}>{todo.text}</p>
        ))}
      </div>
    </div>
  );
}

export default CreateTodo;
