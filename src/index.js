import { createStore } from 'redux'
import todos from './reducers'
import { addTodo, toggleTodo } from './actions';
const store = createStore(todos);
console.log(store)
store.dispatch(addTodo('Dispatch my first action'));
console.log('Initial State ', store.getState());

store.dispatch(addTodo('Dispatch my second action'))
console.log('State after adding first todo', store.getState())

store.dispatch(toggleTodo(0))
console.log('State after toggling first todo', store.getState())