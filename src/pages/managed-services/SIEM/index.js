import React from "react";
// import bannerImage from "../../../assets/images/banners/siem.jpg";
import Layouts from "../../../components/helpers/Layouts";
import ReusableConclusion from "../../../components/helpers/ReusableConclusion";
import Intro from "./Intro";
import OurRange from "./OurRange";

export default function SIEM() {
  const conclusion = (
    <span>
      With our Managed SIEM and SOC service, you can have{" "}
      <span className="color-blue fw-500">peace of mind</span> knowing that your
      organization's security is in the hands of{" "}
      <span className="color-blue fw-500">experts</span>.
    </span>
  );
  return (
    <Layouts bannerImage="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80">
      <Intro />
      <OurRange />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
