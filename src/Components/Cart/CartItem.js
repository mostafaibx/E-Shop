import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeCartItemsAction } from "../../Store/CartAction";

function CartItem(props) {
  const dispatch = useDispatch();
  function removeHandler() {
    dispatch(removeCartItemsAction(props.item.id));
  }
  return (
    <ListGroup className="mt-2 ">
      <ListGroup.Item className="d-flex justify-content-between align-items-center flex-md-row flex-column shadow p-3 mb-5 bg-body rounded">
        <div className="ms-2 me-auto">
          <h4>{props.item?.title}</h4>
        </div>
        <div className="d-flex align-items-center flex-column mx-3">
          <div class=" border-bottom border-secondary rounded mb-2">
            <p className="p-2 m-0 border-left">
              <span className="fw-bold">Price:</span> {props.item?.price} $
            </p>
          </div>
          <div class=" border-bottom border-secondary rounded">
            <p className="p-2 m-0 border-left">
              <span className="fw-bold"> Amount:</span> {props.item?.amount} x
            </p>
          </div>
        </div>
        <Button
          className="mx-2 mt-2 mt-md-0"
          variant="danger"
          onClick={removeHandler}
        >
          Remove
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default CartItem;
