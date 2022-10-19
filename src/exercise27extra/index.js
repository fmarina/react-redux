import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import useId from "react-id-generator";
import './index.css'
import { ADD_SHOPPING_LIST } from "../actions/types";
import plusIcon from '../assets/plus-icon.svg'

const ShoppingList = () => {
  const dispatch = useDispatch()
  const { shoppingList } = useSelector(state => state.shoppingListExtraReducer)
  const [shoppingListName, setShoppingListName] = useState('')

  const shoppingItemsList = shoppingList.map(({ listName, itemList, created }) => {
    const totalItems = itemList.length
    let totalItemsDone = 0
    if (itemList.length) {
      itemList.forEach(item => {
        if (item.isDone) {
          totalItemsDone += 1
        }
      });      
    }
    return (
      <li key={useId()} className="shopping-list-item">
        <Link to={`/exercise27/extra/${listName}`}>
          <div className="shopping-list-item-title">
            <p>{listName}</p>
            <p>{totalItemsDone}/{totalItems}</p>
          </div>
          <p className="shopping-list-item-date">{created}</p>
        </Link>
      </li>
    )
  })

  return (
    <div className="shopping-list-app-container">
      <p>Mis listas de compras</p>
      <main>
        <ul>
          {shoppingItemsList.length ? shoppingItemsList : <p className="shopping-list-empty">No hay lista de compra creada</p>}
        </ul>
      </main>
      <form>
        <input type="text" placeholder="Nombre lista de compra" value={shoppingListName} onChange={(e) => setShoppingListName(e.target.value)} />
        <button type="submit" className="add-shopping-list-button" onClick={(e) => {
          e.preventDefault()
          const validateDuplicated = shoppingList.find(({ id }) => id === shoppingListName)
          if (validateDuplicated) return 
          const date = new Date()
          dispatch({
            type: ADD_SHOPPING_LIST,
            payload: {
              id: shoppingListName,
              listName: shoppingListName,
              itemList: [],
              created: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            }
          })

          setShoppingListName('')          
        }}>
          <img src={plusIcon} alt="plus icon" />
        </button>
      </form>
    </div>
  )
}

export default ShoppingList