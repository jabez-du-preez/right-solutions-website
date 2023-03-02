import React from "react";
import bannerImage from "../../../assets/images/banners/backup.jpg";
import CustomDivider from "../../helpers/CustomDivider";
import Layouts from "../../helpers/Layouts";
import Conclusion from "./Conclusion";
import Intro from "./Intro";
import Solutions from "./Solutions";

export default function Backup() {
  return (
    <Layouts bannerImage={bannerImage}>
      <Intro />
      <Solutions />
      <CustomDivider />
      <Conclusion />
    </Layouts>
  );
}
