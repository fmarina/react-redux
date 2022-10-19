import React, { useState } from "react";
import './dashboard.css'
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER } from "../actions/types";

const Dashboard = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.loginReducer)
  
  const [userData, setUserData] = useState({
    email: user.email || '',
    firstname: '',
    lastname: '',
    password: user.password || '',
  })

  const handleOnChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value })
  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: UPDATE_USER, payload: userData })
  }

  return (
    <div className="login-dashboard-container">
      <nav>
        <p>Welcome {user.email || ''}</p>
      </nav>
      <main className="login-dashboard">
        <p>Informacion personal</p>
        <p>En esta pagina puedes encontrar toda la informacion relacionada con tu perfil</p>

        <form onSubmit={handleOnSubmit}>
          <label htmlFor="email">
            Email
            <input type="text" name="email" id="email" value={userData.email} onChange={handleOnChange} />
          </label>
          <label htmlFor="firstname">
            Nombre
            <input type="text" name="firstname" id="firstname" value={userData.firstname} onChange={handleOnChange} />
          </label>
          <label htmlFor="lastname">
            Apellido
            <input type="text" name="lastname" id="lastname" value={userData.lastname} onChange={handleOnChange} />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" name="password" id="password" value={userData.password} onChange={handleOnChange} />
          </label>
          <button type="submit">Guardar cambios</button>
        </form>
      </main>
    </div>
  )
}

export default Dashboard