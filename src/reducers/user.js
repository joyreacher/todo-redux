import {
  LOGIN,
  REGISTER
} from '../actions'

function user (state = [], action) {
  switch (action.type) {
    case LOGIN:
      return [
        ...state,
        {
          username: action.username,
          password: action.password
        }
      ]
    case REGISTER:
      return [
        ...state,
        {
          username: action.username,
          password: action.password,
          email: action.email,
          birthday: action.birthday
        }
      ]
  }
}
export default user
