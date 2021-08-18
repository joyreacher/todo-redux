//Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO'
export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
//Action createors
export const addTodo = text => ({
  type: ADD_TODO,
  text
})

export const toggleTodo = index => ({
  type: TOGGLE_TODO,
  index
})

export const deleteTodo = index => ({
  type: DELETE_TODO,
  index
})

export const login = (username, password) => ({
  type: LOGIN,
  username,
  password
})

export const register = (username, password, email, birthday) => ({
  type: REGISTER,
  username,
  password,
  email,
  birthday
})