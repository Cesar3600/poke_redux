import { useEffect } from 'react'
// importamos connect para conectarnos con redux
import { connect } from 'react-redux'
import { Col } from 'antd';
import PokemonList from './components/PokemonList';
import Searcher from './components/Searcher';
import './App.css';
import logo from './statics/logo.svg'
import { getPokemon } from './api';
//importamos la accion setPokemons para utilizarla en el mapDispatchToprops
//y la renombramos con "as" para que no halla colision con la funcion seteadora.
import { setPokemons as setPokemonsActions } from './actions';

function App({ pokemons, setPokemons }) {
  console.log("🚀 ~ file: App.js:15 ~ App ~ pokemons:", pokemons)

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon()
      setPokemons(pokemonsRes)
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
      <PokemonList pokemons={pokemons} />
    </div>
  );
}


//tendremos dos variables: mapStateToProps y mapDispatchToProps
//(llamadas asi por convension)


// mapStateToProps recibe como parametro el state
// esta funcion regresa un objeto donde sus propiedades seran enviadas a las props del componente 
// que se conecta a redux
const mapStateToProps = (state) => ({
  pokemons: state.pokemons
})

//esta funcion recibe el dispatcher de redux y va retornar un objeto que va a ser 
//mapeado a nuestras propiedades pero con los actionsCreator que ya establecimos previamente
const mapDispatchToProps = dispatch => ({
  setPokemons: values => dispatch(setPokemonsActions(values))
})



//de esta forma se conecta el componente al store de redux. 
// las funciones definen como se mapea(enlaza) el estado y las acciones de redux a las propiedades del componente

export default connect(mapStateToProps, mapDispatchToProps)(App);

//(App) retorna una funcion que se invoca con el componente App


