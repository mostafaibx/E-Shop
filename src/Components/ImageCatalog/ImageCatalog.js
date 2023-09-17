import { Image } from "react-bootstrap";
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
    <div className="d-flex flex-column flex-md-row">
      <div className="d-flex m-0 mt-4 main-container">
        <div className="small-img d-flex flex-row flex-md-column  ">
          {props.images &&
            props.images.map((img) => (
              <Image
                thumbnail
                src={img}
                alt="ddd"
                onClick={() => switchHandler(img)}
              ></Image>
            ))}
        </div>
      </div>
      <Image className="" src={selectedImage} alt="ee"></Image>
    </div>
  );
}
export default ImageCatalog;
