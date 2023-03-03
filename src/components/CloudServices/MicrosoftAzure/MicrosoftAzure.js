import React from "react";
import bannerImage from "../../../assets/images/banners/azure.jpg";
import Layouts from "../../helpers/Layouts";
import CloudRange from "./CloudRange";
import Conclusion from "./Conclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function MicrosoftAzure() {
  const scroll = () => {
    const hero = document.querySelector("#azure-intro");
    hero.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <Layouts
      bannerImage={bannerImage}
      pageTitle="Microsoft Azure?"
      highlight="We do that too!"
      showButton
      buttonText="Learn more"
      scrollToComponent={scroll}
    >
      <Intro id="azure-intro" />
      <CloudRange />
      <OurOffers />
      <Conclusion />
    </Layouts>
  );
}
