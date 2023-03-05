import React from "react";
import bannerImage from "../../../assets/images/banners/network.jpg";
import Layouts from "../../../components/helpers/Layouts";
import Intro from "./Intro";
import More from "./More";
import NetworkTypes from "./NetworkTypes";

export default function Network() {
  return (
    <Layouts bannerImage={bannerImage}>
      <Intro />
      <NetworkTypes />
      <More />
    </Layouts>
  );
}
