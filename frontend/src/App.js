import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import SignIn from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Start from "./pages/Start"

import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import user from "./reducers/user";

const reducer = combineReducers({
  user: user.reducer,
});

const persistedStateJSON = localStorage.getItem("state")
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = configureStore({ reducer, preloadedState: persistedState })

store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()))
})


const App = () => {
  return (
    <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
    </ChakraProvider>
  );
};

export default App