import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup'
import axios from 'axios'
import {
  Grid,
  Center,
  Box,
  useBreakpointValue,
  Input,
  Image,
  Stack,
} from '@chakra-ui/react'

import Loader from '../components/Loader'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BadgeContainer from '../components/BadgeContainer'
import BadgeContainer2 from '../components/BadgeContainer2'
import BoxesStarter from '../components/BoxesStarter'
import PrimaryButton from '../components/PrimaryButton'
import FlexContainer from '../components/FlexContainer'

const Pokedex = () => {
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const authToken = useSelector((state) => state.authenticated.authToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) {
      navigate('/')
    }
  }, [authToken, navigate])

  useEffect(() => {
    axios
      .get(`https://picopalquelee.herokuapp.com/pokemons`)
      .then((res) => {
        setPokemons(res.data.pokemons)
        setLoading(false)
      })
      .catch((err) => {})
  }, [])

  const [query, setQuery] = useState('')
  const h = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
  })

  const backgrounds = {
    Normal: '#A8A878',
    Ground: '#E0C068',
    Fighting: '#C02038',
    Poison: '#A040A0',
    Flying: '#A890F0',
    Ghost: '#705898',
    Dragon: '#7038F8',
    Psychic: '#F85888',
    Grass: '#78C850',
    Bug: '#A8B820',
    Rock: '#B8A038',
    Water: '#6890F0',
    Fire: '#F08030',
    Ice: '#98D8D8',
    Electric: '#F8D030',
  }

  return (
    <>
      {!loading ? (
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
                      <BoxesStarter key={pokemon._id}>
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
                          <FlexContainer direction="column">
                            <BadgeContainer2 bgColor="blue.300">
                              {pokemon.name}
                            </BadgeContainer2>
                            <Popup
                              trigger={<PrimaryButton>Read more</PrimaryButton>}
                              modal
                              nested
                            >
                              {(close) => (
                                <Box>
                                  <BoxesStarter p="10" justifyContent="center">
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
                                      <BadgeContainer bgColor="blue.800">
                                        Number: {pokemon.num}
                                      </BadgeContainer>
                                      <BadgeContainer bgColor="blue.700">
                                        Name: {pokemon.name}
                                      </BadgeContainer>
                                      <BadgeContainer bgColor="blue.600">
                                        Type: {pokemon.type[0]}{' '}
                                        {pokemon.type[1]}
                                      </BadgeContainer>
                                      <BadgeContainer bgColor="blue.500">
                                        Height: {pokemon.height}
                                      </BadgeContainer>
                                      <BadgeContainer bgColor="blue.400">
                                        Weight: {pokemon.weight}
                                      </BadgeContainer>
                                      <BadgeContainer bgColor="blue.300">
                                        Weaknesses: {pokemon.weaknesses[0]}{' '}
                                        {pokemon.weaknesses[1]}
                                      </BadgeContainer>
                                    </Stack>
                                    <PrimaryButton mt="4" onClick={close}>
                                      Close
                                    </PrimaryButton>
                                  </BoxesStarter>
                                </Box>
                              )}
                            </Popup>
                          </FlexContainer>
                          
                          <FlexContainer direction="row">
                            {pokemon.type.map((type) => (
                              <BadgeContainer2
                                bgColor={backgrounds[type]}
                                key={type}
                              >
                                {type}
                              </BadgeContainer2>
                            ))}
                          </FlexContainer>
                        </Stack>
                      </BoxesStarter>
                    )
                  })}
              </Grid>
            </Box>
          </Center>
          <Footer />
        </Box>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  )
}

export default Pokedex
