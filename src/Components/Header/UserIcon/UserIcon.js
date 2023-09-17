import { Nav, Button, NavDropdown } from "react-bootstrap";
import { Cart, Fav2 } from "../../../Icons/Icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../Store/AuthAction";
import { useNavigate } from "react-router";

function UserIcon() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutHandler() {
    dispatch(logoutAction());
  }

  function openCartHandler() {
    navigate("/your-cart");
  }

  return (
    <div className="d-flex align-items-center bg-primary rounded-pill p-2">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          /*           title={`${currentUser.displayName}`} */
          title="test"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Language</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.2" onClick={logoutHandler}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Button
        variant="secondary"
        className="rounded-circle mx-2"
        onClick={openCartHandler}
      >
        <Cart />
      </Button>
      <Button variant="secondary" className="rounded-circle">
        <Fav2 />
      </Button>
    </div>
  );
}

export default UserIcon;
