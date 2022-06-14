import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Grid,
  Center,
  Box,
  useBreakpointValue,
  Button,
  Input,
  Image,
  List,
  Stack,
  GridItem,
  Badge,
  Flex,
} from '@chakra-ui/react'

import NavBar from '../components/NavBar'
/* import { Pokemons } from '../components/Pokemons'
import { getPokemons } from '../utils/utils' */
import { useNavigate } from 'react-router-dom'

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([])
  const backgrounds = {
    //BLACKALPHA CHECK
    Normal: '#A8A878', // a8a878
    Ground: '#E0C068', // e0c068
    Fighting: '#C02038', // c02038
    //PURPLR CHECK
    Poison: '#A040A0', // #A040A0
    Flying: '#A890F0', // A890F0
    Ghost: '#705898', // #705898
    Dragon: '#7038F8', // #7038F8
    //PINK CHECK
    Psychic: '#F85888', // #F85888
    //GREEN CHECK
    Grass: '#78C850', // #78C850
    Bug: '#A8B820', // #A8B820
    //GRAY CHECK
    Rock: '#B8A038', // #B8A038
    //BLUE CHECK
    Water: '#6890F0', // #6890F0
    //RED CHECK
    Fire: '#F08030', // #F08030
    //TEAL CHECK
    Ice: '#98D8D8', // #98D8D8
    //YELLOW CHECK
    Electric: '#F8D030', // #F8D030
  }

  useEffect(() => {
    axios
      .get('https://picopalquelee.herokuapp.com/pokemons')
      .then((res) => {
        console.log(res)
        setPokemons(res.data.pokemons)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const navigate = useNavigate()
  const navigateSinglePokemon = () => {
    navigate('/singlepokemon')
  }

  const [query, setQuery] = useState('')
  const h = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  })
  return (
    <Box>
      <NavBar />
      <Input
        my="5"
        borderWidth="2px"
        borderColor="orange.200"
        placeholder="Search for your favorite pokemon!"
        onChange={(event) => setQuery(event.target.value)}
      />
      <Grid templateColumns={h} gap={6} >
        {pokemons
          .filter((pokemons) => {
            if (query === '') {
              return pokemons
            } else if (
              pokemons.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return pokemons
            }
          })
          .map((pokemon) => {
            return (
              <Flex key={pokemon.id} >
                <Box bgColor="orange.100" w="100%" borderRadius="md">
                  <Stack
                    backgroundColor="gray.200"
                    display="flex"
                    direction="column"
                    alignItems="center"
                  >
                    <Image
                      m="5"
                      src={pokemon.img}
                      alt={pokemon.name}
                      title={pokemon.name}
                    />
                  </Stack>
                  <Button
                    bgColor="orange.300"
                    mb="2"
                    w="100%"
                    color="white"
                    variant="solid"
                    onClick={navigateSinglePokemon}
                  >
                    {pokemon.name}
                  </Button>
                  {pokemon.type.map((type) => (
                    <Stack key={type} direction={['column', 'row']} spacing='24px'>
                      <Badge
                        
                        borderRadius="md"
                        w="50%"
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
                    </Stack>
                  ))}
                </Box>
              </Flex>
            )
          })}
      </Grid>
    </Box>
  )
}

export default Pokedex

/*   <div>
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>{pokemon.name}</li>
          ))}
        </ul>
      </div> */

/* <Center my="10">
        <Box
          w="xs"
          borderWidth="2px"
          borderColor="orange.200"
          borderRadius="md"
          key={pokemons.id}
        >
          
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
                } else if (
                  pokemons.name.toLowerCase().includes(query.toLowerCase())
                ) {
                  return pokemons
                }
              })
              .map((pokemon) => {
                return (
                  <Flex
                    w="100%"
                    display="flex"
                    direction="row"
                    key={pokemon.id}
                  >
                    <li key={pokemon.id}>{pokemon.name}</li>
                    <img src={pokemon.img} />

                    <Badge
                      borderRadius="md"
                      w="33%"
                      textAlign="center"
                      color="white"
                      py="2"
                      px="3"
                      mb="2"
                      mr="1"
                      bgColor={backgrounds[pokemon.type]}
                      key={pokemon.type}
                    ></Badge>
                     <Pokemons key={pokemon.id} pokemon={pokemons.pokemon} /> 
                  </Flex>
                )
              })}
          </Grid>
           <Flex w="100%" display="flex" direction="row" key={pokemons.id}>
              {pokemons.map((type) => (
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
        </Box>
      </Center> */
