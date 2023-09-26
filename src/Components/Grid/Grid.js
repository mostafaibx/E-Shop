import { Row, Col, Container } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, fetchProducts } from "../../Store/fetchingAction";
import ItemCard from "./ItemCard/ItemCard";
import Categories from "./CategoriesBar/Categories";
import PageNumber from "./Pagination";
import Search from "./Search/Search";
import { getFavItemsAction } from "../../Store/Fav/FavActions";

function Shop(props) {
  const dispatch = useDispatch();
  const defData = useSelector((state) => state.products.products);
  const data = props.products ?? defData;

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getFavItemsAction());
  }, []);

  return (
    <Container>
      <Search />
      <Categories />
      <Row>
        {data.products &&
          data.products.map((item) => (
            <Col
              key={item.id}
              xl={3}
              lg={4}
              md={6}
              sm={6}
              xs={12}
              className="mt-4 "
            >
              <ItemCard id={item.id} item={item} />
            </Col>
          ))}
      </Row>
      <PageNumber />
    </Container>
  );
}

export default Shop;
