import { Card } from 'react-bootstrap'
import style from './interviewCard.module.css'

const ytPlayLink = 'https://www.youtube.com/embed/'
const InterviewCard = ({ interview: { contentDetails, snippet } }) => {
  const { videoId, videoPublishedAt } = contentDetails
  const { description, title } = snippet

  return (
    <Card className={style.interview_card}>
      {videoId && (
        <object
          data={ytPlayLink + videoId}
          width="100%"
          height="300px"
        ></object>
      )}
      <Card.Body>
        <Card.Title className={style.title}>{title}</Card.Title>
        <Card.Title className={style.published_date}>
          <i className="fas fa-clock"></i>{' '}
          {new Date(videoPublishedAt).toLocaleDateString()}
        </Card.Title>
        <Card.Text className={style.description}>
          {description.slice(0, 100)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default InterviewCard
