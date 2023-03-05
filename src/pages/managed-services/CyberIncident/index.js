import React from "react";
import bannerImage from "../../../assets/images/banners/incident.jpg";
import Layouts from "../../../components/helpers/Layouts";
import ReusableConclusion from "../../../components/helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffer from "./OurOffer";

export default function CyberIncident() {
  const conclusion = (
    <span>
      With our Incident Response service, you can count on a{" "}
      <span className="color-blue fw-500">fast</span> and{" "}
      <span className="color-blue fw-500">effective</span> response to any
      security incident, helping to{" "}
      <span className="color-blue fw-500">minimize the impact</span> on your
      organization and get you back to business as quickly as possible.
    </span>
  );
  return (
    <Layouts bannerImage={bannerImage}>
      <Intro />
      <OurOffer />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
