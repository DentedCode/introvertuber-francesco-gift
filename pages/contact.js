import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import MainLayout from '../components/layout/mainLayout'

export default function Contact() {
  return (
    <MainLayout>
      <Container className="mt-5">
        <Row className="Py-4">
          <h2 className="section-title mt-5">Get in with me</h2>
        </Row>
        <Row>
          <Col className="d-flex flex-direction-row">
            <ul className="social-lists">
              <li>
                <a
                  href="https://www.youtube.com/c/FrancescoCiulla"
                  target="_blank"
                >
                  🎥 Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/francescociullaroma/"
                  target="_blank"
                >
                  📷 Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/FrancescoCiull4" target="_blank">
                  🐦 Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/francesco-ciulla-roma/"
                  target="_blank"
                >
                  💼 Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/francesco.ciulla.100"
                  target="_blank"
                >
                  🟦 Facebook
                </a>
              </li>
              <li>
                <a href="https://github.com/FrancescoXX" target="_blank">
                  🐱 GitHub
                </a>
              </li>
              <li>EMAIL📧 : me@francescociulla.com</li>
            </ul>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control type="textarea" placeholder="message" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}
