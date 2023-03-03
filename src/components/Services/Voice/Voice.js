import React from "react";
// import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurVOIP from "./OurVOIP";
import Solutions from "./Solutions";

export default function Voice() {
  const scroll = () => {
    const hero = document.querySelector("#voice-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };

  const conclusion = (
    <span>
      With our VOIP Solution, you can have{" "}
      <span className="color-blue fw-400">confidence</span> that your
      organization's business communications are{" "}
      <span className="color-blue fw-400">reliable</span>,{" "}
      <span className="color-blue fw-400">flexible</span>, and{" "}
      <span className="color-blue fw-400">cost-effective</span>.
    </span>
  );
  return (
    <Layouts
      bannerImage="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80"
      pageTitle="Imagine being able to take your business phone system on the go!"
      showButton
      buttonText="Learn More"
      scrollToComponent={scroll}
    >
      <Intro id="voice-intro" />
      <OurVOIP />
      <Solutions />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
