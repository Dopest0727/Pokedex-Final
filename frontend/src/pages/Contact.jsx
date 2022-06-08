import { Heading, Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../components/NavBar'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Box>
          <Heading>Contact</Heading>
          <Text>socialmedia </Text>
        </Box>
        <Box>
        <Heading>About</Heading>
          <Text>Blabla</Text>
        </Box>
      </Container>
    </div>
  )
}

export default Contact
