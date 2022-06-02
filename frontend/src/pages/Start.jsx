import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  Image,
  ButtonGroup,
  Flex,
  Heading,
  Text,
  Badge,
  Stack,
  Button,
  Spacer,
} from '@chakra-ui/react'
import pokebg from '../IMG/pokebg.jpg'

const Start = () => {
  const navigate = useNavigate()
  const navigateSignUp = () => {
    navigate('/signup')
  }
  const navigateSignIn = () => {
    navigate('/signin')
  }
  const pokecard = {
    imageAlt: 'Picture of Pokeball',
    welcome: 'Welcome back',
    phrase: "Ready to catch 'em all?",
  }

  return (
    <Container centerContent my="10%">
      <Box
        maxW="xl"
        p="8"
        borderWidth="2px"
        borderColor="blue.400"
        borderRadius="md"
      >
        <Image borderRadius="md" src={pokebg} alt={pokecard.imageAlt} />
        <Box py="2">
          <Badge
            borderRadius="md"
            w="100%"
            textAlign="center"
            colorScheme="twitter"
            py="3"
            px="6"
            my="1"
          >
            <Heading>{pokecard.welcome}</Heading>
            <Text>{pokecard.phrase}</Text>
          </Badge>
        </Box>
        <Box>
          <Stack
            w="100%"
            display="flex"
            direction="row"
            spacing={4}
            alignItems="center"
          >
            <Flex w="100%">
              <ButtonGroup w="100%" colorScheme="twitter" spacing="1">
                <Button w="50%" variant="solid" onClick={navigateSignIn}>
                  Sign in
                </Button>
                <Spacer />
                <Button w="50%" variant="outline" borderWidth="1px" onClick={navigateSignUp}>
                  Sign up
                </Button>
              </ButtonGroup>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default Start
