import React from "react";
import bannerImage from "../../../assets/images/banners/office.jpg";
import Layouts from "../../helpers/Layouts";
import Intro from "./Intro";
import ModernSolutions from "./ModernSolutions";

export default function ModernWorkplace() {
  const scroll = () => {
    const hero = document.querySelector("#modern-workplace-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layouts
      bannerImage={bannerImage}
      pageTitle="Transform your operations with our "
      highlight="Modern Workplace "
      pageTitleContinued="Solutions"
      buttonText="Learn More"
      showButton
      scrollToComponent={scroll}
      showSecondButton
    >
      <Intro id="modern-workplace-intro" />
      <ModernSolutions />
    </Layouts>
  );
}
