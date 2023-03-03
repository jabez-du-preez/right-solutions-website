import React from "react";
// import bannerImage from "../../../assets/images/banners/amazon.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";
import OurRange from "./OurRange";

export default function Amazon() {
  const conclusion = (
    <span>
      With our AWS service, you can have{" "}
      <span className="color-blue fw-500">confidence</span> that your
      organization is leveraging the{" "}
      <span className="color-blue fw-500">full potential</span> of the cloud to
      support its business needs.
    </span>
  );

  return (
    <Layouts bannerImage="https://images.unsplash.com/photo-1583505093722-15596e9ada6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
      <Intro />
      <OurRange />
      <OurOffers />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
