import React from "react";
// import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurRange from "./OurRange";

export default function CoManaged() {
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
    const hero = document.querySelector("#co-managed-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layouts
      bannerImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      showButton
      scrollToComponent={scroll}
      buttonText="Learn More"
      pageTitle="We "
      highlight="Bridge "
      pageTitleContinued="the gap between in-house and outsourced IT."
      showSecondButton
    >
      <Intro id="co-managed-intro" />
      <OurRange />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
