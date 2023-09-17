import Slider from "../Components/Sections/Slider/Slider";
import DealsSection from "../Components/Sections/Topdeals";
import DiscountBanner from "../Components/Sections/DiscountsBanner";
import Shop from "../Components/Grid/Grid";

function Home() {
  return (
    <>
      <Slider />
      <DealsSection />
      <DiscountBanner />
      <Shop />
    </>
  );
}

export default Home;
