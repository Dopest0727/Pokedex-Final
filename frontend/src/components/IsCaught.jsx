// import React, { useContext, useEffect, useState } from 'react'
// import axios from 'axios'
// import FavoriteContext from '../contexts/favoritesContext'
// import { Image, Box , Button} from '@chakra-ui/react'
 
// const IsCaught = () => {
//     const [pokemons, setPokemons] = useState([])
//   const { favoritePokemons, updateFavoritePokemons } =
//     useContext(FavoriteContext)

//   useEffect(() => {
//     axios
//       .get(`https://picopalquelee.herokuapp.com/pokemons`)
//       .then((res) => {
//         setPokemons(res.data.pokemons)
//       })
//       .catch((err) => {})
//   }, [])

//   const redHeart = '❤️'
//   const blackHeart = '🖤'
//   const heart = favoritePokemons.includes(pokemons.id) ? redHeart : blackHeart

//   const clickHeart = (e) => {
//     e.preventDefault()
//     updateFavoritePokemons(pokemons.id)
//   }

//   return (
//     <>
//       {pokemons.map((pokemon) => {
//         return (
//           <Box className="pokemon-card">
//             <Box w="xs">
//               <Image
//                 src={pokemon.img}
//                 alt={pokemon.name}
//                 className="pokemon-img"
//               />
//             </Box>
//             <div className="card-body">
//               <div className="card-top">
//                 <h3>{pokemon.name}</h3>
//               </div>
//               <div className="card-bottom">
//                 <Button onClick={clickHeart} className="pokemon-heart-btn">
//                   <div className="pokemon-favorite">{heart}</div>
//                 </Button>
//               </div>
//             </div>
//           </Box>
//         )
//       })}
//     </>
//   )
// }

// export default IsCaught
