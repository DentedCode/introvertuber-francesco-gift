import { Card } from 'react-bootstrap'
import style from './messageCard.module.css'

const messageCard = ({ message: { name, twitter, thumbnail, message } }) => {
  return (
    <Card className={style.message_card}>
      <img variant="top" src={thumbnail} className={style.twitterThumb} />
      <Card.Body>
        <Card.Title className={style.name}>{name}</Card.Title>
        <Card.Text className={style.twitterHandle}>{twitter}</Card.Text>
        <Card.Text className={style.message}>{message}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default messageCard
