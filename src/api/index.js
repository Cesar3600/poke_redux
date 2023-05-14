import axios from "axios"

export async function getPokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit151');
    console.log("🚀 ~ file: index.js:6 ~ getPokemon ~ response:", response)
    return response.data.results;
  }
  catch (err) {
    console.error(err)
    throw new Error('Error al intentar obtener los pokemones')
  }
}