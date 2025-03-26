import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Entrance"
import components from "./components/formComponent"

const Login = components[0]
const Register = components[1]

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
