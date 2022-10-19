import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useId from "react-id-generator";
import '../exercise27/index.css'
import { ADD_ITEM_TO_SHOPPING_LIST, REMOVE_ITEM_FROM_SHOPPING_LIST, UPDATE_ITEM_FROM_SHOPPING_LIST } from "../actions/types";
import plusIcon from '../assets/plus-icon.svg'
import removeIcon from '../assets/remove-icon.svg'

const ItemsList = () => {
  const [inputItem, setInputItem] = useState('')
  const [itemsListSorted, setItemsListSorted] = useState([])
  const { shoppingList } = useSelector(state => state.shoppingListExtraReducer)
  const dispatch = useDispatch()
  const { id } = useParams()

  const addItem = (e) => {
    e.preventDefault()
    if(inputItem === '') return
    dispatch({
      type: ADD_ITEM_TO_SHOPPING_LIST,
      payload: {
        id,
        itemList: {
          id: useId(),
          item: inputItem,
          isDone: false
        }
      }
    })
    setInputItem('')
  }
  
  
  useEffect(() => {
    const shoppingListCopy = [...shoppingList]
    const shoppingListFound = shoppingListCopy.find(shoppingItem => shoppingItem.listName === id)
    if (shoppingListFound && shoppingListFound.itemList.length) {
      setItemsListSorted(shoppingListFound.itemList)      
    } else {
      setItemsListSorted([])
    }
  }, [shoppingList])


  const items =
    itemsListSorted.length
      ? itemsListSorted.map(({ id: itemListId, item, isDone }) => {
          return (
            <li key={itemListId}>
              <input
                className="checkbox-item"
                type="checkbox"
                checked={isDone}
                onChange={(e) => 
                  dispatch({ type: UPDATE_ITEM_FROM_SHOPPING_LIST, payload: { id: id, itemListId, isDone: e.target.checked } }
                )}
              />
              <span className={isDone ? 'item-done' : ''}> {item}</span>
              {
                !isDone &&
                <button type="button" onClick={() => dispatch({ type: REMOVE_ITEM_FROM_SHOPPING_LIST, payload: {id, itemListId } })}>
                  <img src={removeIcon} alt="trash icon" />
                </button>
              } 
            </li>
          )
      })
      : <p>No items</p>

  return (
    <section className="items-list-box">
      <div className="items-list-header">
        <form>
          <input type="text" placeholder="Agregar Item" value={inputItem} onChange={(e) => setInputItem(e.target.value)} />
          <button type="submit" onClick={addItem}>
            <img src={plusIcon} alt="add icon" />
          </button>
        </form>
      </div>
      <ul className="items-list-unorderlist">
        {items}
      </ul>
    </section>
  )
}

export default ItemsList;