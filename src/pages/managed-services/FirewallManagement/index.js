import React from "react";
import bannerImage from "../../../assets/images/banners/wall.jpg";
import Layouts from "../../../components/helpers/Layouts";
import ReusableConclusion from "../../../components/helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function FirewallManagement() {
  const conclusion = (
    <span>
      With our Firewall Management service, you can have{" "}
      <span className="color-blue fw-500">confidence</span> that your
      organization's <span className="color-blue fw-500">network</span> and{" "}
      <span className="color-blue fw-500">data</span>
      are being properly protected by your firewall systems.{" "}
    </span>
  );
  return (
    <Layouts bannerImage={bannerImage}>
      <Intro />
      <OurOffers />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
