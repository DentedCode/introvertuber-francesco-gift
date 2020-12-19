import { Card } from 'react-bootstrap'
import style from './interviewCard.module.css'
const InterviewCard = ({ interview: { videoLink, title, summary, tags } }) => {
  console.log(videoLink, title, tags)
  return (
    <Card className={style.interview_card}>
      {videoLink && (
        <object data={videoLink} width="100%" height="300px"></object>
      )}
      <Card.Body>
        <Card.Title className={style.title}>{title}</Card.Title>
        <Card.Text className={style.summary}>{summary.slice(0, 100)}</Card.Text>
        <div className={style.tags}>
          {tags.split('|').length &&
            tags.split('|').map((tag) => <span> tag</span>)}
        </div>
      </Card.Body>
    </Card>
  )
}

export default InterviewCard
