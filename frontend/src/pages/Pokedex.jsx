import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup'
import axios from 'axios'
import {
  Grid,
  Center,
  Box,
  useBreakpointValue,
  Button,
  Input,
  Image,
  Stack,
  Badge,
  Flex,
} from '@chakra-ui/react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
    axios
      .get(`https://picopalquelee.herokuapp.com/pokemons`)
      .then((res) => {
        setPokemons(res.data.pokemons)
      })
      .catch((err) => {})
  }, [])

  const [query, setQuery] = useState('')
  const h = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(5, 1fr)',
  })

  const backgrounds = {
    Normal: '#A8A878', // a8a878 //BLACKALPHA CHECK
    Ground: '#E0C068', // e0c068
    Fighting: '#C02038', // c02038
    Poison: '#A040A0', // #A040A0 //PURPLR CHECK
    Flying: '#A890F0', // A890F0
    Ghost: '#705898', // #705898
    Dragon: '#7038F8', // #7038F8
    Psychic: '#F85888', // #F85888 //PINK CHECK
    Grass: '#78C850', // #78C850 //GREEN CHECK
    Bug: '#A8B820', // #A8B820 //GRAY CHECK
    Rock: '#B8A038', // #B8A038  //BLUE CHECK
    Water: '#6890F0', // #6890F0 //RED CHECK
    Fire: '#F08030', // #F08030 //TEAL CHECK
    Ice: '#98D8D8', // #98D8D8 //YELLOW CHECK
    Electric: '#F8D030', // #F8D030
  }

  return (
    <Box>
      <NavBar />
      <Center mb="10">
        <Box>
          <Input
            my="5"
            borderWidth="2px"
            borderColor="blue.200"
            placeholder="Search for your favorite pokemon!"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Grid templateColumns={h} gap={5}>
            {pokemons
              // eslint-disable-next-line
              .filter((pokemon) => {
                if (query === '') {
                  return pokemon
                } else if (
                  pokemon.name.toLowerCase().includes(query.toLowerCase())
                ) {
                  return pokemon
                }
              })
              .map((pokemon) => {
                console.log(pokemons)
                return (
                  <Box
                    w="100%"
                    key={pokemon._id}
                    bgColor={backgrounds[pokemon.type[0]]}
                  >
                    <Box>
                      <Stack
                        w="100%"
                        display="flex"
                        direction="column"
                        alignItems="center"
                      >
                        <Box
                          key={pokemon.type}
                          borderRadius="md"
                          textAlign="center"
                        >
                          <p>#{pokemon.num}</p>
                          <Center>
                            <Image m="5" src={pokemon.img} alt={pokemon.name} />
                          </Center>
                          <b>{pokemon.name}</b>
                          <br />
                          Type: {pokemon.type[0]} {pokemon.type[1]}
                        </Box>

                        <Flex w="100%" display="flex" direction="column">
                          <Box>
                            <Popup
                              trigger={
                                <Button
                                  bgColor={backgrounds[pokemon.type[0]]}
                                  w="100%"
                                  borderRadius="0"
                                  color="black"
                                  variant="solid"
                                  _hover={{
                                    background: 'blue.500',
                                    color: 'white',
                                  }}
                                >
                                  Read more
                                </Button>
                              }
                              modal
                              nested
                            >
                              {(close) => (
                                <Box
                                  top={'0'}
                                  left={'0'}
                                  width={'100vw'}
                                  height={'100vh'}
                                  blur={'3px'}
                                  background={'rgba(0, 0, 0, 0.7)'}
                                  display={'flex'}
                                  alignItems={'center'}
                                  justifyContent={'center'}
                                >
                                  <Box
                                    w="xs"
                                    bgColor={backgrounds[pokemon.type[0]]}
                                    p="10"
                                    justifyContent="center"
                                  >
                                    <Center>
                                      <Image
                                        width="50%"
                                        src={pokemon.img}
                                        alt={pokemon.name}
                                        mb="10"
                                      />
                                    </Center>
                                    <Stack
                                      direction="column"
                                      justify="space-between"
                                    >
                                      <Box
                                        display={'flex'}
                                        alignItems={'center'}
                                        justifyContent={'center'}
                                        flexDir={'column'}
                                      >
                                        <h1>Number: {pokemon.num}</h1>
                                        <h1>Name: {pokemon.name} </h1>
                                        <h1> Type: {pokemon.type[0]} </h1>
                                        <h1> {pokemon.type[1]} </h1>
                                        <h1> Height: {pokemon.height} </h1>
                                        <h1>Weight: {pokemon.weight} </h1>
                                        <h1>
                                          Weaknesses: {pokemon.weaknesses[0]},
                                          {pokemon.weaknesses[1]}
                                        </h1>
                                        
                                        Evolutions:
                                        {pokemon.next_evolution.map((y) => (
                                          <div key={pokemon.id}>
                                            {y.name}
                                          </div>
                                        ))}
                                      </Box>
                                    </Stack>
                                    <Button
                                      mt="4"
                                      w="100%"
                                      onClick={close}
                                      bgColor="blue.200"
                                      color="white"
                                    >
                                      {' '}
                                      Close{' '}
                                    </Button>
                                  </Box>
                                </Box>
                              )}
                            </Popup>
                          </Box>
                        </Flex>
                        <Flex
                          w="100%"
                          display="flex"
                          direction="row"
                          px="2"
                        ></Flex>
                      </Stack>
                    </Box>
                  </Box>
                )
              })}
          </Grid>
        </Box>
      </Center>
      <Footer />
    </Box>
  )
}

export default Pokedex
