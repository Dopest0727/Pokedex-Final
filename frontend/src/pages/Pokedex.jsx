import React from 'react'
import NavBar from '../components/NavBar'

import { Pokemons } from '../components/Pokemons'
import pokemons from '../data/pokemons.json'

import { Box } from '@chakra-ui/react'

const Pokedex = () => {
  const pokemonsList = pokemons.pokemon
  return (
    <div>
      <NavBar />
      <Box>
        {pokemonsList.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <Pokemons key={pokemon.id} pokemon={pokemon} />
            </div>
          )
        })}
      </Box>
    </div>
  )
}

export default Pokedex

//import { getPokemons, getPokemonData } from '../utils/API'
//import { useState } from 'react'
//import { AnimationLoader } from '../components/AnimationLoader'

/* const pokemonsArray = "https://picopalquelee.herokuapp.com/pokemons" */
/* 
fetch("https://picopalquelee.herokuapp.com/pokemons")
  .then(res => res.json())
  .then(data => console.log(data)) */
