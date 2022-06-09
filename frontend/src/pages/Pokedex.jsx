import React from 'react'
import { Grid, Center, Box, useBreakpointValue, extendTheme } from '@chakra-ui/react'

import SearchBar from "../components/SearchBar"
import NavBar from '../components/NavBar'
import { Pokemons } from '../components/Pokemons'
import pokemons from '../data/pokemons.json'


const Pokedex = () => {
  const pokemonsList = pokemons.pokemon
  const h = useBreakpointValue({base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'})
  return (
    <>
      <NavBar />
      <SearchBar />
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
