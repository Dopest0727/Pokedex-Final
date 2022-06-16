import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        //console.log(res)
        setPokemons(res.data.pokemons)
      })
      .catch((err) => {
        //console.log(err)
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
      {/* <Center>
        <Box>
          <Badge
            borderRadius="md"
            textAlign="center"
            colorScheme="twitter"
            py="3"
            px="6"
          >
            <Heading fontSize="xl">
              For more in depth info about a certain pokemon press the name of
              said pokemon!
            </Heading>
          </Badge>
        </Box>
      </Center> */}
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
                    borderColor="orange.200"
                    borderRadius="md"
                    key={pokemon._id}
                  >
                    <Box>
                      <Stack
                        w="100%"
                        display="flex"
                        direction="column"
                        alignItems="center"
                      >
                        <Box bgColor="orange.100" w="100%" borderRadius="md">
                          <Center>
                            <Image
                              m="5"
                              src={pokemon.img}
                              alt={pokemon.name}
                              borderRadius="lg"
                            />
                          </Center>
                        </Box>
                        <Flex
                          px="2"
                          w="100%"
                          display="flex"
                          direction="column"
                          blur="0.2"
                        >
                          {/*    {pokemon.next_evolution.map((next_evolution) => (
                            <></>
                          ))} */}

                          <Popup
                            trigger={
                              <Button
                                bgColor="orange.300"
                                mb="2"
                                w="100%"
                                color="white"
                                variant="solid"
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
                                  backgroundColor="white"
                                  border="3px solid orange"
                                  padding="30px"
                                  justifyContent="center"
                                >
                                  <Button onClick={close}> X </Button>
                                  <Image width="100%" src={pokemon.img} alt={pokemon.name}/>
                                  <h1>Number: {pokemon.num}</h1>
                                  <h1>Name: {pokemon.name}</h1>
                                  <h1>Type: {pokemon.type}</h1>
                                  <h1>Height: {pokemon.height}</h1>
                                  <h1>Weight: {pokemon.weight}</h1>
                                  <h1>Weaknesses: {pokemon.weaknesses}</h1>
                                  <h1></h1>
                                </Box>
                              </Box>
                            )}
                          </Popup>
                          <Link to={`/pokemons/${pokemon.num}`}>
                            <Button
                              bgColor="orange.300"
                              mb="2"
                              w="100%"
                              color="white"
                              variant="solid"
                            >
                              {pokemon.name}
                            </Button>
                          </Link>
                          <Badge
                            borderRadius="md"
                            w="100%"
                            textAlign="left"
                            bgColor="blue.300"
                            color="white"
                            py="2"
                            px="3"
                          >
                            ID: {pokemon.id}
                          </Badge>
                        </Flex>
                        <Flex w="100%" display="flex" direction="row" px="2">
                          {pokemon.type.map((type) => (
                            <Badge
                              borderRadius="md"
                              w="33%"
                              textAlign="center"
                              color="white"
                              py="2"
                              px="3"
                              mb="2"
                              mr="1"
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
