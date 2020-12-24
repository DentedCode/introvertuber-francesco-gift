import fs from 'fs'
import path from 'path'
import { useEffect, useState } from 'react'

import MainLayout from '../components/layout/mainLayout'
import { Container, Row, Col } from 'react-bootstrap'

// import blogs from '../assets/blogs.json'
import PostCard from '../components/post-card/PostCard'
import SubscribeFormCard from '../components/subscribe-form/SubscribeCard'

const pageSize = 12

export default function Blog({ blogs }) {
  const totalPages = Math.ceil(blogs.length / pageSize)

  const [filteredBlogs, setFilteredBlogs] = useState(0, pageSize)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {}, [filteredBlogs, currentPage])

  return (
    <MainLayout>
      <Container>
        <Row className="mt-5">
          <Col>
            <h4>
              Don't want to miss any Docker related updated and Twitter
              developer blogs.{' '}
            </h4>
          </Col>
        </Row>

        <Row>{/* <SubscribeFormCard /> */}</Row>
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

export async function getStaticProps(context) {
  try {
    const fp = path.join(process.cwd(), 'assets/blogs.json')
    const blogContent = fs.readFileSync(fp, 'utf8')
    const blogs = JSON.parse(blogContent)

    return {
      props: { blogs }, // will be passed to the page component as props
    }
  } catch (error) {
    console.log(error)
    return {
      props: { blogs: [] }, // will be passed to the page component as props
    }
  }
}
