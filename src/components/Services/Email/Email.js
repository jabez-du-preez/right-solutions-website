import React from "react";
// import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../helpers/Layouts";
import Conclusion from "./Conclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function Email() {
  return (
    <Layouts bannerImage="https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
      <Intro />
      {/* <OurRange /> */}
      <OurOffers />
      <Conclusion />
    </Layouts>
  );
}
