import { Col, Container, Row } from "react-bootstrap";
import ItemCard from "../Components/Grid/ItemCard/ItemCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResult } from "../Store/fetchingAction";
import Search from "../Components/Grid/Search/Search";

function SearchResult() {
  const { searchText } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearchResult(searchText));
  }, [searchText]);

  const data = useSelector((state) => state.products.searchResult);
  return (
    <Container>
      <Search />
      <h1>Search Results: </h1>
      <Row>
        {data.products &&
          data.products.map((item) => (
            <Col key={item.id} md={4} className="mt-4">
              <ItemCard item={item} />
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default SearchResult;
