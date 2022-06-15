import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  Button,
  Input,
  Alert,
  AlertTitle,
  AlertIcon,
  Image,
  FormControl,
  Flex,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react'

import { authenticated } from '../reducers/auth'
import pokebg from '../IMG/pokebg.jpg'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authToken = useSelector((state) => state.authenticated.authToken)

  const pokecard = {
    imageAlt: 'Picture of Pokeball',
    welcome: 'Welcome back',
    phrase: "Ready to catch 'em all?",
  }

  useEffect(() => {
    if (authToken) {
      navigate('/main')
    }
  }, [authToken])

  const userLogin = async (options) => {
    try {
      const response = await fetch(
        'https://picopalquelee.herokuapp.com/signin',
        options
      )
      const data = await response.json()
      if (data.success) {
        console.log(data)
        batch(() => {
          dispatch(authenticated.actions.login(data.response))
          dispatch(authenticated.actions.setError(null))
        })
      } else if (!data.success) {
        setError(data.response)
        console.log(error)
        batch(() => {
          dispatch(authenticated.actions.setUserId(null))
          dispatch(authenticated.actions.setError(data.response))
          dispatch(authenticated.actions.logout())
        })
      }
    } catch (error) {
      console.log(error)
    }
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
        <Box py="4">
          <FormControl isRequired>
            <Input
              mb="3"
              id="username"
              //value={username}
              placeholder="Username"
              _placeholder={{ opacity: 1, color: 'blue.400' }}
              required={true}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="true"
            />
            <Input
              id="password"
              //value={password}
              placeholder="Password"
              _placeholder={{ opacity: 1, color: 'blue.400' }}
              type="password"
              required={true}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
        </Box>
        <Box>
          {error.length > 0 && (
            <Alert status="info">
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
        </Box>
        <Box pt="4">
          <Stack
            w="100%"
            display="flex"
            direction="row"
            spacing={4}
            alignItems="center"
          >
            <Flex w="100%">
              <ButtonGroup w="100%" colorScheme="twitter" spacing="1">
                <Button
                  w="100%"
                  variant="solid"
                  onClick={() =>
                    userLogin({
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ username, password }),
                    })
                  }
                >
                  Sign In
                </Button>
                <Button
                  w="100%"
                  variant="outline"
                  onClick={() => navigate('/')}
                >
                  Go back
                </Button>
              </ButtonGroup>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}

export default SignIn
