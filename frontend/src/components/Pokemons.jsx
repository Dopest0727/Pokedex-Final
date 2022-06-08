import React from 'react'
//import { getPokemons, getPokemonData } from '../utils/API'

export const Pokemons = (props) => {
  const pokemon = props.pokemon
  return (
    <div key={pokemon.id}>
      <img src={pokemon.img} alt={pokemon.name} title={pokemon.name} />
      <p>Name: {pokemon.name}</p>
      <p>ID: {pokemon.id}</p>
      <p>Type: {pokemon.type}</p>
    </div>
  )
}
