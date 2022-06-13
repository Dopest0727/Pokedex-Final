import React from 'react'
import { Grid, Center, Box, useBreakpointValue, Input } from '@chakra-ui/react'
import { useState } from 'react'

import NavBar from '../components/NavBar'
import { Pokemons } from '../components/Pokemons'
import pokemons from '../data/pokemons.json'

const Pokedex = () => {
  const pokemonsList = pokemons.pokemon
  const [query, setQuery] = useState('')
  const h = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  })
  return (
    <>
      <NavBar />
      <Center my="10">
        <Box>
          <Input
            my="5"
            borderWidth="2px"
            borderColor="orange.200"
            placeholder="Search for your favorite pokemon!"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Grid templateColumns={h} gap={5}>
            {pokemonsList
              .filter((pokemon) => {
                if (query === '') {
                  return pokemon
                } else if (pokemon.name.toLowerCase().includes(query.toLowerCase())) {
                  return pokemon
                } 
                // else if (pokemon.type.includes(query))  { FILTER BY TYPE
                //   return pokemon
              })
              .map((pokemon) => {
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
