import { Card, Col, Button } from "react-bootstrap";
import dummyImg from "../../assests/item-10.jpg";
import { Cart, Fav1 } from "../../Icons/Icons";

function ItemCard(props) {
  return (
    <Card>
      <Card.Img src={dummyImg}></Card.Img>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.desc}</Card.Subtitle>
      </Card.Body>
      <Button variant="primary">
        <Cart /> Buy Now
      </Button>
      <Button variant="primary">
        <Fav1 /> Favorite
      </Button>
    </Card>
  );
}

export default ItemCard;
