import React from "react";
import bannerImage from "../../../assets/images/banners/threat.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function ThreatHunting() {
  const conclusion = (
    <span>
      With our Threat Hunting service, you can have{" "}
      <span className="color-blue fw-500">confidence</span> that your
      organization is proactively{" "}
      <span className="color-blue fw-500">protecting</span> itself against
      potential <span className="color-red fw-500">threats</span> to its systems
      and data.
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
