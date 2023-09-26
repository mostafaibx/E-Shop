import { Container, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartItemsAction } from "../../Store/CartAction";
import { Link } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    dispatch(getCartItemsAction());
  }, [dispatch]);

  const totalPrice =
    cartItems &&
    Object.values(cartItems).reduce(
      (total, item) => total + item?.price * item?.amount,
      0
    );

  return (
    <Row>
      <Col xs={12} sm={12} md={6} lg={8} xl={8}>
        <Container className="bg-light rounded">
          <h1 className="mt-4 p-2">Your Cart:</h1>
          <br></br>
          {cartItems &&
            Object.values(cartItems)?.map((item) => <CartItem item={item} />)}
          <br />
        </Container>
      </Col>
      <Col xs={12} sm={12} md={6} lg={4} xl={4}>
        <Container className=" bg-dark text-light p-4 mt-4 shadow p-3 mb-5 rounded">
          <h5 className="m-2 p-4 order-header">Order Summary:</h5>
          <span className="d-flex justify-content-between">
            <strong>Sub total:</strong>
            <p> {totalPrice} $ </p>
          </span>
          <span className="d-flex justify-content-between">
            <strong>Shipping:</strong>
            <p> free </p>
          </span>
          <span className="d-flex justify-content-around total-cost">
            <strong>Total Cost:</strong>
            <p> {totalPrice} $ </p>
          </span>
          <Button className="m-2 w-100">Check Out</Button>
          <Button className="m-2 w-100" variant="secondary">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Containue Shopping
            </Link>
          </Button>
        </Container>
      </Col>
    </Row>
  );
}

export default CartPage;
