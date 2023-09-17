import { Container, Button, FloatingLabel, Form } from "react-bootstrap";
import "./Search.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Search() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  function getSearchText(event) {
    setSearchText(event.target.value);
  }
  function searched(event) {
    event.preventDefault();
    navigate(`/search/${searchText}`);
  }

  return (
    <Container className="mt-4 search-container">
      <form className="d-flex justify-content-center " onSubmit={searched}>
        <FloatingLabel label="Search...">
          <Form.Control
            type="text"
            placeholder="Search"
            onChange={getSearchText}
          ></Form.Control>
        </FloatingLabel>
        <Button className="mx-4" type="submit">
          Search
        </Button>
      </form>
    </Container>
  );
}

export default Search;
