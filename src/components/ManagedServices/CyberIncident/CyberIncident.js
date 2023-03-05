import React from "react";
// import bannerImage from "../../../assets/images/banners/incident.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffer from "./OurOffer";

export default function CyberIncident() {
  const conclusion = (
    <span>
      With our Incident Response service, you can count on a{" "}
      <span className="color-blue fw-500">fast</span> and{" "}
      <span className="color-blue fw-500">effective</span> response to any
      security incident, helping to{" "}
      <span className="color-blue fw-500">minimize the impact</span> on your
      organization and get you back to business as quickly as possible.
    </span>
  );
  const scroll = () => {
    const hero = document.querySelector("#cyber-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      bannerImage="https://images.unsplash.com/photo-1531570003789-62d56ed3b271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
      showButton
      scrollToComponent={scroll}
      buttonText="Learn More"
      showSecondButton
    >
      <Intro id="cyber-intro" />
      <OurOffer />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
