// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { UnorderedList, ListItem, Flex } from '@chakra-ui/react'

// import NavBar from '../components/NavBar'
// import Footer from '../components/Footer'
// import IsCaught from '../components/IsCaught'
// import { FavoriteProvider } from '../contexts/favoritesContext'

// const Profile = () => {
//   const [pokemons] = useState([])
//   const [favorites, setFavorites] = useState([])
//   const localStorageKey = 'favorite_pokemon'

//   const loadFavoritePokemons = () => {
//     const pokemons =
//       JSON.parse(window.localStorage.getItem(localStorageKey)) || []
//     setFavorites(pokemons)
//   }

//   useEffect(() => {
//     loadFavoritePokemons()
//   }, [])

//   const updateFavoritePokemons = (id) => {
//     const updated = [...favorites]
//     const isFavorite = updated.indexOf(id)
//     if (isFavorite >= 0) {
//       updated.splice(isFavorite, 1)
//     } else {
//       updated.push(id)
//     }
//     setFavorites(updated)
//     window.localStorage.setItem(localStorageKey, JSON.stringify(updated))
//   }

//   return (
//     <FavoriteProvider
//       value={{
//         favoritePokemons: favorites,
//         updateFavoritePokemons: updateFavoritePokemons,
//       }}
//     >
//       <NavBar />
//       <UnorderedList>

//             <Flex>
//               <IsCaught pokemons={pokemons.name}
//             />
            
//             </Flex>

//       </UnorderedList>
//       <Footer />
//     </FavoriteProvider>
//   )
// }

// export default Profile
