import { useSelector } from "react-redux";
import ItemCard from "../Components/Grid/ItemCard/ItemCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFavItemsAction } from "../Store/Fav/FavActions";
import { Container } from "react-bootstrap";

function FavPage() {
  const favItems = useSelector((state) => state.fav.favItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavItemsAction());
  }, [dispatch]);

  return (
    <Container className="m-4 p-4">
      <h1 className="mb-4">Your Favorites:</h1>
      <Container className="m-4 p-4 d-flex justify-contnet-around">
        {favItems &&
          Object.values(favItems).map((item) => <ItemCard item={item} />)}
      </Container>
    </Container>
  );
}

export default FavPage;
