import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { authenticated } from '../reducers/auth'
import { Container, Text, Input, Button } from '@chakra-ui/react'

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordTwo, setPasswordTwo] = useState()
  const [error, setError] = useState('')
  const dispatch = useDispatch()

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
      <Container>
        <Text textAlign="center">New Arrivals</Text>
        <Input
          required={true}
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          required={true}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Input
          type="password"
          required={true}
          placeholder="confrim password"
          onChange={(e) => setPasswordTwo(e.target.value)}
        />
        <Button onClick={onSignUp}>REGISTER IF YOU MUST</Button>
        <Button onClick={() => navigate('/signin')}>
          Already registered? Login here
        </Button>
      </Container>
    </>
  )
}

export default Signup
