import React from 'react'
import {
  Container,
  Box,
  Text,
  Badge,
  Image,
  Stack,
  Flex,
  Spacer,
  Button

} from '@chakra-ui/react'
//import { getPokemons, getPokemonData } from '../utils/API'
import { useNavigate } from 'react-router-dom'

export const Pokemons = (props) => {
  const pokemon = props.pokemon
  const navigate = useNavigate()
  const navigateSinglePokemon = () => {
    navigate('/singlepokemon')
  }

  return (
    <Container m="5">
      <Box
        maxW="sm"
        p="5"
        borderWidth="2px"
        borderColor="blue.400"
        borderRadius="md"
        key={pokemon.id}
      >
        <Box>
        
          <Stack w="100%" display="flex" direction="column" alignItems="center">
            <Image src={pokemon.img} alt={pokemon.name} title={pokemon.name} />
            <Text>{pokemon.name}</Text>
            <Flex w="100%" display="flex" direction="column">
              <Badge
                borderRadius="md"
                w="100%"
                textAlign="left"
                colorScheme="twitter"
                py="2"
                px="4"
                my="1"
              >
                ID: {pokemon.id}
              </Badge>
              <Flex w="100%" display="flex" direction="row" spacing={1}>
                <Badge
                  borderRadius="md"
                  w="48%"
                  textAlign="left"
                  colorScheme="twitter"
                  py="2"
                  px="4"
                  my="1"
                >
                  {pokemon.type[0]}
                </Badge>
                <Spacer />
                <Badge
                  borderRadius="md"
                  w="50%"
                  textAlign="left"
                  colorScheme="twitter"
                  py="2"
                  px="4"
                  my="1"
                >
                  {pokemon.type[1]}
                </Badge>
              </Flex>
            </Flex>
          </Stack>
          <Button w="100%" variant="solid" onClick={navigateSinglePokemon}>
                    Read more
                  </Button>
        </Box>
      </Box>
    </Container>
  )
}
