import express from 'express'
import pokemonsData from './pokemonsData.json'
import crypto from 'crypto'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/pokedex-api'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const User = mongoose.model('User', {
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlenght: 3,
    maxlenght: 30,
  },
  password: {
    type: String,
    required: true,
    minlenght: 5,
    maxlenght: 25,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
  profileImg: {
    type: String,
  },
  info: {
    type: String,
    default: '',
  },
  memberSince: {
    type: Date,
    default: Date.now,
  },
  PokemonsSeen: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: [],
      ref: 'Pokemons',
    },
  ],
})

const Pokemons = mongoose.model('Pokemons', {
  name: String,
  image: String,
  description: String,
})

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization')
  try {
    const user = await User.findOne({ accessToken })
    if (user) {
      req.user = user
      next()
    } else {
      res.status(401).json({ success: false, message: 'Not authorized' })
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error })
  }
}

const PORT = process.env.PORT || 8080
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

app.get('/pokemons', (req, res) => {
    res.json(pokemonsData)
})

app.get('/pokemons/:id', (req, res) => {
    const { id } = req.params
    const pokemon = pokemonsData.find(item => item.id === +id)
    if (!pokemon) {
      res.status(404).send('No pokemon found with this ID')
    } else {
      res.json(pokemon)
    }
  })

app.get('pokemons/')

// app.get('/pokemons', authenticateUser)
// app.get('/pokemons', async (req, res) => {
//   const { pokemonsearch } = req.query
//   try {
//     let allPokemons = await Pokemons.find().sort({ name: 1 })
//     if (pokemonsearch) {
//       allPokemons = allPokemons.filter((Pokemons) =>
//         Pokemons.name.toLowerCase().includes(pokemonsearch.toLowerCase())
//       )
//       res.json(allPokemons)
//     } else {
//       res.json(allPokemons)
//     }
//   } catch (error) {
//     res.status(400).json({ success: false, message: 'Invalid request', error })
//   }
// })

// app.get('/pokemons/:_id', authenticateUser)
// app.get('/pokemons/:_id', async (req, res) => {
//   const { _id } = req.params
//   try {
//     if (_id) {
//       const pokemonPage = await Pokemons.findById(_id)
//       res.json(pokemonPage)
//     } else {
//       res.status(404).json({ error: 'Not found' })
//     }
//   } catch (error) {
//     res.status(400).json({ error: 'Invalid request' })
//   }
// })

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
