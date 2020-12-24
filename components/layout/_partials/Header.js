import Link from 'next/link'
import { Container, Navbar, Nav, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand className="brand">Francesco</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/community-love" passHref>
              <Nav.Link href="">Loved</Nav.Link>
            </Link>
            <Link href="/interview" passHref>
              <Nav.Link>Interviews</Nav.Link>
            </Link>
            <Link href="/blog" passHref>
              <Nav.Link>Blog</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
