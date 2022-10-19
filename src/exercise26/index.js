import React, { useState } from "react";
import './index.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ADD_STEP, REMOVE_STEP, UPDATE_STEP } from "../actions/types";

const StepCounter = () => {
  const { totalStep } = useSelector(state => state.stepCounterReducer)
  const [inputSteps, setInputSteps] = useState('')
  const dispatch = useDispatch()

  return (
    <main className="step-counter-main">
      <h1>Actualmente hay {totalStep} pasos registrados!</h1>
      <section className="button-container">
        <button type="button" onClick={() => dispatch({ type: REMOVE_STEP })}>Eliminar un paso</button>
        <button type="button" onClick={() => dispatch({ type: ADD_STEP })}>Agregar un paso</button>
      </section>
      <section className="update-container">
        <p>Actualizar la cantidad de pasos por:</p>
        <div>
          <input type="number" name="inputSteps" value={inputSteps} onChange={(e) => setInputSteps(e.target.value)} />
          <button type="button" onClick={() => {
              dispatch({ type: UPDATE_STEP, payload: Number(inputSteps) })
              setInputSteps('')
            }}
          >
            Actualizar
          </button>
        </div>
      </section>
    </main>
  )
}

export default StepCounter;