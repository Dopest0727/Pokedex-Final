import React from 'react'
import NavBar from '../components/NavBar'
import { Box } from '@chakra-ui/react'

import { CaughtPokemons } from '../components/CaughtPokemon'
//import authenticated from 'reducers/user'

const Profile = () => {
  return (
    <div>
      <NavBar />
      <Box>
        <CaughtPokemons />
      </Box>
    </div>
  )
}

export default Profile