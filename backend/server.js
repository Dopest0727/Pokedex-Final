import express from 'express'
import pokemonsData from './pokemonsData.json'
import crypto from 'crypto'
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

// app.get('/pokemons', authenticateUser) UNCOMMENT WHEN USERAUTHENTICATION IS SET UP
app.get('/pokemons', async (req, res) => {
  try {
    if (!pokemonsData) {
      res.status(404).send('No data to show')
    } else {
      res.json(pokemonsData)
    }
  } catch (error) {
    res.status(400).json({ error: 'Not found' })
  }
})

// app.get('/pokemons/:id', authenticateUser) UNCOMMENT WHEN USERAUTHENTICATION IS SET UP
app.get('/pokemons/:id', async (req, res) => {
  const { id } = req.params
  const pokemon = pokemonsData.find((item) => item.id === +id)
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

app.get('/users', async (req, res) => {
  const { useraccount } = req.query
  try {
    let allUsers = await User.find({}, { password: 0, accessToken: 0 }).sort({
      PokemonsSeen: -1,
    })
    let topUsers = await User.find({}, { password: 0, accessToken: 0 }).sort({
      PokemonsSeen: -1,
    })
    if (useraccount) {
      allUsers = allUsers.filter((user) =>
        user.username.toLowerCase().includes(useraccount.toLowerCase())
      )
      res.json(allUsers)
    } else {
      res.json(topUsers)
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error })
  }
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body
  try {
    const salt = bcrypt.genSaltSync()
    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt),
    }).save()
    res.json({
      success: true,
      userID: newUser._id,
      user: newUser.username,
      accessToken: newUser.accessToken,
    })
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({
        success: false,
        message: 'The username you have chosen is already taken.',
        error,
      })
    } else {
      res.status(400).json({
        success: false,
        message: 'Oops something is not right, try again.',
        error,
      })
    }
  }
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${PORT}`)
})
