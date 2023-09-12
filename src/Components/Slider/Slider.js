import { Carousel, Image, Container } from "react-bootstrap";
import "./Slider.css";
import dummyImg from "../../assests/Banner for e commerce website 1.jpg";
import dummyImg2 from "../../assests/Banner for e commerce website 2.jpg";
import dummyImg3 from "../../assests/Banner for e commerce website 3.jpg";

function Slider() {
  return (
    <Container>
      <Carousel
        fade
        variant="dark"
        className="d-sm-none d-md-none d-lg-block d-xl-block"
      >
        <Carousel.Item>
          <Image src={dummyImg} alt="shoes"></Image>
          <Carousel.Caption>
            <h1>/Vans at best prices</h1>
            <p>Order Now and get 30% discount on selected items</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={dummyImg2} alt="shoes"></Image>
          <Carousel.Caption>
            <h1>/Sneakers at best prices</h1>
            <p>Sign up & get 30% discount</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={dummyImg3} alt="shoes"></Image>
          <Carousel.Caption>
            <h1>/Shop now</h1>
            <p>get discount and more.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slider;
