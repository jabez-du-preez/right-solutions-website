import React from "react";
// import bannerImage from "../../../assets/images/banners/darkweb.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";

export default function DarkWeb() {
  const conclusion = (
    <span>
      With our Dark Web Monitoring service, you can have{" "}
      <span className="color-blue fw-500">peace of mind</span> knowing that your
      organization's <span className="color-red fw-500">sensitive data</span>{" "}
      and <span className="color-red fw-500">assets</span> are being
      continuously monitored and protected.
    </span>
  );
  const scroll = () => {
    const hero = document.querySelector("#darkweb-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      bannerImage="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      showButton
      scrollToComponent={scroll}
      buttonText="Learn More"
      showSecondButton
      pageTitle="We monitor the "
      highlight="dark web "
      pageTitleContinued="so you don't have to"
    >
      <Intro id="darkweb-intro" />
      <OurOffers />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
