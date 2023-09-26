import { NavDropdown, Navbar, Container, Button, Nav } from "react-bootstrap";
import UserIcon from "./UserIcon/UserIcon";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setCurrentUser, setIsLogin } from "../../Store/AuthSlice";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const categories = useSelector((state) => state.products.categories);

  const navigate = useNavigate();
  function openLogin() {
    navigate("/login");
  }

  function openSignup() {
    navigate("/signup");
  }

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setCurrentUser({
            uid: user.uid,
            email: user.email,
            username: user.displayName,
          })
        );
        dispatch(setIsLogin(true));
      } else {
        dispatch(setCurrentUser(user));
        dispatch(setIsLogin(false));
      }
    });
  }, [dispatch]);

  function selectedCategory(event) {
    navigate(`/products/category/${event.target.id}`);
  }

  return (
    <Navbar expand="lg" bg="light">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/">E-Shop</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container className="d-flex justify-content-between align-items-center">
            <Nav className="mr-auto">
              <NavDropdown id="dropdown-basic-button" title="Shop">
                {categories.map((item) => (
                  <NavDropdown.Item id={item} onClick={selectedCategory}>
                    {item}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown id="dropdown-basic-button" title="Our Company">
                <NavDropdown.Item>About Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {!auth.isLogin && (
              <div>
                <Button className="mx-2" variant="primary" onClick={openSignup}>
                  Sign Up
                </Button>
                <Button
                  className="mx-2"
                  variant="secondary"
                  onClick={openLogin}
                >
                  Sign In
                </Button>
              </div>
            )}
            {auth.isLogin && <UserIcon />}
          </Container>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;
