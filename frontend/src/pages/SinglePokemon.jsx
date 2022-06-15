import React, { useEffect, useState } from 'react'
import { Button } from '@chakra-ui/react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const SinglePokemon = () => {
  const { num } = useParams()
  const [singlePokemon, setSingelPokemon] = useState([])
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(
          `https://picopalquelee.herokuapp.com/pokemons/${num}`
        )
        setSingelPokemon(data.singlePokemon)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetch()
  }, [])

  return (
    <article>
      <h1>{singlePokemon.num}</h1>
      <h1>{singlePokemon.name}</h1>
      <h1>{singlePokemon.spawn_chance}</h1>
      <h1>{singlePokemon.spawn_time}</h1>
      <h1>{singlePokemon.height}</h1>
      <h1>{singlePokemon.weight}</h1>
      <h1>{singlePokemon.id}</h1>
      <h1>{singlePokemon.candy}</h1>

      <br />

      <Link to={`/pokedex`}>
        <Button>Go back</Button>
      </Link>
    </article>
  )
}

export default SinglePokemon
