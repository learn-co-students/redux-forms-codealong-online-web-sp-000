import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import thunk from 'redux-thunk';

let store = createStore(manageTodo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const enhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

// const store = createStore(
//   manageTodo,
//   enhancers
// );
// const store = createStore(manageTodo, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
