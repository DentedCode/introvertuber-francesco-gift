import { Card } from 'react-bootstrap'
import style from './messageCard.module.css'

const twitterUrl = 'https://twitter.com/'
const messageCard = ({ message: { name, twitter, thumbnail, message } }) => {
  return (
    <Card className={style.message_card}>
      <a href={twitterUrl + twitter} target="_blank" className="text-center">
        <img variant="top" src={thumbnail} className={style.twitterThumb} />
      </a>
      <Card.Body>
        <Card.Title className={style.name}>{name}</Card.Title>
        <Card.Text className={style.twitterHandle}>{twitter}</Card.Text>
        <Card.Text className={style.message}>{message}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default messageCard
