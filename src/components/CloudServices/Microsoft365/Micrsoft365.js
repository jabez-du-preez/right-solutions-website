import React from "react";
import bannerImage from "../../../assets/images/banners/microsoft.jpg";
import Layouts from "../../helpers/Layouts";
import Conclusion from "./Conclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";
import OurRange from "./OurRange";

export default function Microsoft365() {
  return (
    <Layouts bannerImage={bannerImage}>
      <Intro />
      <OurRange />
      <OurOffers />
      <Conclusion />
    </Layouts>
  );
}
