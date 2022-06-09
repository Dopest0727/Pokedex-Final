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
        <ButtonGroup py="1" w="100%" colorScheme="twitter" spacing="1">
          <Button w="100%" variant="solid" onClick={navigateSinglePokemon}>
            Read more
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}
