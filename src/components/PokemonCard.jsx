import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta'

const PokemonCard = () => {
  return (
    <Card
      title="Ditto"
      cover={
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMgyUAMMakeqya73unlzKfi1KCde_BzLxMg&usqp=CAU"
          alt="Ditto"
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="Fire, Magic" />
    </Card>
  )
}

export default PokemonCard
