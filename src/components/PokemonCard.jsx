import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'

const PokemonCard = ({ name, imagen, abilities }) => {
  const descrip = (arr) => {
    return arr.map((hab) => hab.ability.name).join(', ')
  }
  return (
    <Card
      title={name}
      cover={<img src={imagen} alt="Ditto" />}
      extra={<StarOutlined />}
    >
      <Meta description={descrip(abilities)} />
    </Card>
  )
}

export default PokemonCard
