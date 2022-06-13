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

  console.log(pokemons.response);

    
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
         {pokemons.map((pokemon) => {
           <Pokemons key={pokemon.id} pokemon={pokemon} />
         })}
  
          {/* <Grid templateColumns={h} gap={5}>
            {pokedex
              .filter((pokemons) => {
                if (query === '') {
                  return pokemons
                } else if (pokemons.name.toLowerCase().includes(query.toLowerCase())) {
                  return pokemons
                } 
              })
              .map((response) => {
                return (
                  <Box key={response.id}>
                    <Pokemons key={response.id} pokemon={response} />
                  </Box>
                )
              })}
          </Grid> */}
        </Box>
      </Center>
    </>
  )
}

export default Pokedex
