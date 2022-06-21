// const BASE_URL = "http://localhost:8080"

// export const API_URL = (slug) => `${BASE_URL}/${slug}`

// export const POKEMON_ID = (pokemonID) => `http://localhost:8080/pokemons/${pokemonID}`

// export const POKEMONS = () => `http://localhost:8080/pokemons/`

// const URL = `https://picopalquelee.herokuapp.com/pokemons`
// export const getPokemons = () => {
//     return fetch(URL).then((response) => response.json());
//   };

const BASE_URL = `https://picopalquelee.herokuapp.com/pokemons`

export const API_URL = (slug) => `${BASE_URL}/${slug}`
