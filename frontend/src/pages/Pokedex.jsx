import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Grid, Center, Box, useBreakpointValue, Input, list } from '@chakra-ui/react'

import NavBar from '../components/NavBar'
import { Pokemons } from '../components/Pokemons'
import { getPokemons } from '../utils/utils';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios.get('https://picopalquelee.herokuapp.com/pokemons')
    .then(res => {
      console.log(res)
      setPokemons(res.data.pokemons)
    })
    .catch(err => {
      console.log(err)
    })
  },[] )


  const [query, setQuery] = useState('')
  const h = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  })
  return (
    <>
    {/* <div>
      <ul>
  {pokemons.map(pokemon => <li key={pokemon.id}>{pokemon.name}</li>)}
      </ul>
    </div> */}
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
              .map((pokemon) => {
                return (
                  <Box key={pokemon.id}>
                    <li key={pokemon.id}>{pokemon.name}</li>
                    <img src={pokemon.img}/>
                    {/* <Pokemons key={pokemon.id} pokemon={pokemons.pokemon} /> */}
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
