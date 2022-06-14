import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const SinglePokemon = () => {
//   let params = useParams()
//   const [pokemons, setPokemons] = useState([])
//   const fetchSinglePokemon = async () => {
//     const data = await fetch(`http://localhost:8080/pokemons/${params.search}`)
//     const pokemonData = await data.json()
//     setPokemons(pokemonData)
//     console.log(pokemonData)
//   }
  


//   useEffect(() => {
//     fetchSinglePokemon()
//   }, [params.search])
const { num } = useParams();
const [singlePokemon, setSingelPokemon] = useState([]);
useEffect(() => {
  const fetch = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/pokemons/${num}`);
      setSingelPokemon(data.singlePokemon);
      console.log(data)
    } catch (err) {
      console.error(err);
    }
  };
  fetch();
}, []);

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
    {/* <button onClick={navigateBack}>Go back</button> */}
  </article>
);
};




export default SinglePokemon
