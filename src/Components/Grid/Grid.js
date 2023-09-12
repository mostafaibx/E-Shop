import { Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import Categories from "./Categories";
const DummyItems = [
  {
    id: "i1",
    title: "Vans",
    description: "Classic canvas upper for durability and style.",
    price: "99.99",
    image: "../../assests/item-1.jpg",
  },
  {
    id: "i2",
    title: "Vans OldSchool",
    description: "Padded collar for enhanced comfort and support.",
    price: "105.99",
    image: "../../assests/item-2.jpg",
  },
  {
    id: "i3",
    title: "Nike Air Max",
    description: "Vans' iconic side stripe for an authentic look.",
    price: "304.50",
    image: "../../assests/item-3.jpg",
  },
  {
    id: "i4",
    title: "Adidas Original",
    description: "Vans' iconic side stripe for an authentic look.",
    price: "80.79",
    image: "../../assests/item-4.jpg",
  },
  {
    id: "i5",
    title: "New Balance 343 ",
    description: "Waffle outsole for superior grip and traction.",
    price: "130.40",
    image: "../../assests/item-5.jpg",
  },
  {
    id: "i6",
    title: "Vans Era 43 Denime",
    description:
      "Versatile design suitable for skateboarding and everyday wear.",
    price: "190.44",
    image: "../../assests/item-6.jpg",
  },
  {
    id: "i7",
    title: "Nike Club C 33",
    description: "Lightweight and breathable upper for superior airflow.",
    price: "200",
    image: "../../assests/item-7.jpg",
  },
  {
    id: "i8",
    title: "Vans Classic Canvas",
    description:
      "Max Air unit in the heel for responsive cushioning and impact protection.",
    price: "180.76",
    image: "../../assests/item-8.jpg",
  },
  {
    id: "i9",
    title: "Classic LifeStyle Sneakers",
    description:
      "Nike React foam in the midsole for a smooth and energized ride.",
    price: "60.35",
    image: "../../assests/item-9.jpg",
  },
  {
    id: "i10",
    title: "Vans Vintage V432",
    description: "Durable rubber outsole for excellent traction and grip.",
    price: "40.20",
    image: "../../assests/item-10.jpg",
  },
  {
    id: "i11",
    title: "Sneakers Max F432",
    description: "Durable rubber outsole for excellent traction and grip.",
    price: "40.20",
    image: "../../assests/item-11.jpg",
  },
  {
    id: "i12",
    title: "Classic Sneakers S3C2",
    description: "Durable rubber outsole for excellent traction and grip.",
    price: "134.20",
    image: "../../assests/item-12.jpg",
  },
  {
    id: "i13",
    title: "PUMA RX E33",
    description: "Durable rubber outsole for excellent traction and grip.",
    price: "54.99",
    image: "../../assests/item-13.jpg",
  },
];

function Shop() {
  return (
    <>
      <Categories />
      <Row>
        {DummyItems.map((item) => (
          <Col md={4} className="mt-4">
            <ItemCard
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.description}
              price={item.price}
              imgUrl={item.image}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Shop;
