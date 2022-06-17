import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FcNext } from 'react-icons/fc'
import {
  Heading,
  Box,
  Container,
  Text,
  Image,
  Badge,
  AspectRatio,
  Flex,
  ListItem,
  useBreakpointValue,
  ListIcon,
  List,
} from '@chakra-ui/react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Main = () => {
  const authToken = useSelector((state) => state.authenticated.authToken)
  const username = useSelector((store) => store.authenticated.username)
  const navigate = useNavigate()
  const flex = useBreakpointValue({
    base: 'column',
    md: 'column',
    lg: 'column',
  })

  useEffect(() => {
    if (!authToken) {
      navigate('/')
    }
  }, [authToken, navigate])

  return (
    <>
      <NavBar />
      <Flex direction={flex}>
        <Container>
          <Box maxW="xl" py="0">
            <Box>
              <Badge
                borderRadius="md"
                w="100%"
                textAlign="center"
                colorScheme="twitter"
                py="3"
                px="6"
                mb="2"
              >
                <Heading fontSize="xl">
                  Welcome to our Pokedex <br />
                  {username}!
                </Heading>
              </Badge>
              <Text my="10">
                This site is our final project at the Technigo Frontend
                Bootcamp.
                <br />
                We chose to create a Pokedex app since it appealed to our inner
                child. This project consists of both Frontend and Backend
                technologies and has a user authentication feature.
              </Text>
            </Box>
            <Box
              borderRadius="md"
              borderWidth="2px"
              borderColor="blue.400"
              maxW="xl"
            >
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={
                    'https://i.pinimg.com/originals/de/c0/94/dec094c3be140df0137b163fbe7339d2.gif'
                  }
                />
              </AspectRatio>
            </Box>
          </Box>
        </Container>
        <Container>
          <Box maxW="xl" py="5">
            <Badge
              w="100%"
              textAlign="left"
              bgColor="white"
              color="blue.400"
              py="2"
              my="2"
            >
              <Text fontSize="lg">
                In this Pokedex you have access <br />
                to the following features!
              </Text>
            </Badge>
            <List spacing={5} mt="3" mb="5">
              <ListItem>
                <ListIcon as={FcNext} />
                <Badge
                  py="1"
                  px="3"
                  mr="2"
                  bgColor="blue.400"
                  color="white"
                  borderRadius="xl"
                >
                  Pokedex
                </Badge>
                Where you can see all the available pokemons and pich the ones
                you have caught.
              </ListItem>
              <ListItem>
                <ListIcon as={FcNext} />
                <Badge
                  py="1"
                  px="3"
                  mr="2"
                  bgColor="blue.400"
                  color="white"
                  borderRadius="xl"
                >
                  Profile
                </Badge>
                Where you can see all the pokemons you,ve caught and display
                your user information.
              </ListItem>
              <ListItem>
                <ListIcon as={FcNext} />
                <Badge
                  py="1"
                  px="3"
                  mr="2"
                  bgColor="blue.400"
                  color="white"
                  borderRadius="xl"
                >
                  {' '}
                  About Us
                </Badge>
                A page about the creator of the app and how to contact us.
              </ListItem>
            </List>
          </Box>
          <Box maxW="xl" pb="10">
            <Badge
              w="100%"
              textAlign="left"
              bgColor="white"
              color="blue.400"
              py="3"
              my="1"
            >
              <Text fontSize="lg">
                This page is made using the <br />
                below listed technologies
              </Text>
            </Badge>
            <List spacing={4} my="5">
              <ListItem>
                <ListIcon as={FcNext} />
                React
              </ListItem>
              <ListItem>
                <ListIcon as={FcNext} />
                Redux
              </ListItem>
              <ListItem>
                <ListIcon as={FcNext} />
                Chakra UI
              </ListItem>
              <ListItem>
                <ListIcon as={FcNext} />
                Node JS
              </ListItem>
              <ListItem>
                <ListIcon as={FcNext} />
                Mongo DB
              </ListItem>
              <ListItem>
                <ListIcon as={FcNext} />
                And many more!
              </ListItem>
            </List>
          </Box>
        </Container>
      </Flex>
      <Footer />
    </>
  )
}

export default Main
