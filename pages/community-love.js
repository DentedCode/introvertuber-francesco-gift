import MessageCard from '../components/community-love/MessageCard'
import MainLayout from '../components/layout/mainLayout'
import { Container, Row, Col } from 'react-bootstrap'
import messages from '../assets/messages.json'

export default function CommunityLove() {
  return (
    <MainLayout>
      <Row>
        <h2 className="section-title mt-5"> What people say about Fransesco</h2>
      </Row>
      <Container>
        <Row>
          {messages.length &&
            messages.map((row, i) => (
              <Col md="4" key={i}>
                <MessageCard message={row} />
              </Col>
            ))}
        </Row>
      </Container>
    </MainLayout>
  )
}
