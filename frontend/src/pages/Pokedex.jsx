import React from 'react'
import NavBar from '../components/NavBar'

import { Pokemons } from '../components/Pokemons'
import pokemons from '../data/pokemons.json'

import { Grid, Center, Box } from '@chakra-ui/react'

const Pokedex = () => {
  const pokemonsList = pokemons.pokemon
  return (
    <>
      <NavBar />
      <Center>
        <Box centerContent>
          <Grid templateColumns="repeat(4, 1fr)">
            {pokemonsList.map((pokemon) => {
              return (
                <Box key={pokemon.id}>
                  <Pokemons key={pokemon.id} pokemon={pokemon} />
                </Box>
              )
            })}
          </Grid>
        </Box>
      </Center>
    </>
  )
}

export default Pokedex
