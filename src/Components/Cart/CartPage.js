import { Container, ListGroup, Button } from "react-bootstrap";

function CartPage() {
  return (
    <Container className="m-4">
      <h1>Your Cart</h1>
      <br></br>
      <Container>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <div className="d-flex align-items-center">
              <div class=" border border-secondary rounded">
                <h5 className="p-2 m-0">120$</h5>
              </div>
              <Button className="mx-2" variant="danger">
                Remove
              </Button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <div className="d-flex align-items-center">
              <div class=" border border-secondary rounded">
                <h5 className="p-2 m-0">120$</h5>
              </div>
              <Button className="mx-2" variant="danger">
                Remove
              </Button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <div className="d-flex align-items-center">
              <div class=" border border-secondary rounded">
                <h5 className="p-2 m-0">120$</h5>
              </div>
              <Button className="mx-2" variant="danger">
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
        <br />
        <h4>Total Order: 360$</h4>
        <Container className="d-flex justify-content-center flex-column w-50">
          <Button className="m-2" variant="secondary">
            Containue Shopping
          </Button>
          <Button className="m-2">Check Out</Button>
        </Container>
      </Container>
    </Container>
  );
}

export default CartPage;
