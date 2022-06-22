import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from '@reduxjs/toolkit'
import persistState from 'redux-localstorage'
import { ChakraProvider } from '@chakra-ui/react'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Start from './pages/Start'
import Main from './pages/Main'

import Contact from './pages/Contact'
import Pokedex from './pages/Pokedex'
//import Profile from './pages/Profile'
import authenticated from './reducers/auth'

const enhancer = compose(persistState())
const reducer = combineReducers({
  authenticated: authenticated.reducer,
})
const store = createStore(reducer, enhancer)

const App = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/pokedex" element={<Pokedex />}></Route>
            {/* <Route path="/profile" element={<Profile />}></Route> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  )
}

export default App
