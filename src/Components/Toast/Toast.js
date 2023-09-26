import { useEffect } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setIsAdded } from "../../Store/CartSlice";
import { useSelector } from "react-redux";

function MsgToast() {
  const dispatch = useDispatch();
  const isAdded = useSelector((state) => state.cart.isAdded);
  const notification = useSelector((state) => state.notification.notification);
  useEffect(() => {
    setInterval(() => {
      dispatch(setIsAdded(false));
    }, 4000);
  }, []);

  return (
    <ToastContainer position="bottom-end" style={{ position: "fixed" }}>
      <Toast className="d-inline-block m-1" bg="dark" show={isAdded}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{notification.title}</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{notification.msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default MsgToast;
