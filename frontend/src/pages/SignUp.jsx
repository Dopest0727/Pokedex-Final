import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authenticated } from '../reducers/auth'
import {
  Container,
  Input,
  Button,
  Alert,
  AlertTitle,
  AlertIcon,
  Box,
  Image,
  FormControl,
  Flex,
  ButtonGroup,
  Stack,
} from '@chakra-ui/react'
import pokebg from '../IMG/pokebg.jpg'

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordTwo, setPasswordTwo] = useState()
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  const pokecard = {
    imageAlt: 'Picture of Pokeball',
    welcome: 'Welcome back',
    phrase: "Ready to catch 'em all?",
  }

  const registerUser = async (options) => {
    try {
      const response = await fetch(
        'https://picopalquelee.herokuapp.com/signup',
        options
      )
      const data = await response.json()
      if (data.success) {
        dispatch(authenticated.actions.login(data.response))
        navigate('/main')
      } else if (!data.success) {
        console.log(data)
        setError(data.response)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onSignUp = () => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
    if (password !== passwordTwo) {
      setError('Passwords do not match.')
    } else if (password.match(passwordPattern) && username.length > 4) {
      registerUser({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
    } else {
      setError(
        'Password needs to be between 8 and 30 characters and contain at least one uppercase letter, one lowercase letter, one special symbol, and one number.'
      )
    }
  }

  return (
    <>
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
                //value={username}
                required={true}
                placeholder="Username"
                _placeholder={{ opacity: 1, color: 'blue.400' }}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="true"
              />
              <Input
                mb="3"
                //value={password}
                type="password"
                placeholder="Password"
                _placeholder={{ opacity: 1, color: 'blue.400' }}
                required={true}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Input
                type="password"
                required={true}
                placeholder="Confrim password"
                _placeholder={{ opacity: 1, color: 'blue.400' }}
                onChange={(e) => setPasswordTwo(e.target.value)}
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
                  <Button w="100%" variant="solid" onClick={onSignUp}>
                    Sign Up
                  </Button>
                  <Button
                    w="100%"
                    variant="outline"
                    onClick={() => navigate('/')}
                  >
                    Go Back
                  </Button>
                </ButtonGroup>
              </Flex>
            </Stack>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Signup
