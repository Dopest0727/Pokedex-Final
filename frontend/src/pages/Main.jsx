import { Heading, Box, Container, Text, Image } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../components/NavBar'

const Main = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Box>
          <Heading>Welcome to our Pokedex! Thank you for visiting us</Heading>
          <Text>
            This site is our final project at Technigo Frontend Bootcamp. <br />
            We chose to create a Pokedex app since it appealed to our inner child. 
            This project consists of both Frontend and backend components
            
          </Text>
          <Box borderRadius="md" borderWidth="2px" borderColor="blue.400">
              <Image
                
                src={
                  'https://i.pinimg.com/originals/de/c0/94/dec094c3be140df0137b163fbe7339d2.gif'
                }
              />
            </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Main
