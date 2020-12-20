import fs from 'fs'
import path from 'path'
import { useEffect, useState } from 'react'

import MessageCard from '../components/community-love/MessageCard'
import MainLayout from '../components/layout/mainLayout'
import { Container, Row, Col } from 'react-bootstrap'
import PaginationComp from '../components/pagination/Pagination'

const messagePageSize = 30
export default function CommunityLove({ messages }) {
  const totalPages = Math.ceil(messages.length / messagePageSize)

  const [filteredMessages, setFilteredMessages] = useState(
    messages.slice(0, messagePageSize)
  )
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {}, [filteredMessages, currentPage])

  const handleOnNextClick = ({ selected }) => {
    const p = selected

    setCurrentPage(p)
    const start =
      p < 1 ? 0 : p === totalPages ? totalPages : p * messagePageSize
    const end = start + messagePageSize

    const filtered = messages.slice(start, end)

    setFilteredMessages(filtered)
  }

  return (
    <MainLayout>
      <Container>
        <Row>
          <h2 className="section-title mt-5">
            What people say about Fransesco
          </h2>
        </Row>
        <Row>
          <h3 className="ml-auto">
            Write something to Francesco{' '}
            <a
              className="font-weight-bold text-primary"
              href="https://github.com/DentedCode/introvertuber-francesco-gift/blob/main/assets/messages.json"
              target="_blank"
            >
              Here
            </a>
          </h3>
        </Row>

        <hr />
        <Row>
          {filteredMessages.length ? (
            filteredMessages.map((row, i) => (
              <Col md="4" lg="3" key={i}>
                <MessageCard message={row} />
              </Col>
            ))
          ) : (
            <h3>No message to show </h3>
          )}
        </Row>
        {messages.length > messagePageSize && (
          <Row className="py-5">
            <PaginationComp
              totalPages={totalPages}
              handleNextClick={handleOnNextClick}
              currentPage={currentPage}
            />
          </Row>
        )}
      </Container>
    </MainLayout>
  )
}

export async function getStaticProps(context) {
  try {
    const fp = path.join(process.cwd(), 'assets/messages.json')
    const content = fs.readFileSync(fp, 'utf8')
    const messages = JSON.parse(content)

    return {
      props: { messages }, // will be passed to the page component as props
    }
  } catch (error) {
    console.log(error)
    return {
      props: { messages: [] }, // will be passed to the page component as props
    }
  }
}
