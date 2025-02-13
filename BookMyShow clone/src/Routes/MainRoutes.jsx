import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import HOME from '../Page/Home'
import FORM from '../Page/Form'
import Pagenotfound from '../component/pagenotfound'
// import PageNotFound from '../pages/pagenotfound'

function MainRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HOME/>}></Route>
            <Route path='/Form' element={<FORM/>}></Route>
            <Route path='/Form/:id' element={<FORM/>}></Route>
            <Route path='*' element={<Pagenotfound></Pagenotfound>}></Route>
        {/* <Route path='*' element={<PageNotFound/>}></Route> */}

        </Routes>
    </div>
  )
}

export default MainRoutes