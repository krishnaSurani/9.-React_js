import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HOME from '../Pages/Home'  
import ABOUT from '../Pages/About'
import RESUME from '../Pages/Resume'
import WORK from '../Pages/Work'
import BLOG from '../Pages/Blog'
import CONTACT from '../Pages/Contact'

export default function MainRoutes() {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<HOME/>}></Route>
            <Route path='/About' element={<ABOUT/>}></Route>
            <Route path='/Resume' element={<RESUME/>}></Route>
            <Route path='/Work' element={<WORK/>}></Route>
            {/* <Route path='/' element={<BLOG/>}></Route> */}
            <Route path='/Contact' element={<CONTACT/>}></Route>
        </Routes>
    </div>
  )
}
