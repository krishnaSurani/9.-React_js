import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './Firebase/SignUp'
import Login from './Firebase/Login'
import Daseboard from './Firebase/Daseboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={SignUp}></Route>
          <Route path='/Login' Component={Login}></Route>
          <Route path='/Daseboard' Component={Daseboard}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
