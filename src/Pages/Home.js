import Slider from "../Components/Sections/Slider/Slider";
import DealsSection from "../Components/Sections/Topdeals";
import DiscountBanner from "../Components/Sections/DiscountsBanner";
import Shop from "../Components/Grid/Grid";
import MsgToast from "../Components/Toast/Toast";

function Home() {
  return (
    <>
      <Slider />
      <DealsSection />
      <DiscountBanner />
      <Shop />
      <MsgToast />
    </>
  );
}

export default Home;
