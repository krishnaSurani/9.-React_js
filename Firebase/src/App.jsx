import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Firebase/SignUp'
import SignIn from './Firebase/SignIn'
import Dashbord from './Firebase/Dashbord'

function App() {

  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' Component={SignUp}></Route>
        <Route path='/SignIn' Component={SignIn}></Route>
        <Route path='/Dashbord' Component={Dashbord}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
