import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router";

function PrivateRoute() {
  const location = useLocation();
  const isLoging = useSelector((state) => state.auth.currentUser);
  return isLoging ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace></Navigate>
  );
}

export default PrivateRoute;
