import React from "react";
import bannerImage from "../../../assets/images/banners/awareness.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function SecurityAwareness() {
  const conclusion = (
    <span>
      With our Security Awareness Training service, you can help your team stay{" "}
      <span className="color-blue fw-500">safe</span> and{" "}
      <span className="color-blue fw-500">secure</span> online, and{" "}
      <span className="color-blue fw-500">protect</span> your organization from
      cyber threats.
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
