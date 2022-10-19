import { combineReducers } from 'redux'
import { loginReducer } from './login'
import { shoppingListReducer } from './shoppingList'
import { shoppingListExtraReducer } from './shoppingListExtra'
import { stepCounterReducer } from './stepCounter'

const rootReducer = combineReducers({
  stepCounterReducer,
  shoppingListReducer,
  shoppingListExtraReducer,
  loginReducer,
})

export default rootReducer