import React from "react";
import bannerImage from "../../../assets/images/banners/wall.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function FirewallManagement() {
  const conclusion = (
    <span>
      With our Firewall Management service, you can have{" "}
      <span className="color-blue fw-500">confidence</span> that your
      organization's <span className="color-blue fw-500">network</span> and{" "}
      <span className="color-blue fw-500">data</span>
      are being properly protected by your firewall systems.{" "}
    </span>
  );

  const scroll = () => {
    const hero = document.querySelector("#firewall-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      bannerImage={bannerImage}
      showButton
      scrollToComponent={scroll}
      buttonText="Learn More"
      showSecondButton
      pageTitle="We will protect your "
      highlight="network "
      pageTitleContinued="using our cutting edge firewall service"
    >
      <Intro id="firewall-intro" />
      <OurOffers />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
