import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(manageTodo); //create store

ReactDOM.render( //pass the store to the provider to allow access when we connect components
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
 