import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Center,
  Box,
} from '@chakra-ui/react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import PokedexCom from '../components/PokedexCom'

const Pokedex = () => {
  const authToken = useSelector((state) => state.authenticated.authToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (!authToken) {
      navigate('/')
    }
  }, [authToken, navigate])

  return (
        <Box>
          <NavBar />
          <Center mb="10">
            <Box>
              <PokedexCom />
            </Box>
          </Center>
          <Footer />
        </Box>
  )
}

export default Pokedex
