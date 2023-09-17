import { useEffect, useState } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../Store/fetchingAction";

function PageNumber() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  function nextPage() {
    if (page >= 100) {
      return;
    } else {
      setPage(page + 30);
    }
  }

  function prevPage() {
    if (page === 0) {
      return;
    } else {
      setPage(page - 30);
    }
  }
  useEffect(() => {
    dispatch(fetchProducts(page));
  }, [page]);

  return (
    <Container className="d-flex justify-content-center">
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={prevPage}>
          Prev.
        </Button>
        <Button variant="secondary" onClick={nextPage}>
          Next
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default PageNumber;
