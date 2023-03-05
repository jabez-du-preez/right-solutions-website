import React from "react";
import bannerImage from "../../../assets/images/banners/office.jpg";
import Layouts from "../../../components/helpers/Layouts";
import Intro from "./Intro";
import ModernSolutions from "./ModernSolutions";

export default function ModernWorkplace() {
  const scroll = () => {
    const hero = document.querySelector("#modern-workplace-intro");
    hero.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Layouts
      bannerImage={bannerImage}
      pageTitle="Transform your operations with our"
      highlight="Modern Workplace"
      pageTitleContinued="solutions"
      buttonText="Learn More"
      showButton
      scrollToComponent={scroll}
    >
      <Intro id="modern-workplace-intro" />
      <ModernSolutions />
    </Layouts>
  );
}
