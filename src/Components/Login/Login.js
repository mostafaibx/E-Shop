import { useRef } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loginAction } from "../../Store/AuthAction";
import { useSelector } from "react-redux";

function Login() {
  const loadingerror = useSelector((state) => state.loadingerror);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const pwRef = useRef();
  function loginHandler(event) {
    event.preventDefault();
    const loginCred = {
      email: emailRef.current.value,
      pw: pwRef.current.value,
    };

    dispatch(loginAction(loginCred));
  }

  return (
    <Container className="mt-4 d-flex align-items-center flex-column">
      <Card className="p-4">
        <Card.Header className="mb-4">
          <h1>Sign In...</h1>
        </Card.Header>
        <Card.Body>
          <p>{loadingerror.err}</p>
          <Form onSubmit={loginHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={pwRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <Button variant="none" type="reset">
              Reset
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Login;
