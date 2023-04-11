import React from "react";
// import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function Email() {
  const conclusion = (
    <span>
      With our Email Security service, you can have confidence that your
      organization's email systems are{" "}
      <span className="color-blue fw-500">secure</span> and your data is{" "}
      <span className="color-blue fw-500">protected</span> from email-based
      threats.
    </span>
  );

  const scroll = () => {
    const hero = document.querySelector("#email-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      bannerImage="https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      showButton
      scrollToComponent={scroll}
      buttonText="Learn More"
      pageTitle="Securing your inbox, securing your "
      highlight="Business"
      showSecondButton
    >
      <Intro id="email-intro" />
      <OurOffers />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
