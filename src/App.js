import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

//why not just import Redux forms?

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
      </div>
    );
  }
}

export default App;
