import mongoose from "mongoose"
import crypto from "crypto"

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  },
  listOfCaughtPokemons: {
    type: Array,
    default: []
  }
  
})

const User = mongoose.model("User", UserSchema)

export default User