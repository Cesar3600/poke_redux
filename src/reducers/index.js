

import { LOADING_POKEMONS, SET_FAVORITE, SET_POKEMONS } from '../actions/types.js'

const initialState = {
  pokemons: [],
  loading: false
}


export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload }

    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons]
      const currentPokemonIndex = newPokemonsList.findIndex(
        pokemon => pokemon.id === action.payload.pokemonId
      )

      if (currentPokemonIndex < 0) {
        return state
      }

      newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite

      return { ...state, pokemons: newPokemonsList }

    case LOADING_POKEMONS:
      return { ...state, loading: action.payload }

    default:
      return state

  }
}