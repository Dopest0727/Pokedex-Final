import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, Button, Input } from '@chakra-ui/react'

import { authenticated } from 'reducers/auth'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authToken = useSelector((state) => state.authenticated.authToken)

  // Alternative to navigating to home instead of putting it inside the function (See Signup.jsx)
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
    <Container>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          id="username"
          value={username}
          required={true}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="true"
        />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          onClick={() =>
            userLogin({
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ username, password }),
            })
          }
        >
          LOGIN... ?
        </Button>

        <Button onClick={() => navigate('/signup')} color="secondary">
          Are you new? Register here
        </Button>
      </form>
    </Container>
  )
}

export default SignIn
