
// esto es una funcion que retorna un action
// un objeto que describe el cambio q va pasar
// recibe como argumento un payload
// el payload seran los nuevos pokemons

import { SET_POKEMONS } from "./types";


export const setPokemons = payload => ({
  type: SET_POKEMONS,
  payload
})

