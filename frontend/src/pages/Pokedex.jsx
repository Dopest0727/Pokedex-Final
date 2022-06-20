import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { authenticated } from '../reducers/auth'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const authToken = useSelector((state) => state.authenticated.authToken)
  const userId = useSelector((state) => state.authenticated.userId);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://picopalquelee.herokuapp.com/pokemons`)
      .then((res) => {
        setPokemons(res.data.pokemons)
      })
      .catch((err) => {})
  }, [])

  const addPokemon = (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken,
      },
      body: JSON.stringify({
        // name,
        authenticated: userId,
      }),
    }; 
    fetch(`https://picopalquelee.herokuapp.com/pokemons/:num`, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location.reload();
        }
      });
  };

  const [query, setQuery] = useState('')
  const h = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
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
                return (
                  <Box
                    w="xs"
                    borderWidth="2px"
                    borderColor="blue.200"
                    borderRadius="lg"
                    key={pokemon._id}
                  >
                    <Box>
                      <Stack
                        w="100%"
                        display="flex"
                        direction="column"
                        alignItems="center"
                      >
                        <Box bgColor="blue.100" w="100%" borderRadius="md">
                          <Center>
                            <Image
                              m="5"
                              src={pokemon.img}
                              alt={pokemon.name}
                              borderRadius="lg"
                            />
                          </Center>
                        </Box>
                        <Flex px="2" w="100%" display="flex" direction="column">
                          <Badge
                            bgColor="blue.300"
                            mb="2"
                            w="100%"
                            color="white"
                            variant="solid"
                            borderRadius="md"
                            textAlign="center"
                            py="3"
                            px="3"
                          >
                            {pokemon.name}
                          </Badge>
                          <Popup
                            trigger={
                              <Button
                                bgColor="blue.300"
                                w="100%"
                                color="white"
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
                              <Box>
                                <Box
                                  w="xs"
                                  bgColor="white"
                                  borderRadius="lg"
                                  borderWidth="2px"
                                  borderColor="blue.200"
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
                                    <Badge
                                      color="white"
                                      bgColor="blue.800"
                                      variant="solid"
                                      borderRadius="md"
                                      textAlign="left"
                                      p="2"
                                    >
                                      Number: {pokemon.num}
                                    </Badge>
                                    <Badge
                                      color="white"
                                      bgColor="blue.700"
                                      variant="solid"
                                      borderRadius="md"
                                      textAlign="left"
                                      p="2"
                                    >
                                      Name: {pokemon.name}
                                    </Badge>
                                    <Badge
                                      color="white"
                                      bgColor="blue.600"
                                      variant="solid"
                                      borderRadius="md"
                                      textAlign="left"
                                      p="2"
                                    >
                                      Type: {pokemon.type[0]} {pokemon.type[1]}
                                    </Badge>
                                    <Badge
                                      color="white"
                                      bgColor="blue.500"
                                      variant="solid"
                                      borderRadius="md"
                                      textAlign="left"
                                      p="2"
                                    >
                                      Height: {pokemon.height}
                                    </Badge>
                                    <Badge
                                      color="white"
                                      bgColor="blue.400"
                                      variant="solid"
                                      borderRadius="md"
                                      textAlign="left"
                                      p="2"
                                    >
                                      Weight: {pokemon.weight}
                                    </Badge>
                                    <Badge
                                      color="white"
                                      bgColor="blue.300"
                                      variant="solid"
                                      borderRadius="md"
                                      textAlign="left"
                                      p="2"
                                    >
                                      Weaknesses: {pokemon.weaknesses[0]} {pokemon.weaknesses[1]}
                                    </Badge>
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
                        </Flex>
                        <Flex w="100%" display="flex" direction="row" px="2">
                          {pokemon.type.map((type) => (
                            <Badge
                              borderRadius="md"
                              w="100%"
                              textAlign="center"
                              color="white"
                              py="3"
                              px="3"
                              mb="2"
                              bgColor={backgrounds[type]}
                              key={type}
                            >
                              {type}
                            </Badge>
                          ))}
                        </Flex>
                        <Button onClick={() => {
                    addPokemon(userId, pokemon.name);
                  }} >Add</Button>
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
