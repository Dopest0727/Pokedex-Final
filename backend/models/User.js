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
  // caughtPokemon: {
  //   type: mongoose.Schema.Types.ObjectId, 
  //   default: [],
  //   ref: 'Pokemon'
  // },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString("hex")
  }
})

const User = mongoose.model("User", UserSchema)

export default User