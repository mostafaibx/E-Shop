import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeCartItemsAction } from "../../Store/CartAction";

function CartItem(props) {
  const dispatch = useDispatch();
  function removeHandler() {
    dispatch(removeCartItemsAction(props.item.id));
  }
  return (
    <ListGroup className="mt-2">
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{props.item.title}</div>
        </div>
        <div className="d-flex align-items-center">
          <div class=" border border-secondary rounded">
            <h5 className="p-2 m-0">{props.item.price} $</h5>
          </div>
          <Button className="mx-2" variant="danger" onClick={removeHandler}>
            Remove
          </Button>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CartItem;
