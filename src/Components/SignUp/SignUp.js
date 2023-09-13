import {
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Button,
} from "react-bootstrap";
import Header from "../Header/Header";

function SignUp() {
  return (
    <Container className="p-4">
      <Card className="p-4">
        <Card.Header>
          <h1>Sign up...</h1>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-12 col-sm-8 m-2">
                <Form.Group>
                  <Form.Label>UserName</Form.Label>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Form.Group>
              </Col>

              <Col className="col-12 col-sm-8 m-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>

              <Col className="col-12  col-sm-4 m-2">
                <Form.Group className="mb-3" controlId="pw1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col className="col-12 col-sm-4 m-2">
                <Form.Group className="mb-3" controlId="pw2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Col>

              <Col className="col-12 col-sm-8 m-2">
                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="password" placeholder="Street No," />
                </Form.Group>
              </Col>
              <Col className="col-12 col-sm-8 m-2">
                <Form.Group className="mb-3" controlId="address2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control type="text" placeholder="Additional Details" />
                </Form.Group>
              </Col>
              <Col className="col-12 col-sm-5 m-2">
                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" />
                </Form.Group>
              </Col>
              <Col className="col-12 col-sm-3 m-2">
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Postal Number</Form.Label>
                  <Form.Control type="text" placeholder="Postal Number" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default SignUp;
