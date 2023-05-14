import { useState, useEffect } from 'react'
// importamos connect para conectarnos con redux

import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import './App.css';
import logo from './statics/logo.svg'
import { getPokemon } from './api';
//importamos la accion setPokemons para utilizarla en el mapDispatchToprops
//y la renombramos con "as" para que no halla colision con la funcion seteadora.
import { setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';
//import { useDispatch, useSelector } from 'react-redux';

function App() {

  //en useSelector recibe el estado y retorna el valor que quiere recibir del estado: state.pokemons



  //crearemos el dispatcher inicializando el useDispatcher

  const dispatch = useDispatch()

  const listPokemons = useSelector(state => state.pokemons)


  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon()

      //haremos un llamado de la accion setPokemons , que a su vez le estamos pasando los datos que vienen de la API
      //y la dispararemos con dispatch
      dispatch(setPokemons(pokemonsRes))
    }
    fetchPokemons()
  }, [])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="PokeDusk" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={listPokemons} />
    </div>
  );
}




export default App

