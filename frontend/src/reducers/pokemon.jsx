import { createSlice } from "@reduxjs/toolkit";

const pokemon = createSlice({
  name: "pokemon",
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setErrors: (store, action) => {
      store.error = action.payload;
    },
    deletePokemon: (store, action) => {
      const decreasedPokemon = store.items.filter(
        (item) => item._id !== action.payload
      );
      store.items = decreasedPokemon;
    },

    // updateTask: (store, action) => {
    //   const updatedPlants = store.items.map((item) => {
    //     if (item._id === action.payload._id) {
    //       item = action.payload;
    //       return item;
    //     } else {
    //       return item;
    //     }
    //   });
    //   store.items = updatedPlants;
    // },
  },
});

export default plant;