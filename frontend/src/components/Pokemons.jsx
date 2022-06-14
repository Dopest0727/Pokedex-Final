import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Badge,
  Image,
  Stack,
  Flex,
  Center,
  Button,
} from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'

export const Pokemons = (props) => {
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

  const [pokemon, setPokemons] = useState([]);
  let params = useParams();
  useEffect(() => {
    axios
      .get(`https://picopalquelee.herokuapp.com/pokemons`)
      .then((res) => {
        console.log(res)
        setPokemons(res.data.pokemons)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [params.search])

  const navigate = useNavigate()
  const navigateSinglePokemon = () => {
    navigate('/singlepokemon')
  }

  return (
    // POKEMON CONTAINER
    <Box
      w="xs"
      borderWidth="2px"
      borderColor="orange.200"
      borderRadius="md"
      key={pokemon.id}
    >
      <Box>
        <Stack w="100%" display="flex" direction="column" alignItems="center">
          <Box bgColor="orange.100" w="100%" borderRadius="md">
            {' '}
            {/* IMAGE CONTAINER  */}
            <Center>
              <Image
                m="5"
                src={pokemon.img}
                alt={pokemon.name}
                title={pokemon.name}
                borderRadius="md"
              />
            </Center>
          </Box>
          <Flex w="100%" display="flex" direction="column" px="4" py="2">
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
            {/* ID BADGE  */}
            <Badge
              borderRadius="md"
              w="100%"
              textAlign="left"
              bgColor="blue.300"
              color="white"
              py="2"
              px="3"
              mb="2"
            >
              ID: {pokemon.id}
            </Badge>

            <Flex w="100%" display="flex" direction="row">
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
          </Flex>
        </Stack>
      </Box>
    </Box>
  )
}
