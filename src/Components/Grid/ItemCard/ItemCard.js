import { Card, Button } from "react-bootstrap";
import { Cart, Fav1 } from "../../../Icons/Icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../Store/CartAction";

function ItemCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function openProduct() {
    /*     //getting selected object from the array we fetched and pass it to the item page
    //we can use this approach to reduce the api calls
    dispatch(selectProduct(props.item)); */
    navigate(`/products/${props.item.id}`);
  }

  function addtoCartHandler(event) {
    event.stopPropagation();
    dispatch(addToCartAction(props.item));
  }
  function addtoFavHandler(event) {
    event.stopPropagation();
  }

  return (
    <Card
      key={props.item.id}
      className="shadow-sm p-3 mb-5 bg-body rounded"
      onClick={openProduct}
    >
      <div style={{ overflow: "hidden" }}>
        <Card.Img
          src={props.item.thumbnail}
          style={{ height: "250px", width: "350px" }}
        ></Card.Img>
      </div>
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Subtitle>Price: {props.item.price}$</Card.Subtitle>
      </Card.Body>
      <Card.ImgOverlay className="d-flex flex-column justify-content-center">
        <Button variant="primary" className="mb-2" onClick={addtoCartHandler}>
          <Cart /> Add to Cart
        </Button>
        <Button variant="primary" onClick={addtoFavHandler}>
          <Fav1 /> Favorite
        </Button>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ItemCard;
