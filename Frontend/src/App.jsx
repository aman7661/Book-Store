
import React from 'react'
import Home from './components/Home'
import Courses from './Courses/Courses'
import {Navigate, Route,Routes} from "react-router-dom"
import Signup from './components/Signup'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {

  const[authUser,setAuthUser] =useAuth()
  console.log(authUser)
  return (
    <div>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Course" element={authUser?<Courses/>:<Signup></Signup>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
         </Routes>
         <Toaster />
    </div>
  )
}

export default App
