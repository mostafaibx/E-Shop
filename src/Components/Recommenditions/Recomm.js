import { Container } from "react-bootstrap";
import ItemCard from "../Grid/ItemCard";

function Recomm() {
  return (
    <Container>
      <h1>Recommenditions</h1>
      <div className="d-flex justify-content-between m-4">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </Container>
  );
}

export default Recomm;
