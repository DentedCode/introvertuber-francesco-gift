import fs from 'fs'
import path from 'path'
import { Col, Container, Row } from 'react-bootstrap'
import MainLayout from '../components/layout/mainLayout'
import InterviewCard from '../components/interview-card/InterviewCard'
import PostCard from '../components/post-card/PostCard'
import SubscribeFormCard from '../components/subscribe-form/SubscribeCard'
import MessageCard from '../components/community-love/MessageCard'

export default function Home({ interviews, messages, blogs }) {
  return (
    <MainLayout>
      <div className="hero-section">
        <Container>
          <Row>
            <Col className="hero-container">
              <div className="hero-text">
                <h1 className="font-weight-bold ">Hi, I'm Francesco Ciulla</h1>
                <p>
                  Hi, I'm Francesco, from Rome. I am a JavaScript developer and
                  a DevOps Enthusiast. I recently discovered a passion for
                  making videos. I am also IntroverTuber.
                </p>
              </div>
              <div className="hero-img  ">
                <img
                  className="text-center"
                  src="/images/frencesco.svg"
                  alt="Picture of the owner"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="  py-5 mt-3">
        <Row>
          <h2 className="section-title text-center">
            Latest Loved by Dev Community
          </h2>
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
      <div className="section-tech-stack  py-5 mt-3">
        <Container className="  py-5 mt-3">
          <Row>
            <h2 className="section-title text-center">My Tech Stack</h2>
          </Row>
          <Row className="tech-stack">
            <i className="fab fa-docker py-2"></i>

            <i className="fab fa-js-square py-2 "></i>

            <i className="fab fa-node-js py-2"></i>

            <i className="fab fa-react py-2"></i>
          </Row>
        </Container>
      </div>
      <Container className="section latest-interviews  py-5 mt-3">
        <Row>
          <h2 className="section-title">Latest Tech Interview</h2>
        </Row>
        <Row>
          {interviews.length &&
            interviews.map((row, i) => (
              <Col md="4" key={i}>
                {i < 3 && <InterviewCard interview={row} />}
              </Col>
            ))}
        </Row>
      </Container>
      <Container className="section latest-blog  py-5 mt-3">
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
      <Container className=" py-5 mt-3">
        <Col>
          <SubscribeFormCard />
        </Col>
      </Container>
    </MainLayout>
  )
}

export async function getStaticProps(context) {
  try {
    //latest messages
    const mfp = path.join(process.cwd(), 'assets/messages.json')
    const msgContent = fs.readFileSync(mfp, 'utf8')
    const messages = JSON.parse(msgContent)
    const latestMessages = messages.reverse().slice(0, 3)

    //latest interviews
    const fp = path.join(process.cwd(), 'assets/interviews.json')
    const content = fs.readFileSync(fp, 'utf8')
    const interviews = JSON.parse(content)
    const lastInterviews = interviews.reverse().slice(0, 3)

    //latest blog posts
    const bfp = path.join(process.cwd(), 'assets/blogs.json')
    const blogContent = fs.readFileSync(bfp, 'utf8')
    const blogs = JSON.parse(blogContent)
    const lastBlogs = blogs.reverse().slice(0, 3)

    return {
      props: {
        interviews: lastInterviews,
        messages: latestMessages,
        blogs: lastBlogs,
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: { interviews: [] }, // will be passed to the page component as props
    }
  }
}
