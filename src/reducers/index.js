import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  LOGIN
} from '../actions'

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => (index === action.index) ? { ...todo, completed: !todo.completed } : todo)
    case DELETE_TODO:
      state.splice(action.index, 1)
      return state
    case LOGIN:
      return [
        ...state,
        {
          username: action.username,
          password: action.password
        }
      ]
  }
}
export default todos
