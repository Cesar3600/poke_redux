import React from 'react'
import PokemonCard from './PokemonCard'
import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map(({ name, sprites, abilities }) => (
        <PokemonCard
          name={name}
          key={name}
          imagen={sprites.front_default}
          abilities={abilities}
        />
      ))}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill('')
}

export default PokemonList
