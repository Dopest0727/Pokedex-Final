import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'


import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Start from './pages/Start'
import Main from './pages/Main'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Pokedex from './pages/Pokedex'

import AnimationLoader from './components/AnimationLoader'

import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { authenticated } from './reducers/auth'

const reducer = combineReducers({
  authenticated: authenticated.reducer,
})

const store = configureStore({ reducer })

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
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/pokedex" element={<Pokedex />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  )
}

export default App
