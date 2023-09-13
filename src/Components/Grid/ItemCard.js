import { Card, Button, Container } from "react-bootstrap";
import dummyImg from "../../assests/item-10.jpg";
import { Cart, Fav1 } from "../../Icons/Icons";
import { useNavigate, useParams } from "react-router-dom";

function ItemCard(props) {
  const param = useParams();
  const navigate = useNavigate();
  function openProduct() {
    navigate(`product/${props.id}`);
  }

  return (
    <Card className="shadow-sm p-3 mb-5 bg-body rounded" onClick={openProduct}>
      <Card.Img
        src={props.imgUrl[0]}
        style={{ height: "250px", width: "350px" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.desc}</Card.Subtitle>
      </Card.Body>
      <Card.ImgOverlay className="d-flex flex-column justify-content-center">
        <Button variant="primary" className="mb-2">
          <Cart /> Buy Now
        </Button>
        <Button variant="primary">
          <Fav1 /> Favorite
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ItemCard;
