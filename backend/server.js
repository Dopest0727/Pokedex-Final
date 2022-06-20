import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import allEndpoints from 'express-list-endpoints'
import bcrypt from 'bcrypt'

import User from './models/User.js'
import Pokemon from './models/Pokemon.js'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/pokedex-api'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header("Authorization");
  try {
    const user = await User.findOne({ accessToken: accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({
        response: "Please log in",
        success: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false,
    });
  }
};

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(allEndpoints(app))
})


app.get("/users", async (req, res) => {
  const users = await User.find({})
  .sort({createdAt: 'desc'})
  res.status(201).json(users)
});

//POKEMONS ENDPOINTS


app.get('/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.find({})
    res.status(200).json({ pokemons })
  } catch (error) {
    res.status(400).json({ error: 'Not found' })
  }
})


app.get('/pokemons/:num', async (req, res) => {
  const { num } = req.params
  try {
    const singlePokemon = await Pokemon.findOne({ num: num })
      res.status(200).json({ singlePokemon })
  } catch (error) {
    res.status(400).json({ error: 'Not found'})
  }
})

/* authenticateUser */
app.post('/pokemons/:num/', authenticateUser)

app.post('/pokemons/:num/', async (req, res) => {
  const { num } = req.params
  const user = await User.findOne({ accessToken: req.headers.accessToken})
  user.listOfCaughtPokemons.push(num)
})

app.get('/pokemons/name/:name', async (req, res) => {
  const { name } = req.params

  try {
    const pokemonName = await Pokemon.findOne({ name: name })
    if (pokemonName) {
      res.status(200).json({
        response: pokemonName,
        success: true,
      })
    } else {
      res.status(404).json({
        response: 'No data found',
        success: false,
      })
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false,
    })
  }
})



//USER ENDPOINTS
// app.post('/caughtpokemon', async (req, res) => {
//   const { userId, pokemonId } = req.body  
//   try {

//     const user = await User.findOne({ _id: userId })
//     await user.caughpokemon.push(pokemonId).save()
    
//   }
// USER

app.post('/signup', async (req, res) => {
  const { username, password } = req.body
  try {
    const salt = bcrypt.genSaltSync()
    //
    if (password.length < 8) {
      res.status(400).json({
        response: 'Password must contain at least 8 characters long',
        success: false,
      })
    } else {
      const newUser = await new User({
        username: username,
        password: bcrypt.hashSync(password, salt),
      }).save()
      res.status(201).json({
        response: {
          username: newUser.username,
          accessToken: newUser.accessToken,
          userId: newUser._id,
        },
        success: true,
      })
    }
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({
        response: 'Username is already taken. Please enter new username.',
        success: false,
      })
    } else {
      console.log(error)
      res.status(400).json({
        response: error,
        success: false,
      })
    }
  }
})

app.post('/signin', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        success: true,
        response: {
          username: user.username,
          accessToken: user.accessToken,
          userId: user._id,
        },
      })
    } else {
      res.status(400).json({
        response: "Username and password don't match.",
        success: false,
      })
    }
  } catch (error) {
    res.status(400).json({
      response: error,
      success: false,
    })
  }
})

app.get("/main", (req, res) => {
  if (main) {
    res.status(200).json({ success: true, response: main });
  } else {
    res.status(400).json({
      response: "Not found",
      success: false,
    });
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})