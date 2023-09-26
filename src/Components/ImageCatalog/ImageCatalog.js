import { Col, Image, Row } from "react-bootstrap";
import "./ImageCatalog.css";
import { useEffect, useState } from "react";

function ImageCatalog(props) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (props.images && props.images.length > 0) {
      setSelectedImage(props.images[0]);
    }
  }, [props.images]);

  function switchHandler(img) {
    setSelectedImage(img);
  }
  return (
    <Row>
      <Col xs={2} sm={2} md={2} lg={2} xl={2}>
        <div className="d-flex flex-column">
          {props.images &&
            props.images.map((img) => (
              <Image
                thumbnail
                src={img}
                alt="cataloge"
                onClick={() => switchHandler(img)}
              ></Image>
            ))}
        </div>
      </Col>
      <Col xs={10} sm={10} md={10} lg={10} xl={10}>
        <Image
          className=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={selectedImage}
          alt="ee"
        ></Image>
      </Col>
    </Row>
  );
}
export default ImageCatalog;
