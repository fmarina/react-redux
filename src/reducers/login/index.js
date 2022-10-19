import { SAVE_USER, UPDATE_USER } from "../../actions/types"

const initialState = {
  user: {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
  },
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        user: {
          ...state.user,
          email: action.payload.email,
          password: action.payload.password
        }
      }
    case UPDATE_USER:
      return {
        user: {
          ...state.user,
          ...action.payload
        }
      }
    default:
      return state
  }
}