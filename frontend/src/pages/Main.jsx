import { Heading, Box, Container, Text, Image, Badge, AspectRatio } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../components/NavBar'

const Main = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Box
          maxW="xl"
          p="8"
          // borderWidth="2px"
          // borderColor="blue.400"
          // borderRadius="md"
        >
          <Box>
            <Badge
              borderRadius="md"
              w="100%"
              textAlign="center"
              colorScheme="twitter"
              py="3"
              px="6"
              my="1"
            >
              <Heading as="h2" size="lg">
                Welcome to our Pokedex! <br />
                Thank you for visiting us
              </Heading>
            </Badge>
            <Text my="5">
              This site is our final project at the Technigo Frontend Bootcamp.
              <br />
              We chose to create a Pokedex app since it appealed to our inner
              child. This project consists of both Frontend and Backend
              technologies and has a user authentication feature.
            </Text>
          </Box>
          <Box borderRadius="md" borderWidth="2px" borderColor="blue.400">
            <AspectRatio ratio={ 4 / 3 }>
            <Image 
              src={
                'https://i.pinimg.com/originals/de/c0/94/dec094c3be140df0137b163fbe7339d2.gif'
              }
            />
            </AspectRatio>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Main
