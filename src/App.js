import { useEffect } from 'react'
// importamos connect para conectarnos con redux

import { Col, Spin } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import './App.css';
import logo from './statics/logo.svg'
import { getPokemon, getPokemonDetails } from './api';
//importamos la accion setPokemons para utilizarla en el mapDispatchToprops
//y la renombramos con "as" para que no halla colision con la funcion seteadora.
import { getPokemonsWithDetails, loadPokemons, setPokemons } from './actions';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  //en useSelector recibe el estado y retorna el valor que quiere recibir del estado: state.pokemons

  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)


  //crearemos el dispatcher inicializando el useDispatcher
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(loadPokemons(true))
      const pokemonsRes = await getPokemon()
      //const pokemonsDetailed = await Promise.all(pokemonsRes.map(pokemon => getPokemonDetails(pokemon)))
      //dispatch(setPokemons(pokemonsDetailed))
      //haremos un llamado de la accion setPokemons , que a su vez le estamos pasando los datos que vienen de la API
      //y la dispararemos con dispatch

      //redux thunk

      dispatch(getPokemonsWithDetails(pokemonsRes))
      dispatch(loadPokemons(false))
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
      {
        loading ? (<Col offset={12}><Spin spinning size='large' /></Col>) : (<Col><PokemonList pokemons={pokemons} /></Col>)
      }

    </div>
  );
}


export default App

