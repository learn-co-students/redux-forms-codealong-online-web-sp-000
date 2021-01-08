import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
  //use redux createStore
let store = createStore(manageTodo);

ReactDOM.render(
  //pass store into Pro -> allows access when connected
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
