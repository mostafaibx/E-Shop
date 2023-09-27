import { Container, Button } from "react-bootstrap";
import { Cart, Fav1, Fav2, Star } from "../../Icons/Icons";
import Recomm from "../../Components/Recommenditions/Recomm";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchSelectedProduct } from "../../Store/fetchingAction";
import { useParams } from "react-router";
import "./ItemPage.css";
import ImageCatalog from "../../Components/ImageCatalog/ImageCatalog";
import { addToCartAction } from "../../Store/CartAction";
import {
  addToFavAction,
  getFavItemsAction,
  removeFavItemsAction,
} from "../../Store/Fav/FavActions";

function ItemPage() {
  //refetch data with the Product Id we have in the param
  //reduce the memory usage but increase load on server
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [favorited, setFavorited] = useState(false);
  const favs = useSelector((state) => state.fav.favItems);
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const inFav = Object.values(favs).some(
    (item) => item?.id === selectedProduct.id
  );
  useEffect(() => {
    dispatch(getFavItemsAction());
  }, [favorited]);

  const availInStock = selectedProduct.stock === 0 ? true : false;

  useEffect(() => {
    dispatch(fetchSelectedProduct(productId));
  }, []);

  function addToCartHandler() {
    dispatch(addToCartAction(selectedProduct));
  }
  function addToFavtHandler() {
    dispatch(addToFavAction(selectedProduct));
    setFavorited(true);
  }

  function removeHandler() {
    dispatch(removeFavItemsAction(selectedProduct.id));
    setFavorited(true);
  }

  return (
    <Container className=" d-md-flex flex-column m-4">
      <div className="d-flex  flex-md-row flex-column align-items-center  m-4">
        <ImageCatalog images={selectedProduct.images} />
        <div className="product-text m-4 p-2 ">
          <h1>{selectedProduct.title}</h1>
          <p>{selectedProduct.description}</p>
          <p>
            <span>Price:</span> {selectedProduct.price} $
          </p>
          <p className="rate p-2  border border-success rounded">
            <Star />
            <span>Rate:</span> {selectedProduct.rating}{" "}
          </p>
          <div className="actions">
            <Button
              className="m-1"
              disabled={availInStock}
              onClick={addToCartHandler}
            >
              Add to Cart <Cart />
            </Button>
            {!inFav && (
              <Button className="m-1" onClick={addToFavtHandler}>
                Add to favorite <Fav1 />
              </Button>
            )}
            {inFav && (
              <Button className="m-1" variant="primary" onClick={removeHandler}>
                Remove <Fav2 />
              </Button>
            )}
          </div>
        </div>
      </div>
      <Recomm category={selectedProduct.category} />
    </Container>
  );
}

export default ItemPage;
