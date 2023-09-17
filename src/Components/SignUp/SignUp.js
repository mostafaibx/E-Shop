import { useRef } from "react";
import {
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Button,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { signupAction } from "../../Store/AuthAction";
import { useSelector } from "react-redux";

function SignUp() {
  const loadingerror = useSelector((state) => state.loadingerror);
  const dispatch = useDispatch();
  const username = useRef();
  const email = useRef();
  const pw = useRef();
  const pw2 = useRef();
  const address = useRef();
  const address2 = useRef();
  const city = useRef();
  const postal = useRef();

  function signupHandler(event) {
    event.preventDefault();
    const signupCred = {
      username: username.current.value,
      email: email.current.value,
      pw: pw.current.value,
      address: address.current.value,
      address2: address2.current.value || "",
      city: city.current.value,
      postal: postal.current.value,
    };

    dispatch(signupAction(signupCred));
  }

  return (
    <Container className="p-4">
      <Card className="p-4">
        <Card.Header>
          <h1>Sign up...</h1>
        </Card.Header>
        <Card.Body>
          {<p>{loadingerror.err}</p>}
          <Form onSubmit={signupHandler}>
            <Row>
              <Col className="col-12 col-sm-8 m-2">
                <Form.Group>
                  <Form.Label>UserName</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="username">@</InputGroup.Text>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="username"
                      ref={username}
                    />
                  </InputGroup>
                </Form.Group>
              </Col>

              <Col className="col-12 col-sm-8 m-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    ref={email}
                  />
                </Form.Group>
              </Col>

              <Col className="col-12  col-sm-4 m-2">
                <Form.Group className="mb-3" controlId="pw1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={pw}
                  />
                </Form.Group>
              </Col>
              <Col className="col-12 col-sm-4 m-2">
                <Form.Group className="mb-3" controlId="pw2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    ref={pw2}
                  />
                </Form.Group>
              </Col>

              <Col className="col-12 col-sm-8 m-2">
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Street No,"
                    ref={address}
                  />
                </Form.Group>
              </Col>
              <Col className="col-12 col-sm-8 m-2">
                <Form.Group className="mb-3" controlId="address2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Additional Details"
                    ref={address2}
                  />
                </Form.Group>
              </Col>
              <Col className="col-12 col-sm-5 m-2">
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" ref={city} />
                </Form.Group>
              </Col>
              <Col className="col-12 col-sm-3 m-2">
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Postal Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Postal Number"
                    ref={postal}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                type="submit"
                disabled={loadingerror.isLoading}
              >
                Sign up
              </Button>
              <Button className="mx-2" variant="none" type="reset">
                Reset
              </Button>
            </div>
          </Form>
          <div className="d-flex justify-content-center mt-4">
            <p>
              Do you Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignUp;
