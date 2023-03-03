import React from "react";
import bannerImage from "../../../assets/images/banners/microsoft.jpg";
import CustomDivider from "../../helpers/CustomDivider";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";
import OurRange from "./OurRange";

export default function Microsoft365() {
  const conclusion = (
    <span>
      With our Microsoft 365 service, you can have{" "}
      <span className="color-blue fw-500">confidence</span> that your
      organization is leveraging the{" "}
      <span className="color-blue fw-500">full potential</span> of the cloud to
      support its business needs.
    </span>
  );
  return (
    <Layouts bannerImage={bannerImage}>
      <Intro />
      <OurRange />
      <OurOffers />
      <CustomDivider />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
