import React, { useEffect, useState } from "react";
import './index.css'
import useId from "react-id-generator";
import plusIcon from '../assets/plus-icon.svg'
import removeIcon from '../assets/remove-icon.svg'
import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../actions/types";
import { useDispatch, useSelector } from "react-redux";

const ItemsList = () => {
  const [inputItem, setInputItem] = useState('')
  const [itemsListSorted, setItemsListSorted] = useState([])
  const { itemsList } = useSelector(state => state.shoppingListReducer)
  const dispatch = useDispatch()

  const addItem = (e) => {
    e.preventDefault()
    if (inputItem === '') return
    dispatch({
      type: ADD_ITEM, payload: {
        id: useId(),
        item: inputItem,
        isDone: false
      }
    })
    setInputItem('')
  }

  useEffect(() => {
    const itemsListCopy = [...itemsList]
    const sorted = itemsListCopy.sort((a, b) => a.item.localeCompare(b.item)).sort((a, b) => a.isDone - b.isDone)
    setItemsListSorted(sorted)    
  }, [itemsList])

  const items =
    itemsListSorted.length
      ? itemsListSorted.map(({ id, item, isDone }) => {
          return (
            <li key={id}>
              <input
                className="checkbox-item"
                type="checkbox"
                checked={isDone}
                onChange={(e) => dispatch({ type: UPDATE_ITEM, payload: { id, isDone: e.target.checked } }) }
              />
              <span className={isDone ? 'item-done' : ''}> {item}</span>
              {
                !isDone &&
                <button type="button" onClick={() => dispatch({type: REMOVE_ITEM, payload: id })}>
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