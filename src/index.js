import { createStore } from 'redux'
import todos from './reducers'
import { addTodo, toggleTodo, deleteTodo } from './actions';
const store = createStore(todos);
console.log(store)

// Add to do item
store.dispatch(addTodo('Feed goldfish', '😢 😢'));
console.log('%cInitial State with 1st to do item', 'color: yellow; font-family: Courier; font-size:20px', store.getState());

store.dispatch(addTodo('Walk cat'))
console.log('%cState after adding 2nd todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Wash feet'))
console.log('%cState after adding 3rd todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Listen to plants'))
console.log('%cState after adding 4th todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

store.dispatch(addTodo('Sleep'))
console.log('%cState after adding 4th todo', 'color: yellow; font-family: Courier; font-size:20px', store.getState())

// Toggle
store.dispatch(toggleTodo(1))
console.log('%cState after toggling first todo', 'color: pink; font-family: Courier; font-size:20px', store.getState())

// Delete
store.dispatch(deleteTodo(1))
console.log('%cState after deleting second todo', 'color: red; font-family: Courier; font-size:16px', store.getState())

// Show all state data
console.table(store.getState())