export const getPokemons = async () => {
    try {
      let url = `https://picopalquelee.herokuapp.com/pokemons`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemonData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
