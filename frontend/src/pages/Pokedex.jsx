import React from 'react'
import { Grid, Center, Box, useBreakpointValue, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

import NavBar from '../components/NavBar'
import { Pokemons } from '../components/Pokemons'

const Pokedex = () => {
  const [pokedex, setPokedex] = useState([])

  const fetchPokemons = async () => {
    const res = await fetch(`http://localhost:8080/pokemons/`)
    const data = await res.json()
    setPokedex(data)
  }
  useEffect(() => {
    fetchPokemons()
    
    }, [])
    
    console.log(fetchPokemons)
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
          {pokedex.res.map((pokemon) => {
            <div>{pokemon}</div>
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
