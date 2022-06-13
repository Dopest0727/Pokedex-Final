import React, {useState, useEffect} from 'react'
import {
  Box,
  Badge,
  Image,
  Stack,
  Flex,
  Center,
  Button,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { getPokemons } from '../utils/utils';

export const Pokemons = (props) => {
  const backgrounds = {
    //BLACKALPHA CHECK
    Normal: 'blackAlpha.400', // a8a878
    Ground: 'blackAlpha.500', // e0c068
    Fighting: 'blackAlpha.600', // c02038
    //PURPLR CHECK
    Poison: 'purple.300', // a040a0
    Flying: 'purple.400', // a890f0
    Ghost: 'purple.500', // 705898
    Dragon: 'purple.300', // 7038f8
    //PINK CHECK
    Psychic: 'pink.300', // f85888
    //GREEN CHECK
    Grass: 'green.300', // 78c850
    Bug: 'green.500', // a8b820
    //GRAY CHECK
    Rock: 'gray.500', // b8a038
    //BLUE CHECK
    Water: 'blue.500', // 6890f0
    //RED CHECK
    Fire: 'red.400', // f08030
    //TEAL CHECK
    Ice: 'teal.400', // 98d8d8
    //YELLOW CHECK
    Electric: 'yellow.500', // f8d030  
  }


  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  console.log(pokemons.response);
    
  
    
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
      key={pokemons.id}
    >
      <Box>
        <Stack w="100%" display="flex" direction="column" alignItems="center">
          <Box bgColor="orange.100" w="100%" borderRadius="md"> {/* IMAGE CONTAINER  */}
            <Center>
              <Image
                m="5"
                src={pokemons.response.img}
                alt={pokemons.response.name}
                title={pokemons.response.name}
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
              {pokemons.response.name}
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
              ID: {pokemons.response.id}
            </Badge>
            <Flex w="100%" display="flex" direction="row">
              {pokemons.type.map((type) => (
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


