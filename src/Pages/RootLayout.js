import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading/Loading";
import MsgToast from "../Components/Toast/Toast";

function RootLayout() {
  const isLoading = useSelector((state) => state.loadingerror.isLoading);

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <MsgToast />
      <Outlet />
    </>
  );
}
export default RootLayout;
