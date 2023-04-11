import React from "react";
import bannerImage from "../../../assets/images/banners/microsoft.jpg";
import CustomDivider from "../../helpers/CustomDivider";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Intro from "./Intro";
import OurOffers from "./OurOffers";
import OurRange from "./OurRange";

export default function Microsoft365() {
  const conclusion = (
    <span>
      With our Microsoft 365 service, you can have{" "}
      <span className="color-blue fw-500">confidence</span> that your
      organization is leveraging the{" "}
      <span className="color-blue fw-500">full potential</span> of the cloud to
      support its business needs.
    </span>
  );

  const scroll = () => {
    const hero = document.querySelector("#365-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layouts
      bannerImage={bannerImage}
      pageTitle="Your employees will collaborate unlike "
      highlight="ever "
      pageTitleContinued="before with Microsoft 365"
      scroll={scroll}
      showButton
      buttonText="Learn More"
      showSecondButton
    >
      <Intro id="365-intro" />
      <OurRange />
      <OurOffers />
      <CustomDivider />
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
