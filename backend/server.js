import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import allEndpoints from 'express-list-endpoints'
import bcrypt from 'bcrypt'

import User from './models/User.js'
import pokedex from './data/pokedex.json'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/pokedex-api'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(allEndpoints(app))
})

// POKEMONS

app.get('/pokemons', async (req, res) => {
  try {
    if (!pokedex) {
      res.status(404).send('No data to show')
    } else {
      res.json(pokedex.pokemon)
    }
  } catch (error) {
    res.status(400).json({ error: 'Not found' })
  }
})

app.get('/pokemons/id/:id', async (req, res) => {
  const { id } = req.params
  const pokemon = pokedex.pokemon.find((item) => item.id === +id)
  try {
    if (!pokemon) {
      res.status(404).send('No pokemon found with this ID')
    } else {
      res.json(pokemon)
    }
  } catch (error) {
    res.status(400).json({ error: 'Not found' })
  }
})

app.get('/pokemons/name/:pokeName', async (req, res) => {
  const { pokeName } = req.params
  const pokemon = pokedex.pokemon.find((item) => item.name === pokeName)
  try {
    if (!pokemon) {
      res.status(404).send('No pokemon found with this name')
    } else {
      res.json(pokemon)
    }
  } catch (error) {
    res.status(400).json({ error: 'Not found' })
  }
})

// USER

app.get('/users', async (req, res) => {
  try {
    const allUsers = await User.find()

    res.status(200).json({
      success: true,
      status_code: 200,
      response: allUsers,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      status_code: 400,
      response: {
        message: 'Bad request.',
        errors: error,
      },
    })
  }
})

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body
  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] })
    const shortPassword = password.length < 10
    const salt = bcrypt.genSaltSync()

    if (existingUser) {
      res.status(400).json({
        status_code: 400,
        success: false,
        response: {
          message: 'Username or email already exists.',
        },
      })
    } else if (shortPassword) {
      res.status(400).json({
        status_code: 400,
        success: false,
        response: {
          message: 'Password must be at least 10 characters long.',
        },
      })
    } else {
      const newUser = await new User({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, salt),
      }).save()

      res.status(201).json({
        success: true,
        status_code: 201,
        response: {
          username: newUser.username,
          email: newUser.email,
          accessToken: newUser.accessToken,
          userId: newUser._id,
        },
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      status_code: 400,
      response: {
        message: 'Unable to create user.',
        errors: error.errors,
      },
    })
  }
})

app.post('/signin', async (req, res) => {
  const { username, email, password } = req.body

  try {
    const user = await User.findOne({ $or: [{ username }, { email }] })

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        status_code: 200,
        response: {
          username: user.username,
          email: user.email,
          accessToken: user.accessToken,
          userId: user._id,
        },
      })
    } else {
      res.status(400).json({
        status_code: 400,
        success: false,
        response: {
          message: 'Username and email and password does not match.',
        },
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      status_code: 400,
      response: {
        message: 'Bad request.',
        errors: error,
      },
    })
  }
})

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization')

  try {
    const user = await User.findOne({ accessToken: accessToken })

    if (user) {
      next()
    } else {
      res.status(401).json({
        success: false,
        status_code: 401,
        response: {
          message: 'You are logged out, please log in.',
        },
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      status_code: 400,
      response: {
        message: 'Bad request.',
        errors: error,
      },
    })
  }
}

app.get('/loggedin', authenticateUser)
app.get('/loggedin', (req, res) => {
  res.status(200).json({
    success: true,
    status_code: 200,
    response: {
      message: 'You are logged in!',
    },
  })
})

app.patch('/profile/:userId/edit', authenticateUser)
app.patch('/profile/:userId/edit', async (req, res) => {
  const { userId } = req.params
  const { email, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    if (email && !password) {
      await User.findByIdAndUpdate(userId, { email })
    } else if (!email && password) {
      await User.findByIdAndUpdate(userId, {
        password: bcrypt.hashSync(password, salt),
      })
    } else {
      await User.findByIdAndUpdate(userId, {
        email,
        password: bcrypt.hashSync(password, salt),
      })
    }

    res.status(200).json({
      success: true,
      status_code: 200,
      response: {
        message: 'User has been updated.',
      },
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      status_code: 400,
      response: {
        message: 'Bad request, could not find and update this user.',
        error: err.errors,
      },
    })
  }
})

app.delete('/profile/:userId/delete', authenticateUser)
app.delete('/profile/:userId/delete', async (req, res) => {
  const { userId } = req.params

  try {
    await User.findByIdAndDelete(userId)

    res.status(200).json({
      success: true,
      status_code: 200,
      response: {
        message: 'User has been deleted.',
      },
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      status_code: 400,
      response: {
        message: 'Bad request, could not find and delete this user.',
        error: err.errors,
      },
    })
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
