import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import StepCounter from "./exercise26";
import ItemsList from "./exercise27";
import ShoppingList from "./exercise27extra";
import ShoppingListDetail from "./exercise27extra/ShoppingListDetail";
import LoginApp from "./exercise28";
import Dashboard from "./exercise28/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/exercise26">Exercise 26: Step Counter</Link>
              </li>
              <li>
                <Link to="/exercise27">Exercise 27: Shopping List</Link>
              </li>
              <li>
                <Link to="/exercise27/extra">Exercise 27: Extra</Link>
              </li>
              <li>
                <Link to="/exercise28">
                  Exercise 28: Login & Exercise 29: Login Persist
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/exercise26" element={<StepCounter />} />
          <Route path="/exercise27" element={<ItemsList />} />
          <Route exact path="/exercise27/extra" element={<ShoppingList />} />
          <Route path="/exercise27/extra/:id" element={<ShoppingListDetail />} />
          <Route path="/exercise28" element={<LoginApp />} />
          <Route path="/exercise28/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
