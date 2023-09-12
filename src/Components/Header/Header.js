import { NavDropdown, Navbar, Container, Button, Nav } from "react-bootstrap";
import UserIcon from "./UserIcon/UserIcon";

function Header() {
  //Import Login Context to show login or header icon conditionally based on isLoggedIn value

  return (
    <Navbar expand="lg" bg="light" fixed="top">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">E-Shop</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className="d-flex justify-content-between align-items-center">
            <Nav className="mr-auto">
              <NavDropdown id="dropdown-basic-button" title="Categories">
                <NavDropdown.Item>xx in loop</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="dropdown-basic-button" title="Our Company">
                <NavDropdown.Item>About us</NavDropdown.Item>
                <NavDropdown.Item>About us</NavDropdown.Item>
                <NavDropdown.Item>About us</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <div>
              <Button className="mx-2" variant="primary">
                Get Started
              </Button>
              <Button className="mx-2" variant="secondary">
                Sign In
              </Button>
            </div>
          </Container>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;
