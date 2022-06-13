import mongoose from "mongoose"

const PokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },

  
    num: String,
    img: String,
    type: [String],
    height: String,
    weight: String,
    candy: String,
    candy_count: Number,
    egg: String,
    spawn_chance: Number,
    avg_spawns: Number,
    spawn_time: String,
    multipliers: [Number],
    weaknesses: [String],
    next_evolution: [Object]
})



const Pokemon = mongoose.model("Pokemon", PokemonSchema)

export default Pokemon