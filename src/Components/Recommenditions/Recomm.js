import { Container } from "react-bootstrap";
import ItemCard from "../Grid/ItemCard/ItemCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSelectedCategory } from "../../Store/fetchingAction";
import "./Recomm.css";

function Recomm(props) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.loadingerror.isLoading);
  const selectedCategory = useSelector(
    (state) => state.products.productsofCategory
  );
  useEffect(() => {
    dispatch(fetchSelectedCategory(props.category));
  }, [props.category]);

  return (
    <Container>
      <h1>Recommenditions:</h1>
      <div className="d-flex justify-content-between m-4 recomm">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          selectedCategory.products &&
          selectedCategory.products.map((item) => (
            <div key={item.id} className="mx-4">
              <ItemCard item={item} />
            </div>
          ))
        )}
      </div>
    </Container>
  );
}

export default Recomm;
