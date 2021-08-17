import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import todos from './reducers'
import { addTodo, toggleTodo } from './actions';
ReactDOM.render(<App />, document.getElementById('root'));
const store = createStore(todos);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
console.log(store)
store.dispatch(addTodo('Dispatch my first action'));
console.log('Initial State ', store.getState());

store.dispatch(addTodo('Dispatch my second action'))
console.log('State after adding first todo', store.getState())

store.dispatch(toggleTodo(0))
console.log('State after toggling first todo', store.getState())