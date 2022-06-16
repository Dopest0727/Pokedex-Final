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
  Heading,
  Stack,
  Text,
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
      .catch((err) => {
      })
  }, [])

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
      <Center>
        <Box w="xs">
          <Badge
            borderRadius="md"
            colorScheme="twitter"
            py="3"
            px="6"
            w="100%"
            textAlign="left"
          >
            <Heading fontSize="md">
              For more in depth info about <br /> a certain pokemon press <br /> the read more button!
            </Heading>
          </Badge>
        </Box>
      </Center>
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
                                  w="md"
                                  bgColor="orange.200"
                                  borderRadius="lg"
                                  borderWidth="2px"
                                  borderColor="orange.200"
                                  p="10"
                                  justifyContent="center"
                                >
                                  <Center>
                                    <Image
                                      width="50%"
                                      src={pokemon.img}
                                      alt={pokemon.name}
                                    />
                                  </Center>
                                  <Flex direction="row" w="100%">
                                    <Badge>Number:</Badge>
                                    <Text>{pokemon.num}</Text>
                                  </Flex>

                                  <Badge>Name: {pokemon.name}</Badge>
                                  <Badge>
                                    Type: {pokemon.type[0]} {pokemon.type[1]}
                                  </Badge>
                                  <Badge>Height: {pokemon.height}</Badge>
                                  <Badge>Weight: {pokemon.weight}</Badge>
                                  <Badge>
                                    Weaknesses: {pokemon.weaknesses}
                                  </Badge>

                                  <Button onClick={close}> X </Button>
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
