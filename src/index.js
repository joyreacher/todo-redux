import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// TASK
import { createStore } from 'redux'
import todos from './reducers/index'
import user from './reducers/user'
import { addTodo, toggleTodo, deleteTodo, login, register } from './actions';
const store = createStore(todos);
const users = createStore(user);

//  USERS - state
// REGISTER
users.dispatch(register('Brian', 'password', 'email@email.com', '2/1/34'));
console.log('%cUsers state-Register', 'color: orange; font-family: Courier; font-size:20px', users.getState());

// LOGIN
users.dispatch(login('Brian', 'password'));
console.log('%cUser state-Login', 'color: orange; font-family: Courier; font-size:20px', users.getState());

//  To Do - State
store.dispatch(addTodo('Feed goldfish 🐟'));
console.log('%cInitial To do State with 1st to do item', 'color: yellow; font-family: Courier; font-size:20px', store.getState());

store.dispatch(addTodo('Walk cat 🐈'))
console.log('%cTo do State after adding 2nd todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Wash feet 🦶'))
console.log('%cTo do State after adding 3rd todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Listen to plants 🏡'))
console.log('%cTo do State after adding 4th todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Sleep 🛌'))
console.log('%cTo do State after adding 4th todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

// Toggle
store.dispatch(toggleTodo(0))
console.log('%cTo do State after toggling 1st todo', 'color: pink; font-family: Courier; font-size:20px', store.getState())

store.dispatch(toggleTodo(4))
console.log('%cTo do State after toggling 5th todo', 'color: pink; font-family: Courier; font-size:20px', store.getState())

// Delete
store.dispatch(deleteTodo(1))
console.log('%cTo do State after deleting second todo', 'color: red; font-family: Courier; font-size:16px', store.getState())

// Show all state data
console.table(store.getState())
console.table(users.getState())

ReactDOM.render(<App />, document.getElementById('root'));