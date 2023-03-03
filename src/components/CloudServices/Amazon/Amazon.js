import React from "react";
// import bannerImage from "../../../assets/images/banners/amazon.jpg";
import Layouts from "../../helpers/Layouts";
import Conclusion from "./Conclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";
import OurRange from "./OurRange";

export default function Amazon() {
  return (
    <Layouts bannerImage="https://images.unsplash.com/photo-1583505093722-15596e9ada6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
      <Intro />
      <OurRange />
      <OurOffers />
      <Conclusion />
    </Layouts>
  );
}
