import React from 'react'
import { Grid, Center, Box, useBreakpointValue } from '@chakra-ui/react'

import NavBar from '../components/NavBar'
import { Pokemons } from '../components/Pokemons'
import pokemons from '../data/pokemons.json'


const Pokedex = () => {
  const pokemonsList = pokemons.pokemon
  const h = useBreakpointValue({base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)'})
  return (
    <>
      <NavBar />
      <Center>
        <Box>
          <Grid templateColumns={h} gap={5}>
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
