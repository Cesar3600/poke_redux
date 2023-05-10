import axios from "axios"

export async function getPokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit100000&offset=0');
    return response.data.results;
  }
  catch (err) {
    console.error(err)
    throw new Error('Error al intentar obtener los pokemones')
  }
}