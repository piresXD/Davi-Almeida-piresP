import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarra = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Loja do Greg</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/RegistroProduto">Registrar Produto</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBarra