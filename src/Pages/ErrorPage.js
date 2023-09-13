import { Container } from "react-bootstrap";
import Header from "../Components/Header/Header";

function ErrorPage() {
  return (
    <>
      <Header />
      <Container className="m-4 p-4">
        <h1>Error Occured...</h1>
        <h4>Couldn't find the page!!!!</h4>
      </Container>
    </>
  );
}

export default ErrorPage;
