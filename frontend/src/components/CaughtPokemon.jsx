import React from 'react'
import { Box, Image } from '@chakra-ui/react'

import pokemons from '../data/pokemons.json'

export const CaughtPokemons = () => {
  const caughtpokemon = pokemons.pokemon

  return (
    <>
      {caughtpokemon.map((pokemon) => {
        return (
          <Box key={pokemon.id}>
            <h1>Hello username!</h1>
            <p>Display all the pokemon user has cought,</p>
            <Image
              m="5"
              src={pokemon.img}
              alt={pokemon.name}
              title={pokemon.name}
              borderRadius="md"
            />
          </Box>
        )
      })}
    </>
  )
}