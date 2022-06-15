import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, compose } from '@reduxjs/toolkit'
import persistState from "redux-localstorage";

import { ChakraProvider } from '@chakra-ui/react'

import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Start from './pages/Start'
import Main from './pages/Main'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import Pokedex from './pages/Pokedex'
import SinglePokemon from './pages/SinglePokemon'

import { authenticated } from './reducers/auth'

const enhancer = compose(persistState());

const reducer = combineReducers({
  authenticated: authenticated.reducer,
});

const store = createStore(reducer, enhancer);

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
            <Route path="/pokemons/:num" element={<SinglePokemon />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  )
}

export default App

//Qb lbh ernyyl unir abguvat orggre gb qb guna or ybbxvat ng bguref ercbf. Fnq.
//Lbh fubhyq abg or urer, areq.


/* import { AnimationLoader } from './components/AnimationLoader'
import { loading } from './reducers/loading'
 */

   /* loading: loading.reducer, */