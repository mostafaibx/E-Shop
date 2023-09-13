import { Row, Col, Container } from "react-bootstrap";
import ItemCard from "./ItemCard";
import Categories from "./Categories";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../Store/fetchingAction";

function Shop() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Categories />
      <Row>
        {data.products.products &&
          data.products.products.map((item) => (
            <Col md={4} className="mt-4">
              <ItemCard
                key={item.id}
                id={item.id}
                title={item.title}
                desc={item.description}
                price={item.price}
                imgUrl={item.images}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Shop;
