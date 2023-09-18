import { useSelector } from "react-redux";
import { Outlet, useLocation, Navigate } from "react-router";

function PrivateRouteLogin() {
  const location = useLocation();
  const isLoging = useSelector((state) => state.auth.currentUser);
  return !isLoging ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
}

export default PrivateRouteLogin;
