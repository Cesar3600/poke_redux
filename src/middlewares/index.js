



export const showAction = store => next => action => {
  console.log(action)
  next(action)
}


export const guestPokemon = store => next => actionPokemons => {
  const guest = [{ name: 'pokeDelia' }, ...actionPokemons.action.payload];

  const actionUpdatePokemon = { ...actionPokemons, action: { ...actionPokemons.action, payload: guest } }

  next(actionUpdatePokemon)
}