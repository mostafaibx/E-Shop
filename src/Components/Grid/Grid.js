import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, fetchProducts } from "../../Store/fetchingAction";
import ItemCard from "./ItemCard/ItemCard";
import Categories from "./CategoriesBar/Categories";
import PageNumber from "./Pagination";
import Search from "./Search/Search";

function Shop(props) {
  const dispatch = useDispatch();
  const defData = useSelector((state) => state.products.products);
  const data = props.products ?? defData;

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  return (
    <Container>
      <Search />
      <Categories />
      <Row>
        {data.products &&
          data.products.map((item) => (
            <Col key={item.id} md={4} sm={6} className="mt-4">
              <ItemCard id={item.id} item={item} />
            </Col>
          ))}
      </Row>
      <PageNumber />
    </Container>
  );
}

export default Shop;
