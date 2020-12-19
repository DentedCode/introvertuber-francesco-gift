import MainLayout from '../components/layout/mainLayout'
import { Container, Row, Col } from 'react-bootstrap'

import interviews from '../assets/interviews.json'
import InterviewCard from '../components/interview-card/InterviewCard'

export default function Interview() {
  return (
    <MainLayout>
      <Container className="section latest-interviews ">
        <Row>
          <h2 className="section-title mt-5">Watch all Tech Interviews</h2>
        </Row>
        <Row>
          {interviews.length &&
            interviews.map((row, i) => (
              <Col md="6" lg="4" key={i}>
                {i <= 3 && <InterviewCard interview={row} />}
              </Col>
            ))}
        </Row>
      </Container>
    </MainLayout>
  )
}
