import { Card } from 'react-bootstrap'
import style from './PostCard.module.css'

const PostCard = ({
  post: { title, url, date, readTime, thumbnail, summary },
}) => {
  return (
    <a href={url} target="blank">
      <Card className={style.blog_card}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title className={style.title}>{title}</Card.Title>
          <Card.Text className={style.summary}>
            {summary.slice(0, 100)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  )
}

export default PostCard
