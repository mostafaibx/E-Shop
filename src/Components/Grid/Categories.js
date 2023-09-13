import { useEffect } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../../Store/fetchingAction";

function Categories() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  console.log(data.categories);
  return (
    <Container className="mt-4">
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        {data.categories &&
          data.categories.map((item) => (
            <Tab eventKey="home" title={`${item}`}>
              Tab content for xxx
            </Tab>
          ))}
      </Tabs>
    </Container>
  );
}

export default Categories;

export async function loader() {
  const res = await fetch("https://dummyjson.com/products");
  const data = res.json();
  return data;
}
