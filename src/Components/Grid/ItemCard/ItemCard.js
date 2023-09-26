import { Card, Button } from "react-bootstrap";
import { Cart, Fav1, Fav2 } from "../../../Icons/Icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../Store/CartAction";
import {
  addToFavAction,
  getFavItemsAction,
  removeFavItemsAction,
} from "../../../Store/Fav/FavActions";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ItemCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.fav.favItems);

  const [favorited, setFavorited] = useState(false);

  const inFav = Object.values(favs).some((item) => item.id === props.item.id);

  useEffect(() => {
    dispatch(getFavItemsAction());
    /* setFavorited(false); */
  }, [favorited]);

  function openProduct() {
    navigate(`/products/${props.item.id}`);
  }

  function addtoCartHandler(event) {
    event.stopPropagation();
    dispatch(addToCartAction(props.item));
  }
  function addtoFavHandler(event) {
    event.stopPropagation();
    dispatch(addToFavAction(props.item));
    setFavorited(true);
  }

  function removeHandler(event) {
    event.stopPropagation();
    dispatch(removeFavItemsAction(props.item.id));
    setFavorited(true);
  }

  return (
    <Card
      key={props.item.id}
      className="shadow-sm p-3 mb-5 mx-1 bg-body rounded "
      onClick={openProduct}
      style={{ width: "300px", height: "300px" }}
    >
      <div style={{ overflow: "hidden" }}>
        <Card.Img
          src={props.item.thumbnail}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
        {inFav && (
          <Button variant="primary" onClick={removeHandler}>
            <Fav2 /> Remove
          </Button>
        )}
        {!inFav && (
          <Button variant="primary" onClick={addtoFavHandler}>
            <Fav1 /> Favorite
          </Button>
        )}
      </Card.ImgOverlay>
    </Card>
  );
}

export default ItemCard;
