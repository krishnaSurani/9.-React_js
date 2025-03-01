import React from 'react'
import { Route, Routes } from 'react-router'
import Form from '../Components/Form'
import Home from '../Pages/Home'

export default function MainRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/form' element={<Form></Form>}></Route>
            <Route path='/form/:id' element={<Form></Form>}></Route>
        </Routes>
    </div>
  )
}
