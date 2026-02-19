import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar expand="lg" variant="dark" className="py-3">
      <Container fluid className="me-5">
        <Navbar.Brand as={Link} to="/">
          Folioblox
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-3">
            <Nav.Link as={Link} className="text-dark" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/projects">
              Projects
            </Nav.Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/rifandro-dandika-910a76378/"
            >
              <Button className="btn-dark">Get in touch</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
