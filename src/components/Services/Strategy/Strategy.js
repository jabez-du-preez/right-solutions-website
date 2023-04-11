import React from "react";
import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../helpers/Layouts";
import GrowingBusiness from "./GrowingBusiness";
import Intro from "./Intro";

export default function Strategy() {
  const scroll = () => {
    const hero = document.querySelector("#strategy-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      bannerImage={bannerImage}
      pageTitle="Transforming businesses to "
      highlight="Thrive"
      buttonText="Learn More"
      showButton
      scrollToComponent={scroll}
      showSecondButton
    >
      <Intro id="strategy-intro" />
      <GrowingBusiness />
    </Layouts>
  );
}
