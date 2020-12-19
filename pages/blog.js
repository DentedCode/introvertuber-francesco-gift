import MainLayout from '../components/layout/mainLayout'
import { Container, Row, Col } from 'react-bootstrap'

import blogs from '../assets/blogs.json'
import PostCard from '../components/post-card/PostCard'
import SubscribeFormCard from '../components/subscribe-form/SubscribeCard'

export default function Blog() {
  return (
    <MainLayout>
      <Container>
        <Row className="mt-5">
          <h4>
            Don't want to miss any Docker related updated and Twitter developer
            Interviews.{' '}
          </h4>
        </Row>

        <Row>
          <SubscribeFormCard />
        </Row>
        <hr />
        <Row>
          {blogs.length &&
            blogs.map((row, i) => (
              <Col md="6" lg="4" key={i}>
                <PostCard post={row} />
              </Col>
            ))}
        </Row>
      </Container>
    </MainLayout>
  )
}
