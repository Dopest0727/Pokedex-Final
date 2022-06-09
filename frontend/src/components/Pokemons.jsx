import React from 'react'
import {
  Box,
  Text,
  Badge,
  Image,
  Stack,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Pokemons = (props) => {
  const backgrounds = {
    Fire: 'red', // f08030
    Bug: 'green', // a8b820
    Poison: 'purple', // a040a0
    Water: 'blue', // 6890f0
    Normal: 'blackAlpha', // a8a878
    Grass: 'green', // 78c850
    Electric: 'yellow', // f8d030
    Psychic: 'pink', // f85888
    Rock: 'gray', // b8a038
    Ground: 'blackAlpha', // e0c068
    Fighting: 'blackAlpha', // c02038
    Flying: 'purple', // a890f0
    Ice: 'teal', // 98d8d8
    Fairy: 'pink', // ee99ac
    Steel: 'gray', // b8b8d0
    Ghost: 'purple', // 705898
    Dragon: 'purple', // 7038f8
    Dark: 'blackAlpha', //705848
  }

  const pokemon = props.pokemon
  const navigate = useNavigate()
  const navigateSinglePokemon = () => {
    navigate('/singlepokemon')
  }

  return (
    <Box
      w="xs"
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
            {pokemon.type.map((type) => (
                
                <Badge
                key={type}
                  borderRadius="md"
                  w="100%"
                  textAlign="left"
                  colorScheme={backgrounds[type]}
                  py="2"
                  px="4"
                  my="1"
                >
                  {type}
                </Badge>
              
            ))}
            </Flex>
          </Flex>
        </Stack>
        <ButtonGroup py="1" w="100%" colorScheme="twitter" spacing="1">
          <Button w="100%" variant="solid" onClick={navigateSinglePokemon}>
            Read more
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
