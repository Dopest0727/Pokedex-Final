import React from 'react'
import NavBar from '../components/NavBar'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'


import { CaughtPokemons } from '../components/CaughtPokemon'
//import authenticated from 'reducers/user'

const Profile = () => {
  const username = useSelector(store => store.authenticated.username)
  return (
    <div>
      <NavBar />
      <Box>
      <h1>Hello {username}</h1>
        <CaughtPokemons />
        
      </Box>
    </div>
  )
}

export default Profile