import { useEffect } from "react";
import { Container, Tab, Tabs, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../../Store/fetchingAction";
import { useNavigate, useParams } from "react-router";

function Categories() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  function selectedCategory(event) {
    navigate(`/products/category/${event.target.id}`);
  }

  return (
    <Container className="mt-4">
      <Nav fill variant="tabs" className="">
        {data.categories &&
          data.categories.map((item) => (
            <Nav.Item key={item}>
              <Nav.Link id={item} onClick={selectedCategory}>
                {item}
              </Nav.Link>
            </Nav.Item>
          ))}
      </Nav>
    </Container>
  );
}

export default Categories;

export async function loader() {
  const res = await fetch("https://dummyjson.com/products");
  const data = res.json();
  return data;
}
