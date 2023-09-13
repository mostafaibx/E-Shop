import Header from "../Components/Header/Header";
import Slider from "../Components/Slider/Slider";
import DealsSection from "../Components/Sections/Topdeals";
import DiscountBanner from "../Components/Sections/DiscountsBanner";
import Shop from "../Components/Grid/Grid";
import { useState } from "react";

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

export async function loader() {
  const res = await fetch("https://dummyjson.com/products");
  const data = res.json();
  return data;
}
