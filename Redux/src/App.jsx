import './App.css'
import React from 'react'
import { Provider } from 'react-redux'
import Counter from './component/counter'
import { store } from './App/Store'
function App() {

  return (
    <>

      <Provider store={store}>
        <Counter/>
        </Provider>

    </>
  )
}

export default App
