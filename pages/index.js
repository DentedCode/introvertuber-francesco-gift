import { Col, Container, Row } from 'react-bootstrap'
import MainLayout from '../components/layout/mainLayout'
import InterviewCard from '../components/interview-card/InterviewCard'
import PostCard from '../components/post-card/PostCard'
import SubscribeFormCard from '../components/subscribe-form/SubscribeCard'
import MessageCard from '../components/community-love/MessageCard'

import interviews from '../assets/interviews.json'
import blogs from '../assets/blogs.json'
import messages from '../assets/messages.json'

export default function Home() {
  return (
    <MainLayout>
      <div className="hero-section">
        <Container>
          <Row className="hero-container">
            <div className="hero-text">
              <h1 className="font-weight-bold ">Hi, I'm Francesco Ciulla</h1>
              <p>
                Hi, I'm Francesco, from Rome. I am a JavaScript developer and a
                DevOps Enthusiast. I recently discovered a passion for making
                videos. I am also IntroverTuber.
              </p>
            </div>
            <div className="hero-img  ">
              <img
                className="text-center"
                src="/images/frencesco.svg"
                alt="Picture of the owner"
              />
            </div>
          </Row>
        </Container>
      </div>
      <Container className="latest-community-love py-4">
        <Row>
          <h2 className="section-title">Latest Loved by Dev Community</h2>
        </Row>
        <Row>
          {messages.length &&
            messages.map((row, i) => (
              <Col md="4" key={i}>
                <MessageCard message={row} />
              </Col>
            ))}
        </Row>
      </Container>
      <div className="section  tech-stack">
        <Container className=" py-4">
          <Row>
            <h2 className="section-title">My Tech Stack</h2>
          </Row>
          <Row className="tech-icons">
            <i class="fab fa-docker"></i>
            <i class="fab fa-js-square"></i>
            <i class="fab fa-node-js"></i>
            <i class="fab fa-react"></i>
          </Row>
        </Container>
      </div>
      <Container className="section latest-interviews">
        <Row>
          <h2 className="section-title">Latest Tech Interview</h2>
        </Row>
        <Row>
          {interviews.length &&
            interviews.map((row, i) => (
              <Col md="4" key={i}>
                {i <= 3 && <InterviewCard interview={row} />}
              </Col>
            ))}
        </Row>
      </Container>
      <Container className="section latest-blog">
        <Row>
          <h2 className="section-title">Latest Blog Posts</h2>
        </Row>
        <Row>
          {blogs.length &&
            blogs.map((row, i) => (
              <Col md="4" key={i}>
                <PostCard post={row} />
              </Col>
            ))}
        </Row>
      </Container>
      <Container className="py-4">
        <SubscribeFormCard />
      </Container>
    </MainLayout>
  )
}
