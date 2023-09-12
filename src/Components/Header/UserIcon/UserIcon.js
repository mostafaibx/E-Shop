import { Nav, Button, NavDropdown } from "react-bootstrap";
import { Cart, Fav2 } from "../../../Icons/Icons";

function UserIcon() {
  return (
    <div className="d-flex align-items-center bg-primary rounded-pill p-2">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Username"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Language</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Button variant="secondary" className="rounded-circle">
        <Cart />
      </Button>
      <Button variant="secondary" className="rounded-circle">
        <Fav2 />
      </Button>
    </div>
  );
}

export default UserIcon;
