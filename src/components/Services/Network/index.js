import React from "react";
import bannerImage from "../../../assets/images/banners/network.jpg";
import Layouts from "../../helpers/Layouts";
import Intro from "./Intro";
import More from "./More";
import NetworkTypes from "./NetworkTypes";

export default function Network() {
  const scroll = () => {
    const hero = document.querySelector("#network-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      bannerImage={bannerImage}
      pageTitle="Transform your operations with our"
      highlight="Network"
      pageTitleContinued="solutions"
      buttonText="Learn More"
      showButton
      scrollToComponent={scroll}
      showSecondButton
    >
      <Intro id="network-intro" />
      <NetworkTypes />
      <More />
    </Layouts>
  );
}
