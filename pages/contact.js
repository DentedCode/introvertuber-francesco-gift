import { useState, useEffect } from 'react'
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from 'react-bootstrap'
import MainLayout from '../components/layout/mainLayout'

const initialFormData = {
  email: '',
  message: '',
}
const initialFormSubmit = {
  status: '',
  message: '',
}

const contactApi = '/api/contact'

export default function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [isPendingSubmit, setIsPendingSubmit] = useState(false)
  const [formDataError, setFormDataError] = useState(initialFormSubmit)

  useEffect

  const resetForm = () => {
    setIsPendingSubmit(false)
    setFormDataError(initialFormSubmit)
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target

    resetForm()
    switch (name) {
      case 'email':
        setFormData({ ...formData, email: value })
        break

      case 'message':
        setFormData({ ...formData, message: value })
        break

      default:
        break
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email || !formData.message) {
      return setFormDataError({
        status: 'error',
        message: 'Please fill all the required field!',
      })
    }
    setIsPendingSubmit(true)

    fetch(contactApi, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsPendingSubmit(false)
        setFormDataError(data)
      })
      .catch((error) => {
        console.error('Error:', error)
        setIsPendingSubmit(false)
        setFormDataError({ status: 'error', message: error.message })
      })
  }
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
            {formDataError.message && (
              <div>
                <Alert
                  variant={
                    formDataError.status === 'success' ? 'primary' : 'danger'
                  }
                >
                  {formDataError.message}
                </Alert>
              </div>
            )}
            {/* <Form onSubmit={handleFormSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  name="message"
                  placeholder="message"
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>{' '}
              {isPendingSubmit && (
                <Row>
                  <Spinner animation="border" variant="primary" />
                </Row>
              )}
            </Form>
            */}
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}
