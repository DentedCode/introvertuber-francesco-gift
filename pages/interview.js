import fs from 'fs'
import path from 'path'
import { useEffect, useState } from 'react'

import MainLayout from '../components/layout/mainLayout'
import { Container, Row, Col } from 'react-bootstrap'

import InterviewCard from '../components/interview-card/InterviewCard'
import SearchForm from '../components/search-form/SearchForm'

import PaginationComp from '../components/pagination/Pagination'

const pageSize = 12

export default function Interview({ interviews, error }) {
  const totalPages = Math.ceil(interviews.length / pageSize)

  const [filteredInterviews, setFilteredInterviews] = useState(
    interviews.slice(0, pageSize)
  )
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {}, [filteredInterviews, currentPage])

  const handleOnchange = (e) => {
    const { value } = e.target
    const filter = interviews.filter(
      (row) =>
        row.snippet.title.includes(value.toLowerCase()) ||
        row.snippet.description.includes(value.toLowerCase())
    )

    setFilteredInterviews(filter)
  }

  const handleOnNextClick = ({ selected }) => {
    const p = selected

    setCurrentPage(p)
    const start = p < 1 ? 0 : p === totalPages ? totalPages : p * pageSize
    const end = start + pageSize

    const filtered = interviews.slice(start, end)

    setFilteredInterviews(filtered)
  }

  return (
    <MainLayout>
      <Container className="section latest-interviews ">
        <Row>
          <Col>
            <h2 className="section-title mt-5">Watch all Tech Interviews</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="search-form">
              <SearchForm handleOnchange={handleOnchange} />
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          {filteredInterviews.length ? (
            filteredInterviews.map((row, i) => (
              <Col md="6" lg="4" key={i}>
                <InterviewCard interview={row} />
              </Col>
            ))
          ) : (
            <Col>
              <h3>No interview found, try to search something else.</h3>
            </Col>
          )}
        </Row>
        {interviews.length > pageSize && (
          <Row className="py-5 ">
            <Col className="d-flex justify-content-right">
              <PaginationComp
                totalPages={totalPages}
                handleNextClick={handleOnNextClick}
                currentPage={currentPage}
              />
            </Col>
          </Row>
        )}
      </Container>
    </MainLayout>
  )
}

export async function getStaticProps(context) {
  try {
    const fp = path.join(process.cwd(), 'assets/interviews.json')
    const content = fs.readFileSync(fp, 'utf8')
    const interviews = JSON.parse(content)
    return {
      props: { interviews }, // will be passed to the page component as props
    }
  } catch (error) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
}
