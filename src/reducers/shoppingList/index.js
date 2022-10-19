import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../../actions/types"

const initialState = {
  itemsList: [],
}

export const shoppingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        itemsList: [...state.itemsList, action.payload]
      }
    case REMOVE_ITEM:
      return {
        ...state,
        itemsList: state.itemsList.filter(item => item.id !== action.payload)
      }
    case UPDATE_ITEM:
      return {
        ...state,
        itemsList: state.itemsList.map(item => {
          return item.id === action.payload.id 
            ? {
              ...item,
              isDone: action.payload.isDone
            }
            : item
        })
      }
    default:
      return state
  }
}