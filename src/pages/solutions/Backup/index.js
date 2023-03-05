import React from "react";
import bannerImage from "../../../assets/images/banners/backup.jpg";
import CustomDivider from "../../../components/helpers/CustomDivider";
import Layouts from "../../../components/helpers/Layouts";
import ReusableConclusion from "../../../components/helpers/ReusableConclusion";
import Intro from "./Intro";
import Solutions from "./Solutions";

export default function Backup() {
  const conclusion = (
    <span>
      With our Managed Backup Solution, you can have peace of mind knowing that
      your organization's data is being{" "}
      <span className="color-blue fw-500">properly protected</span> and is{" "}
      <span className="color-blue fw-500">always available</span> when needed.
    </span>
  );
  return (
    <Layouts bannerImage={bannerImage}>
      <Intro />
      <Solutions />
      <CustomDivider />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
