
// esto es una funcion que retorna un action
// un objeto que describe el cambio q va pasar
// recibe como argumento un payload
// el payload seran los nuevos pokemons

import { getPokemonDetails } from "../api";
import { SET_POKEMONS } from "./types";


export const setPokemons = payload => ({
  type: SET_POKEMONS,
  payload
})



//es una funcion que retorna otra funcion : ()=>() =>
//la funcion recibe un dispatch
// que recibira ? pues la lista de pokemons
export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(pokemons.map(pokemon => getPokemonDetails(pokemon)))
  dispatch(setPokemons(pokemonsDetailed))

}