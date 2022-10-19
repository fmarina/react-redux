import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SAVE_USER } from "../actions/types";
import './index.css'

const LoginApp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (email !== '' && password !== '') {
      dispatch({
        type: SAVE_USER,
        payload: { email, password }
      })
      navigate(`/exercise28/dashboard`); 
    }
  }

  return (
    <main className="login-app-container">
      <section>
          <h2>Log in</h2>
          <p>Por favor ingrese su email y contraseña</p>
        
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              name="password"
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Log in</button>
        </form>

      </section>
    </main>
  )

}

export default LoginApp