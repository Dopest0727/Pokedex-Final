import React, { useState, useEffect } from 'react';
import { Grid, Center, Box, useBreakpointValue, Input } from '@chakra-ui/react'

import NavBar from '../components/NavBar'
import { Pokemons } from '../components/Pokemons'
import { getPokemons } from '../utils/utils';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  console.log(pokemons);
  // console.log(Object.entries(pokemons)[3][1])

    
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
            {pokemons
              .filter((pokemons) => {
                if (query === '') {
                  return pokemons
                } else if (pokemons.name.toLowerCase().includes(query.toLowerCase())) {
                  return pokemons
                } 
              })
              .map((pokemons) => {
                return (
                  <Box key={pokemons.id}>
                    <Pokemons key={pokemons.id} pokemon={pokemons} />
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
