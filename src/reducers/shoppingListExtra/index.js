import {
  ADD_SHOPPING_LIST,
  REMOVE_SHOPPING_LIST,
  ADD_ITEM_TO_SHOPPING_LIST,
  REMOVE_ITEM_FROM_SHOPPING_LIST,
  UPDATE_ITEM_FROM_SHOPPING_LIST
} from "../../actions/types"

const initialState = {
  shoppingList: [],
}

export const shoppingListExtraReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOPPING_LIST:
      return {
        shoppingList: [...state.shoppingList, action.payload]
      }
    case REMOVE_SHOPPING_LIST:
      return {       
        shoppingList: state.shoppingList.filter(item => item.listName !== action.payload)
      }
    case ADD_ITEM_TO_SHOPPING_LIST:
      return {
        shoppingList: state.shoppingList.map(shoppingItem => {
          return (shoppingItem.id === action.payload.id)
            ? { ...shoppingItem, itemList: [...shoppingItem.itemList, action.payload.itemList] }
            : shoppingItem
        })
      }
    case REMOVE_ITEM_FROM_SHOPPING_LIST:
      return {
        shoppingList: state.shoppingList.map(shoppingItem => {
          return (shoppingItem.id === action.payload.id)
            ? { ...shoppingItem, itemList: shoppingItem.itemList.filter(item => item.id !== action.payload.itemListId) }
            : shoppingItem
        })
      }
    case UPDATE_ITEM_FROM_SHOPPING_LIST:
      return {
        shoppingList: state.shoppingList.map(shoppingItem => {
          if (shoppingItem.id === action.payload.id) {
            const items = shoppingItem.itemList.map(item => {
              return (item.id === action.payload.itemListId)
              ? { ...item, isDone: action.payload.isDone }
              : item
            })
            return {...shoppingItem, itemList: items}
          }
          return shoppingItem
        })
      }
    default:
      return state
  }
}