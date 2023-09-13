import { Container, Image, Button } from "react-bootstrap";
import dummyImg from "../../assests/item-7.jpg";
import { Cart, Fav1 } from "../../Icons/Icons";
import FavMenu from "../FavoriteMenu/FavMenu";
import Recomm from "../Recommenditions/Recomm";
import { useNavigate } from "react-router";

function ItemPage() {
  const navigate = useNavigate();
  function openProduct() {
    navigate("/product");
  }

  return (
    <Container className=" m-4">
      <div className="d-flex m-4">
        <Image src={dummyImg} alt="thumb" thumbnail className="w-25"></Image>
        <div className="text m-4">
          <h1>item name</h1>
          <p>
            Description: dldk lnlskdns sldk lkdsl sdnsi dnü da nl
            lasdknlksndvlks sldkvnln lsdkn l kdndsln ln nljdsn lj dldk lnlskdns
            sldk lkdsl sdnsi dnü da nl lasdknlksndvlks sldkvnln lsdkn l kdndsln
            ln nljdsn lj dldk lnlskdns sldk lkdsl sdnsi dnü da nl
            lasdknlksndvlks sldkvnln lsdkn l kdndsln ln nljdsn lj
          </p>
          <p>Price: 22$</p>
          <div className="actions">
            <Button className="m-4">
              Add to Cart <Cart />
            </Button>
            <Button className="m-4">
              Add to favorite <Fav1 />
            </Button>
          </div>
        </div>
        <FavMenu />
      </div>
      <Recomm />
    </Container>
  );
}

export default ItemPage;
