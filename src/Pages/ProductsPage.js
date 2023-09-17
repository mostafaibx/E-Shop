import { Container } from "react-bootstrap";
import Shop from "../Components/Grid/Grid";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSelectedCategory } from "../Store/fetchingAction";
import { useParams } from "react-router";

function ProductsPage() {
  const dispatch = useDispatch();
  const { catId } = useParams();
  const selectedCategory = useSelector(
    (state) => state.products.productsofCategory
  );
  useEffect(() => {
    dispatch(fetchSelectedCategory(catId));
  }, [catId]);

  return (
    <Container>
      <Shop products={selectedCategory} />
    </Container>
  );
}

export default ProductsPage;
