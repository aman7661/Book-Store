
import React from 'react'
import Home from './components/Home'
import Courses from './Courses/Courses'
import {Route,Routes} from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={<Courses/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
         </Routes>
    </div>
  )
}

export default App
