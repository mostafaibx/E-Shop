import { useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setIsAdded } from "../../Store/CartSlice";
import { useSelector } from "react-redux";

function MsgToast() {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) => state.cart.isAdded);
  useEffect(() => {
    setInterval(() => {
      dispatch(setIsAdded(false));
    }, 2000);
  }, []);

  return (
    <ToastContainer position="bottom-end" style={{ position: "fixed" }}>
      <Toast className="d-inline-block m-1" bg="dark" show={isAdded}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body className="text-white">
          Item Added to cart Successfuly
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MsgToast;
