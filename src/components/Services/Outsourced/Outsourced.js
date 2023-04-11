import React from "react";
// import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurRange from "./OurRange";

export default function Outsourced() {
  const conclusion = (
    <span>
      With our Outsourced IT service, you can have{" "}
      <span className="color-blue fw-500">peace of mind</span> knowing that your
      organization's IT needs are being{" "}
      <span className="color-blue fw-500">expertly</span> managed by a team of
      professionals.
    </span>
  );
  const scroll = () => {
    const hero = document.querySelector("#outsourced-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      bannerImage="https://images.unsplash.com/photo-1598519308765-6ab4a1cb1aec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      showButton
      scrollToComponent={scroll}
      buttonText="Learn More"
      pageTitle="Realiable "
      highlight="Solutions"
      pageTitleContinued=", outsourced to perfection"
      showSecondButton
    >
      <Intro id="outsourced-intro" />
      <OurRange />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
