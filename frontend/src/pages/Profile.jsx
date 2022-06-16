import React from 'react'
import NavBar from '../components/NavBar'
import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'




const Profile = () => {
  const username = useSelector(store => store.authenticated.username)
  return (
    <div>
      <NavBar />
      <Box>
      <h1>Hello {username}</h1>

      </Box>
    </div>
  )
}

export default Profile