import { Container, Row, Col } from "react-bootstrap";
import ItemCardDeals from "../Grid/DealsCard/ItemCardDeals";

function DealsSection() {
  return (
    <Container className="mt-4">
      <h1>Top Deals</h1>
      <Row>
        <Col className="border-end">
          <ItemCardDeals />
        </Col>
        <Col className="border-end">
          <ItemCardDeals />
        </Col>
        <Col>
          <ItemCardDeals />
        </Col>
      </Row>
    </Container>
  );
}

export default DealsSection;
