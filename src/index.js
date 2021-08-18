import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// TASK
import { createStore } from 'redux'
import todos from './reducers/index'
import { addTodo, toggleTodo, deleteTodo, login } from './actions';
const store = createStore(todos);

// LOGIN
store.dispatch(login('Brian', 'password'));
console.log('%cLOGIN', 'color: orange; font-family: Courier; font-size:20px', store.getState());

store.dispatch(addTodo('Feed goldfish 🐟'));
console.log('%cInitial State with 1st to do item', 'color: yellow; font-family: Courier; font-size:20px', store.getState());

store.dispatch(addTodo('Walk cat 🐈'))
console.log('%cState after adding 2nd todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Wash feet 🦶'))
console.log('%cState after adding 3rd todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Listen to plants 🏡'))
console.log('%cState after adding 4th todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Sleep 🛌'))
console.log('%cState after adding 4th todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

// Toggle
store.dispatch(toggleTodo(0))
console.log('%cState after toggling 1st todo', 'color: pink; font-family: Courier; font-size:20px', store.getState())

store.dispatch(toggleTodo(4))
console.log('%cState after toggling 5th todo', 'color: pink; font-family: Courier; font-size:20px', store.getState())

// Delete
store.dispatch(deleteTodo(1))
console.log('%cState after deleting second todo', 'color: red; font-family: Courier; font-size:16px', store.getState())

// Show all state data
console.table(store.getState())

ReactDOM.render(<App />, document.getElementById('root'));