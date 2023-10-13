import {Container, Nav, Navbar} from 'react-bootstrap'
const Navigation=() => {
    return <>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
}

export default Navigation;