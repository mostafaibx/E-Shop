import { Container, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartItemsAction } from "../../Store/CartAction";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoading = useSelector((state) => state.loadingerror.isLoading);

  const dispatch = useDispatch();
  const totalPrice = cartItems?.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    dispatch(getCartItemsAction());
  }, []);

  return (
    <Container className="m-4">
      <h1>Your Cart</h1>
      <br></br>
      <Container>
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && cartItems?.map((item) => <CartItem item={item} />)}

        <br />
        <h4>Total Order: {totalPrice}$</h4>
        <Container className="d-flex justify-content-center flex-column w-50">
          <Button className="m-2" variant="secondary">
            Containue Shopping
          </Button>
          <Button className="m-2">Check Out</Button>
        </Container>
      </Container>
    </Container>
  );
}

export default CartPage;
