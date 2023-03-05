import React from "react";
import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../../components/helpers/Layouts";
import GrowingBusiness from "./GrowingBusiness";
import Intro from "./Intro";

export default function Strategy() {
  return (
    <Layouts bannerImage={bannerImage}>
      <Intro />
      <GrowingBusiness />
    </Layouts>
  );
}
