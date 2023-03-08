import React from 'react'
import {  Route, Routes } from 'react-router-dom' //import React router from 'react-router
import Login from '../auth/Login'
import Login2 from '../auth/Login2'
import Register from '../auth/Register'
import Register2 from '../auth/Register2'
import Header from '../layouts/Header'
import Landing from '../layouts/Landing'



const Routers = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element ={<Login2></Login2>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
    </Routes> </>
  )
}

export default Routers 