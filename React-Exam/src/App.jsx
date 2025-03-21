import { useState } from 'react'

import './App.css'
import { Provider } from 'react-redux'
import MainRouter from './Routes/MainRoute'
import { store } from './App/store'


function App() {

  return (
    <>
    {/* <Provider store={store}>
      <MainRoute></MainRoute>
    </Provider> */}

    <Provider store={store}>
      <MainRouter></MainRouter>
    </Provider>
    </>
  )
}

export default App