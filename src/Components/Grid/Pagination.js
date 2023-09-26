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
        <Button
          variant={page < 1 ? "secondary" : "primary"}
          disabled={page < 1 ? true : false}
          onClick={prevPage}
        >
          Prev.
        </Button>
        <Button
          variant={page === 90 ? "secondary" : "primary"}
          onClick={nextPage}
          disabled={page === 90 ? true : false}
        >
          Next
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default PageNumber;
