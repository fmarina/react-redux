import { ADD_STEP, REMOVE_STEP, UPDATE_STEP } from "../../actions/types"

const initialState = {
  totalStep: 0
}

export const stepCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STEP:
      return {
        totalStep: state.totalStep + 1
      }
    case REMOVE_STEP:
      return {
        totalStep: state.totalStep - 1
      }
    case UPDATE_STEP:
      return {
        totalStep: action.payload
     }
    default:
      return state
  }
}