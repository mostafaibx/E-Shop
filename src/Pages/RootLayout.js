import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default RootLayout;
