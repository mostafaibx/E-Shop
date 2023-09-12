import { Button, Card, Container } from "react-bootstrap";

function FavMenu() {
  return (
    <Container>
      <Card className="h-100">
        <Card.Header>Favorits</Card.Header>
        <Card.Body>
          <Card className="m-2">Item 1</Card>
          <Card className="m-2">Item 2</Card>
          <Card className="m-2">Item 3</Card>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <p>Total: 105$</p>
          <Button>Check Out</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default FavMenu;
