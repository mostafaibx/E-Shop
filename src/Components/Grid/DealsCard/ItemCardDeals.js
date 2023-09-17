import { Card, Button } from "react-bootstrap";
import dummyImg from "../../../assests/item-10.jpg";
import "./ItemCardDeals.css";
import { useNavigate } from "react-router";

function ItemCardDeals() {
  const navigate = useNavigate();
  function openProduct() {
    navigate("product/test");
  }

  return (
    <Card onClick={openProduct}>
      <Card.Img src={dummyImg}></Card.Img>
      <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center">
        <Card.Title>Item Title</Card.Title>
        <Card.Text>PRICE: 122$</Card.Text>
        <Button>BUY NOW</Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ItemCardDeals;
