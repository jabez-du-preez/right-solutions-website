import React from "react";
// import bannerImage from "../../../assets/images/banners/phishing.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function PhishingSimulation() {
  const conclusion = (
    <span>
      With our Phishing Simulation service, you can have{" "}
      <span className="color-blue fw-500">confidence</span> that your team is
      prepared to <span className="color-blue fw-500">recognize</span> and{" "}
      <span className="color-blue fw-500">prevent</span> phishing attacks, and
      that your organization is better protected from these types of threats.
    </span>
  );

  const scroll = () => {
    const hero = document.querySelector("#phishing-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layouts
      bannerImage="https://images.unsplash.com/photo-1583249598754-b7a2f59651fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      showButton
      scrollToComponent={scroll}
      buttonText="Learn More"
      showSecondButton
      pageTitle="We don't take your users on a "
      highlight="phishing "
      pageTitleContinued="trip"
    >
      <Intro id="phishing-intro" />
      <OurOffers />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
