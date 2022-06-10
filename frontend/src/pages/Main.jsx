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
  ListIcon,
  List,
} from '@chakra-ui/react'
import React from 'react'
import { FcNext } from 'react-icons/fc'
import NavBar from '../components/NavBar'

const Main = () => {
  return (
    <div>
      <NavBar />
      <Flex direction="row" >
        <Container mr="10">
          <Box maxW="xl" py="8">
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
                  username
                </Heading>
              </Badge>
              <Text my="5">
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
        <Container ml="10">
          <Box maxW="xl" py="5">
          <Badge
                w="100%"
                textAlign="left"
                bgColor="white"
                color="blue.400"
                py="3"
                my="1"
              >
          <Text fontSize='xl' noOfLines={2}>
            In this Pokedex you have access to the <br />following features!
          </Text>
          </Badge>
          <List spacing={5} my="5">
            <ListItem>
              <ListIcon as={FcNext} />
              <Badge py="1" px="3" mr="2" bgColor="blue.400" color="white" borderRadius="xl">Pokedex</Badge>
                Where you can see all the available pokemons and pich the
              ones you have caught.
            </ListItem>
            <ListItem>
              <ListIcon as={FcNext} />
              <Badge py="1" px="3" mr="2" bgColor="blue.400" color="white" borderRadius="xl">Profile</Badge>
               Where you can see all the pokemons you,ve caught and
              display your user information.
            </ListItem>
            <ListItem>
              <ListIcon as={FcNext} />
              <Badge py="1" px="3" mr="2" bgColor="blue.400" color="white" borderRadius="xl"> About Us</Badge>
              A page about the creator of the app and how to contact
              us.
            </ListItem>
          </List>
          </Box>
          <Box maxW="xl" py="8">
          <Badge
                w="100%"
                textAlign="left"
                bgColor="white"
                color="blue.400"
                py="3"
                my="1"
              >
          <Text fontSize='xl' noOfLines={2}>
            This page is made using the below listed technologies
          </Text>
          </Badge>
          <Flex>
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
          </Flex>
          </Box>
        </Container>
      </Flex>
    </div>
  )
}

export default Main
