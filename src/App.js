import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Shop from "./Components/Grid/Grid";
import ItemPage from "./Components/ItemPage/ItemPage";
import ModalD from "./Components/Modal/Modal";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import CartPage from "./Components/Cart/CartPage";

function App() {
  return (
    <Container>
      <Header />
      <Slider />
      <Shop />
    </Container>
  );
}

export default App;
