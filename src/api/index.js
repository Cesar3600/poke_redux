import axios from "axios"

export async function getPokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit151');

    return response.data.results;
  }
  catch (err) {
    console.error(err)
    throw new Error('Error al intentar obtener los pokemones')
  }
}


export const getPokemonDetails = async pokemon => {
  try {
    const { data } = await axios.get(pokemon.url)
    return data

  } catch (err) {
    console.error(err)
  }
}