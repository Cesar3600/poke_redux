import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../actions'
import StarButton from './StarButton'

const PokemonCard = ({ name, imagen, abilities, id, favorite }) => {
  const dispatch = useDispatch()
  const descrip = (arr) => {
    return arr.map((hab) => hab.ability.name).join(', ')
  }

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }))
  }

  return (
    <Card
      title={name}
      cover={<img src={imagen} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={descrip(abilities)} />
    </Card>
  )
}

export default PokemonCard
